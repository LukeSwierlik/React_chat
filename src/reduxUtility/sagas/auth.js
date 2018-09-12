import {put, takeEvery, all, fork } from "redux-saga/effects";
import {auth as actions} from "../actionsType/actionsType";


export function* workerLogin(action) {
    const { dataLoginUser } = action;
    const { email, password, users, history } = dataLoginUser;
    const user = users.find(u => (u.email === email && u.password === password));

    if (user) {
        yield localStorage.setItem('id', user.id);
        yield localStorage.setItem('uid', user.uid);
        yield localStorage.setItem('username', user.username);

        yield put({type: actions.LOGIN_USER, user});
        yield history.push('/channels');
    } else {
        yield put({type: actions.ERROR_LOGIN_USER});
    }
}

export function* workerCheckIsLogin(action) {
    const id = yield localStorage.getItem('id');
    const uid = yield localStorage.getItem('uid');
    const username = yield localStorage.getItem('username');

    const user = {
        uid,
        id,
        username
    };

    if (id && username) {
        yield put({type: actions.LOGIN_USER, user});
    } else {
        yield workerLogout(action);
    }
}

export function* workerLogout(action) {
    const { history } = action;

    yield localStorage.removeItem('id');
    yield localStorage.removeItem('uid');
    yield localStorage.removeItem('username');

    yield put({type: actions.LOGOUT_USER});
    yield history.push('/')
}

function* loginUserSaga() {
    yield takeEvery(actions.LOGIN_USER_SAGA, workerLogin);
}

function* checkIsLoginSaga() {
    yield takeEvery(actions.CHECK_IS_LOGIN_SAGA, workerCheckIsLogin);
}

function* logoutUserSaga() {
    yield takeEvery(actions.LOGOUT_USER_SAGA, workerLogout);
}

export function* watcherAuth() {
    yield all([
        fork(loginUserSaga),
        fork(checkIsLoginSaga),
        fork(logoutUserSaga)
    ]);
}