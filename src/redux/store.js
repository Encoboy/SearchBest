import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
import { persistStore, persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/es/storage/session";

const persistConfig = {
  key: "root",
  storage: sessionStorage,
};
const myPersistReducer = persistReducer(persistConfig, reducer);
const store = createStore(myPersistReducer, compose(applyMiddleware(thunk)));
export const persistor = persistStore(store);
export default store;
