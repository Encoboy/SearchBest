/* eslint-disable import/no-anonymous-default-export */
const init = {
  product_trends: [],
  isShowHdSeInput: false,
  isBarTitleNameScal: true,
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
    case "isBarTitleNameScal":
      return {
        ...state,
        isBarTitleNameScal: action.isBarTitleNameScal,
      };
    default:
      return state;
  }
};
