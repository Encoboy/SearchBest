export default class Http {
  static postMethod({ successFn, method, params }) {
    let contentType = "application/json;charset=UTF-8";
    let headUrlStr = "http://3.141.23.218:5000";
    fetch(headUrlStr + method, {
      method: "POST",
      headers: { "Content-Type": contentType },
      body: JSON.stringify(params),
    })
      .then((response) => response.json())
      .then((obj) => {
        if (obj.status === "OK") {
          successFn && successFn(obj.data);
        }
      })
      .catch((err) => console.log(err));
  }
}
