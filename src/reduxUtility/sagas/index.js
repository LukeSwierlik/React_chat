import { all, fork } from "redux-saga/effects";
import { watcherAuth } from 'reduxUtility/sagas/auth';
import { watcherUsers } from 'reduxUtility/sagas/users';
import { watcherChannels } from 'reduxUtility/sagas/channels';
import { watcherMessages } from 'reduxUtility/sagas/messages';
import { watcherRegister } from 'reduxUtility/sagas/register';
import { watcherSettings } from 'reduxUtility/sagas/settings';

export function* rootSaga() {
    yield all([
        fork(watcherAuth),
        fork(watcherUsers),
        fork(watcherChannels),
        fork(watcherMessages),
        fork(watcherRegister),
        fork(watcherSettings),
    ]);
}