const debounce = (func, waitTime) => {
  let timeout;

  return (...args) => {
    const callLater = () => {
      timeout = null;
      func(...args);
    };

    clearTimeout(timeout);

    timeout = setTimeout(callLater, waitTime);
  };
};

export default debounce;
