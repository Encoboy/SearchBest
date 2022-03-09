import Http from "../Api.js/http";

export const getProTtrendData = (value) => {
  return (dispatch) => {
    Http.postMethod({
      method: value.method,
      params: { ...value.params },
      successFn: (data) => {
        dispatch({
          type: "proTrendData",
          product_trends: data.product_trends,
        });
      },
    });
  };
};
