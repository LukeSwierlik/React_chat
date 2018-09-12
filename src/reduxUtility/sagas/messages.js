import { takeEvery, call, put, all, fork, take } from 'redux-saga/effects';
import axiosInstance from 'axiosInstance';
import {messages as actions} from 'reduxUtility/actionsType/actionsType';
import firebase from '../../firebase';
import {convertDataResponseFirebaseToList} from "../../utility/utility";

const fetchMessages = (channelId) => {
    return axiosInstance.get(`/messages/channel_${channelId}.json`);
};

function* workerFetchMessages(action) {
    const {channelId} = action;

    try {
        const response = yield call(fetchMessages, channelId);

        const {data} = yield response;

        if (data) {
            const messagesList = convertDataResponseFirebaseToList(data);

            yield put({type: actions.FETCH_MESSAGES, messagesList});
        } else {
            yield put({type: actions.FETCH_MESSAGES, messagesList: []});
        }
    } catch (error) {
        yield put({type: actions.ERROR_FETCH_MESSAGES, error});
    }
}

const sendMessage = (data_message) => {
    const {channelId, userId, message, messageDate} = data_message;

    return axiosInstance.post(`/messages/channel_${channelId}.json`, {userId, message, messageDate});
};

function* workerSendMessages(action) {
    const {data_message} = action;
    const {channelId} = data_message;

    try {
        yield call(sendMessage, data_message);

        const messagesRef = firebase.database()
            .ref('messages')
            .child(`channel_${channelId}`);

        const messagesList = yield call(() => {
            return new Promise((resolve, reject) => {
                messagesRef
                    .orderByKey()
                    .limitToLast(20)
                    .on('value', (snapshot) => {
                        setTimeout(() => {
                            const messages = snapshot.val() || [];

                            resolve(convertDataResponseFirebaseToList(messages));
                        }, 0);
                    });
            })
        });

        yield put({type: actions.FETCH_MESSAGES, messagesList});
        yield put({type: actions.SEND_MESSAGES});
    } catch (error) {
        yield put({type: actions.ERROR_SEND_MESSAGES, error});
    }
}

function* fetchMessagesSaga() {
    const action = yield take(actions.FETCH_MESSAGES_SAGA);

    while(true) {
        yield call(workerFetchMessages, action);
    }
}

function* sendMessagesSaga() {
    yield takeEvery(actions.SEND_MESSAGES_SAGA, workerSendMessages);
}

export function* watcherMessages() {
    yield all([
        fork(fetchMessagesSaga),
        fork(sendMessagesSaga)
    ]);
}