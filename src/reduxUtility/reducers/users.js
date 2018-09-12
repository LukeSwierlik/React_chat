import {users as actions} from 'reduxUtility/actionsType/actionsType';
import { updateObject } from 'utility/utility';

const INITIAL_STATE = {
    usersList: []
};

const fetchUsers = (state, action) => {
    const { usersList } = action;

    return updateObject(state, {
        usersList
    });
};

const usersReducer = (state = INITIAL_STATE, action = {}) => {
    const payload = {
        [actions.FETCH_USERS]: fetchUsers,
    };

    return (payload[action.type] || (() => state))(state, action);
};

export default usersReducer;