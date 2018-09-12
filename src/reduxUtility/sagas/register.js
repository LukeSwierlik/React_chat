import { takeEvery, call, put, all, fork } from 'redux-saga/effects';
import { register as actions } from 'reduxUtility/actionsType/actionsType';
import axiosInstance from 'axiosInstance';

const sendRegister = (user) => {
    return axiosInstance.post('/users.json', user);
};

function* workerRegister(action) {
    const { user } = action;

    try {
        yield call(sendRegister, user);
        yield put({type: actions.SUCCESS_REGISTER_USER, isSuccess: true});
    } catch (error) {
        yield put({type: actions.ERROR_REGISTER_USER, isError: true});
    }
}

function* registerUserSaga() {
    yield takeEvery(actions.REGISTER_USER_SAGA, workerRegister);
}

export function* watcherRegister() {
    yield all([
        fork(registerUserSaga)
    ]);
}