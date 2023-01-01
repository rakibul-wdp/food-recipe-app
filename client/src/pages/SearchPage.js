import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { listFiltredRecipes } from "../actions/recipeActions";
import Alert from "../components/complements/Alert";
import Paginate from "../components/complements/Paginate";
import MainHeader from "../components/layout/MainHeader";
import Recipe from "../components/recipes/Recipe";
import SkeletonRecipe from "../components/skeletons/SkeletonRecipe";

const SearchPage = ({ match }) => {
  const term = match.params.term;

  const location = useLocation();

  const pageNumber = match.params.page || 1;
  // Bring in recipes
  const recipeFiltred = useSelector((state) => state.recipeFiltred);
  const {
    loading: recipesLoading,
    error: recipesError,
    recipes,
    pages,
    page,
  } = recipeFiltred;

  // Manage active filters
  const [activeTerm, setActiveTerm] = useState(term);

  const [showSearchBox, setShowSearchBox] = useState(false);
  const [termVal, setTermVal] = useState("");

  const hanldeInput = (e) => {
    setActiveTerm(e.target.value);
    setTermVal(e.target.value);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listFiltredRecipes(activeTerm, pageNumber, location.search));

    window.addEventListener("click", (e) => {
      if (e.target === document.querySelector(".input-box")) {
        setShowSearchBox(false);
      }
    });
  }, [dispatch, activeTerm, pageNumber, location]);

  const arr = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      <MainHeader />
      <div className="search-page">
        <div className="container">
          {showSearchBox && (
            <div className="input-box">
              <div className="input-box__container">
                <input
                  type="text"
                  placeholder="Search recipes..."
                  value={termVal}
                  onChange={hanldeInput}
                />
              </div>
            </div>
          )}
          {!showSearchBox && (
            <div className="search-box">
              <i
                onClick={() => setShowSearchBox(true)}
                className="fas fa-search"
              ></i>
            </div>
          )}
          {/* <button className='filter'>
            <i className='fas fa-filter filterIcon'></i> Filters
          </button>

          {activeTerm && activeTerm.trim() !== "" && (
            <button onClick={() => setActiveTerm("")} className='filter active'>
              {activeTerm} <i className='fas fa-times'></i>
            </button>
          )} */}

          <div>
            {recipesLoading ? (
              <div className="recipes">
                <div>
                  {arr.map((i) => (
                    <SkeletonRecipe key={i} />
                  ))}
                </div>
              </div>
            ) : recipesError ? (
              <Alert type="danger">{recipesError}</Alert>
            ) : recipes.length === 0 ? (
              <div className="no-results">
                <img alt="No recipes found" src="/images/sorry.png" />
                <p className="lead my-1 text-center">
                  Sorry, we could'nt find any recipes
                </p>
              </div>
            ) : (
              <div className="recipes">
                <div>
                  {recipes.map((recipe) => (
                    <Recipe recipe={recipe} key={recipe._id} />
                  ))}
                </div>
              </div>
            )}
          </div>
          <Paginate pages={pages} page={page} term={term} />
        </div>
      </div>
    </>
  );
};

export default SearchPage;
