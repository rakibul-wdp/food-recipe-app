import * as constants from "../constants/uploadConstants";

export const singleImageUploadReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.UPLOAD_SINGLE_REQUEST:
      return {
        loading: true,
      };
    case constants.UPLOAD_SINGLE_SUCCESS:
      return {
        loading: false,
        success: true,
        data: action.payload,
      };
    case constants.UPLOAD_SINGLE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const multipleImagesUploadReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.UPLOAD_MULTIPLE_REQUEST:
      return {
        loading: true,
      };
    case constants.UPLOAD_MULTIPLE_SUCCESS:
      return {
        loading: false,
        success: true,
        data: action.payload,
      };
    case constants.UPLOAD_MULTIPLE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
