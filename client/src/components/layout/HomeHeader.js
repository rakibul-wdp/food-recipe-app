import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getUserDetails, logout } from "../../actions/authActions";

const HomeHeader = () => {
  const [term, setTerm] = useState("");

  const history = useHistory();
  const searchHandler = (e) => {
    e.preventDefault();
    if (term.trim()) {
      history.push(`/search/${term}/`);
    } else {
      history.push("/");
    }
  };

  const dispatch = useDispatch();

  // Bring in user info
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDetails = useSelector((state) => state.userDetails);
  const { user, loading: userLoading } = userDetails;

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (userInfo && !user) {
      dispatch(getUserDetails());
    }
  }, [dispatch, user]);
  return (
    <>
      <header className="header" id="header">
        <div className="container">
          <nav className="header__nav">
            <h3 className="header__logo logo">
              <a href="/" style={{ color: "#fff" }}>
                <h3 className="header__logo logo">Foodie Guide</h3>
              </a>
            </h3>
            <ul>
              {user ? (
                <div className="user-logged">
                  <Link
                    className="user-logged__outer"
                    to={`/profile/${userInfo.user._id}`}
                  >
                    <img src={user.photo} alt={user.firstName} />
                    <p>
                      {user.firstName} {user.lastName}{" "}
                    </p>
                  </Link>
                  <button
                    className="btn btn-lg btn-primary rounded"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <Link to="/login">
                    <li className="btn btn-primary rounded" id="login">
                      Login
                    </li>
                  </Link>
                  <Link to="/signup">
                    <li className="btn btn-primary rounded" id="signup">
                      Sign up
                    </li>
                  </Link>
                </>
              )}
            </ul>
          </nav>
          <form className="header__search" onSubmit={searchHandler}>
            <h2 className="primary-heading text-center">
              Discover the world best recipes & foods
            </h2>
            <div>
              <i className="fas fa-search"></i>
              <input
                type="text"
                className="search"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                placeholder="What do you want to cook?"
              />
            </div>
          </form>
        </div>
      </header>
    </>
  );
};

export default HomeHeader;
