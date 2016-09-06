const randomSize = () => {
	return {
		height: Math.ceil(Math.random() * 300) + 100,
		width: Math.ceil(Math.random() * 300) + 100,
	};
};

const reducer = (prevState = randomSize(), action) => {
  if (action.type === 'CHANGE_SIZE') {
    return randomSize();
  } else {
    return prevState;
  }
};

export default reducer;
