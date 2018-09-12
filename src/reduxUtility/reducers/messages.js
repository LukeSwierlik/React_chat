import { messages as actions} from 'reduxUtility/actionsType/actionsType';
import { updateObject } from 'utility/utility';

const INITIAL_STATE = {
    messagesList: [],
    loading: true
};

const fetchMessages = (state, action) => {
    const { messagesList } = action;

    return updateObject(state, {
        messagesList,
        loading: false
    });
};

const messagesReducer = (state = INITIAL_STATE, action = {}) => {
    const payload = {
        [actions.FETCH_MESSAGES]: fetchMessages
    };

    return (payload[action.type] || (() => state))(state, action);
};

export default messagesReducer;