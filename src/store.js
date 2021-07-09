import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import reducer from "./reducer";

const reducers = {
  // ... your other reducers here ...
  userListReducer: reducer,
  form: formReducer
};

const creducer = combineReducers(reducers);
const store = createStore(creducer);

export default store;
