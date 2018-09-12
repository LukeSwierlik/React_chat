import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import { settings as actions } from 'reduxUtility/actionsType/actionsType';
import axiosInstance from 'axiosInstance';

const putNewUsername = (user) => {
    const { uid } = user;
    delete user.uid;

    return axiosInstance.put(`/users/${uid}.json`, user);
};

function* changeUsername(action) {
    const { user } = action;

    try {
        yield call(putNewUsername, user);
        yield put({type: actions.CHANGE_USERNAME, isSuccess: true});
    } catch (error) {
        yield put({type: actions.ERROR_CHANGE_USERNAME, isError: true});
    }
}

function* changeUsernameSaga() {
    yield takeEvery(actions.CHANGE_USERNAME_SAGA, changeUsername);
}

export function* watcherSettings() {
    yield all([
        fork(changeUsernameSaga)
    ]);
}
