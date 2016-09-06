const reducer = (prevState = 0, action) => {
  if (action.type === 'INCREMENT') {
    return prevState + (action.by ? action.by : 1);
  } else {
    return prevState;
  }
};

export default reducer;
