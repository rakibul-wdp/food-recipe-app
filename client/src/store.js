import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  recentlyViewedReducer, recipeCreateReducer,
  recipeDeleteReducer, recipeDetailsReducer, recipeFiltredReducer, recipeListReducer, recipeUpdateReducer, userRecipesReducer
} from "./reducers/recipeReducers";

import {
  recipeReviewsReducer, reviewCreateReducer, reviewDeleteReducer, reviewListReducer, reviewUpdateReducer, singleReviewReducer, userReviewsReducer
} from "./reducers/reviewReducers";

import {
  accountDeleteReducer, detailsUpdateReducer, emailConfirmationReducer, loginReducer, passwordForgotReducer,
  passwordResetReducer, passwordUpdateReducer, signupReducer, userConfirmEmailReducer, userDetailsReducer
} from "./reducers/authReducers";

import {
  multipleImagesUploadReducer,
  singleImageUploadReducer
} from "./reducers/uploadReducers";

const reducer = combineReducers({
  recipeList: recipeListReducer,
  recipeFiltred: recipeFiltredReducer,
  recipeDetails: recipeDetailsReducer,
  userRecipes: userRecipesReducer,
  recipeCreate: recipeCreateReducer,
  recipeUpdate: recipeUpdateReducer,
  recipeDelete: recipeDeleteReducer,
  recentlyViewed: recentlyViewedReducer,
  userLogin: loginReducer,
  userSignup: signupReducer,
  userDetails: userDetailsReducer,
  detailsUpdate: detailsUpdateReducer,
  passwordUpdate: passwordUpdateReducer,
  passwordForgot: passwordForgotReducer,
  passwordReset: passwordResetReducer,
  emailConfirmation: emailConfirmationReducer,
  userConfirmEmail: userConfirmEmailReducer,
  accountDelete: accountDeleteReducer,
  reviewList: reviewListReducer,
  userReviews: userReviewsReducer,
  recipeReviews: recipeReviewsReducer,
  reviewCreate: reviewCreateReducer,
  reviewUpdate: reviewUpdateReducer,
  reviewDelete: reviewDeleteReducer,
  singleReview: singleReviewReducer,
  singleUpload: singleImageUploadReducer,
  multipleUpload: multipleImagesUploadReducer,
});

const userInfoLS = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const recentlyViewedLS = localStorage.getItem("recentlyViewed")
  ? JSON.parse(localStorage.getItem("recentlyViewed"))
  : [];

const initialState = {
  userLogin: { userInfo: userInfoLS },
  recentlyViewed: { recentlyViewed: recentlyViewedLS },
};

const middleweare = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleweare))
);

export default store;
