import { put, call, takeEvery, all, fork } from "redux-saga/effects";
import axiosInstance from 'axiosInstance';
import { channels as actions } from 'reduxUtility/actionsType/actionsType';
import { convertDataResponseFirebaseToList } from 'utility/utility';


const fetchChannels = () => {
    return axiosInstance.get('/channels.json');
};

export function* workerChannels() {
    try {
        const { data } = yield call(fetchChannels);
        const channelsList = yield convertDataResponseFirebaseToList(data);

        yield put({ type: actions.FETCH_CHANNELS, channelsList });
    } catch (error) {
        yield put({ type: actions.ERROR_FETCH_CHANNELS, error });
    }
}

const postCreateChannel = (channel) => {
    return axiosInstance.post('/channels.json', channel);
};

export function* workerCreateChannel(action) {
    const { channel } = action;

    try {
        yield call(postCreateChannel, channel);
        yield put({type: actions.CREATE_CHANNEL})

    } catch (error) {
        yield put({type: actions.ERROR_CREATE_CHANNEL, error})
    }
}

function* fetchChannelsSaga() {
    yield takeEvery(actions.FETCH_CHANNELS_SAGA, workerChannels);
}

function* createChannelsSaga() {
    yield takeEvery(actions.CREATE_CHANNEL_SAGA, workerCreateChannel);
}

export function* watcherChannels() {
   yield all([
       fork(fetchChannelsSaga),
       fork(createChannelsSaga)
   ]);
}