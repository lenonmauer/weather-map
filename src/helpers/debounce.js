const debounce = (func, waitTime) => {
  let timeout;

  return (...arg) => {
    const context = this,

    const later = () => {
      timeout = null;
      func.apply(context, args);
    };

    const callNow = !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, waitTime);

    if (callNow) func.apply(context, args);
  };
}

export { debounce };
