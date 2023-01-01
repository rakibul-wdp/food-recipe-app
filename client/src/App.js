import { Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import ConfirmEmail from "./pages/ConfirmEmail";
import EditRecipePage from "./pages/EditRecipe";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RecipePage from "./pages/RecipePage";
import SearchPage from "./pages/SearchPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route exact path="/recipe/:id" element={<RecipePage/>} />
        <Route path="/recipe/:recipeId/edit" element={<EditRecipePage/>} />
        <Route path="/search/:term?/:page?" element={<SearchPage/>} />
        <Route path="/profile/:username/:recipeId?" element={<ProfilePage/>} />
        <Route path="/confirmemail/:token" element={<ConfirmEmail/>} />
      </Routes>
        <Footer />
    </>
  );
}

export default App;
