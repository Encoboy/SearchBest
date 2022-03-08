/* eslint-disable import/no-anonymous-default-export */
const init = {
  product_trends: [],
};

export default (state = init, action) => {
  switch (action.type) {
    case "proTrendData":
      return {
        ...state,
        product_trends: action.product_trends,
      };
    default:
      return state;
  }
};
