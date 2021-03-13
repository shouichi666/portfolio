const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ID_STATE":
      return { ...state, id: action.id };
    case "SET_WINDOW_HEIGHT":
      return { ...state, height: action.height };
    default:
      return state;
  }
};

export default reducer;
