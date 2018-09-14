import {channels as actions} from 'reduxUtility/actionsType/actionsType';
import { updateObject } from 'utility/utility';

const INITIAL_STATE = {
    channelsList: [],
    loading: true,
    isCreateChannelSuccess: false,
    isCreateChannelError: false,
};

const setChannels = (state, action) => {
    const { channelsList } = action;

    return updateObject(state, {
        channelsList,
        loading: false
    });
};

const successCreateChannel = (state, action) => {
    const { isCreateChannelSuccess } = action;

    return updateObject(state, {
        isCreateChannelSuccess
    });
};

const errorCreateChannel = (state, action) => {
    const { isCreateChannelError } = action;

    return updateObject(state, {
        isCreateChannelError
    });
};

const setError = (state, action) => {
    const { error } = action;

    return updateObject(state, {
        error
    });
};

const channelsReducer = (state = INITIAL_STATE, action = {}) => {
    const payload = {
        [actions.FETCH_CHANNELS]: setChannels,
        [actions.ERROR_FETCH_CHANNELS]: setError,
        [actions.SUCCESS_CREATE_CHANNEL]: successCreateChannel,
        [actions.ERROR_CREATE_CHANNEL]: errorCreateChannel
    };

    return (payload[action.type] || (() => state))(state, action);
};

export default channelsReducer;