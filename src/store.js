import { combineReducers, applyMiddleware } from "redux";
import { legacy_createStore as createStore} from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { todos, isLoading } from "./todos/reducers";

const reducers = {
    todos, 
    isLoading
};

const persistConfig = {
    key: 'root',
    storage,
    stateTeconciler: autoMergeLevel2,
}

const rootReducer = combineReducers(reducers); 
const persistedReducer = persistReducer(persistConfig , rootReducer);
export const configureStore=()=>createStore(
    persistedReducer, 
    composeWithDevTools(
        applyMiddleware(thunk)
    ) );