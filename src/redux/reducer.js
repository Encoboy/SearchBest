/* eslint-disable import/no-anonymous-default-export */
const init = {
  product_trends: [],
  isShowHdSeInput: false,
};

export default (state = init, action) => {
  switch (action.type) {
    case "proTrendData":
      return {
        ...state,
        product_trends: action.product_trends,
      };
    case "isShowHdSearchInput":
      return {
        ...state,
        isShowHdSeInput: action.isShowHdSeInput,
      };
    default:
      return state;
  }
};
