import rootReducer from './rootReducer';
import {compose} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import ServerInterceptor from "../auth/server.interceptor";
import axiosMiddleware from "redux-axios-middleware";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, axiosMiddleware(ServerInterceptor)];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = configureStore({
	reducer: rootReducer(),

	middleware: (getDefaultMiddleware) =>{
		return getDefaultMiddleware({
			immutableCheck: false,
			serializableCheck: false,
		}).concat(middlewares)
	},
	devTools: process.env.NODE_ENV === 'development' ? composeEnhancers : false,
})

sagaMiddleware.run(rootSaga)
store.asyncReducers = {};

export const injectReducer = (key, reducer) => {
	if (store.asyncReducers[key]) {
		return false;
	}
	store.asyncReducers[key] = reducer;
	store.replaceReducer(rootReducer(store.asyncReducers));
	return store
}

export default store