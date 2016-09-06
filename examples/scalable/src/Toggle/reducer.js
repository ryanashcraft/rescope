const reducer = (prevState = false, action) => {
  if (action.type === 'TOGGLE') {
    return !prevState;
  } else {
    return prevState;
  }
};

export default reducer;
