import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "../reducers/auth";

const persistConfig = {
	key: "root",
	version: 1,
	storage,
	whitelist: ["auth"],
};

const rootReducer = combineReducers({
	auth: authReducer,
});

export default persistReducer(persistConfig, rootReducer);
