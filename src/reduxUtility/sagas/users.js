import { put, call, takeEvery, all, fork } from "redux-saga/effects";
import axiosInstance from 'axiosInstance';
import { users as actions } from 'reduxUtility/actionsType/actionsType';
import { convertDataResponseFirebaseToList } from 'utility/utility';


const fetchUsers = () => {
    return axiosInstance.get('/users.json');
};

export function* workerUsers() {
    try {
        const { data } = yield call(fetchUsers);
        const usersList = yield convertDataResponseFirebaseToList(data);

        yield put({ type: actions.FETCH_USERS, usersList });
    } catch (error) {
        yield put({ type: actions.ERROR_FETCH_USERS, error });
    }
}

function* fetchUsersSaga() {
    yield takeEvery(actions.FETCH_USERS_SAGA, workerUsers);
}

export function* watcherUsers() {
    yield all([
        fork(fetchUsersSaga)
    ]);
}