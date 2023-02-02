import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import Auth from "./auth/reducer";
import navigation from "./navigation/reducer";

const createReducer = (asyncReducers) =>
  combineReducers({
    Auth,
    navigation,
    router: routerReducer,
    ...asyncReducers,
  });

export default createReducer;
