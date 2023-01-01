import * as constants from "../constants/uploadConstants";
import { updateDetails } from "./authActions";

export const uploadSingleImage = (file) => async (dispatch) => {
  try {
    dispatch({ type: constants.UPLOAD_SINGLE_REQUEST });

    const res = await fetch("/api/v1/upload/set_avatar", {
      method: "POST",
      body: file,
    });
    const { data } = await res.json();
    console.log("single: ", data);

    dispatch({ type: constants.UPLOAD_SINGLE_SUCCESS, payload: data });
    dispatch(updateDetails({ photo: data }));
  } catch (error) {
    dispatch({
      type: constants.UPLOAD_SINGLE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const uploadMultipleImages = (files) => async (dispatch) => {
  try {
    dispatch({ type: constants.UPLOAD_MULTIPLE_REQUEST });
    const res = await fetch("/api/v1/upload/recipe_images", {
      method: "POST",
      body: files,
    });

    const { data } = await res.json();

    console.log("mutiple: ", data);

    dispatch({ type: constants.UPLOAD_MULTIPLE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: constants.UPLOAD_MULTIPLE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
