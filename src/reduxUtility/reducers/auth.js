import {auth as actions} from 'reduxUtility/actionsType/actionsType';
import { updateObject } from 'utility/utility';

const INITIAL_STATE = {
    uid: '',
    id: 0,
    username: '',
    isLogged: false,
    channelId: []
};

const loginUser = (state, action) => {
    const { user } = action;
    const { uid, id, username } = user;

    return updateObject(state, {
        uid,
        id,
        username,
        isLogged: true
    });
};

const logoutUser = (state, action) => {
    return updateObject(state, {
        isLogged: false
    });
};

const joinUserChannel = (state, action) => {
    const { channelId } = action;

    const joinedChannelId = state.joinedChannelId.push(channelId);

    return updateObject(state, {
        joinedChannelId
    });
};

const authReducer = (state = INITIAL_STATE, action = {}) => {
    const payload = {
        [actions.LOGIN_USER]: loginUser,
        [actions.LOGOUT_USER]: logoutUser,
        [actions.JOIN_USER_CHANNEL]: joinUserChannel
    };

    return (payload[action.type] || (() => state))(state, action);
};

export default authReducer;