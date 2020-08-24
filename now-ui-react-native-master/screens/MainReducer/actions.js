import * as actionTypes from './actionTypes';

// dialog
export const chooseCategoryItem = (data) => {
  return {
    type: actionTypes.CHOOSE_CATEGORY_ITEM,
    data,
  };
};

export const chooseProductItem = (data) => {
  return {
    type: actionTypes.CHOOSE_PRODUCT_ITEM,
    data,
  };
};
export const addReview = (data) => {
  return {
    type: actionTypes.ADD_REVIEW,
    data,
  };
};

export const updateProductResult = (data) => {
  return {
    type: actionTypes.UPDATE_PRODUCT_RESULT,
    data,
  };
};
