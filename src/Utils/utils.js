export let debounce = (fn, wait) => {
  let timeout = null;
  return function () {
    let context = this;
    let arg = [...arguments];
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(context, arg);
    }, wait);
  };
};
