const initialState = {
  userList: JSON.parse(localStorage.getItem("userList"))
};

function reducer(state = initialState, action) {
  let newList = [];
  switch (action.type) {
    case "ADD_USER":
      return {
        number: state.number - 1
      };
    case "REMOVE_USER":
      newList = newList.filter((data) => data.id !== action.id);
      localStorage.setItem("userList", JSON.stringify(newList));
      return {
        userList: [...newList]
      };
    case "REORDER_USER":
      localStorage.setItem("userList", JSON.stringify(action.userList));
      return {
        userList: [...action.userList]
      };

    default:
      return state;
  }
}

export default reducer;
