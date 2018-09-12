import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import createSagaMiddleware from "redux-saga";
import channelsReducer from 'reduxUtility/reducers/channels';
import authReducer from 'reduxUtility/reducers/auth';
import usersReducer from 'reduxUtility/reducers/users';
import messagesReducer from 'reduxUtility/reducers/messages';
import registerReducer from 'reduxUtility/reducers/register';
import {rootSaga} from 'reduxUtility/sagas/';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    channels: channelsReducer,
    auth: authReducer,
    users: usersReducer,
    messages: messagesReducer,
    register: registerReducer
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;