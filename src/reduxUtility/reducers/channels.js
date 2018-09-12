import {channels as actions} from 'reduxUtility/actionsType/actionsType';
import { updateObject } from 'utility/utility';

const INITIAL_STATE = {
    channelsList: [],
    loading: true,
};

const setChannels = (state, action) => {
    const { channelsList } = action;

    return updateObject(state, {
        channelsList,
        loading: false
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
        [actions.ERROR_CREATE_CHANNEL]: setError,
        [actions.ERROR_FETCH_CHANNELS]: setError
    };

    return (payload[action.type] || (() => state))(state, action);
};

export default channelsReducer;