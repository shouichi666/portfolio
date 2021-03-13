const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ID_STATE":
      return { ...state, id: action.id };
    default:
      return state;
  }
};

export default reducer;
