import { BrowserRouter as Router, Route } from "react-router-dom";
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
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignupPage} />
      <Route exact path="/recipe/:id" component={RecipePage} />
      <Route path="/recipe/:recipeId/edit" component={EditRecipePage} />
      <Route path="/search/:term?/:page?" component={SearchPage} />
      <Route path="/profile/:username/:recipeId?" component={ProfilePage} />
      <Route path="/confirmemail/:token" component={ConfirmEmail} />
      <Footer />
    </Router>
  );
}

export default App;
