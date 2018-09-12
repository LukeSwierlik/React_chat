import {register as actions} from 'reduxUtility/actionsType/actionsType';
import { updateObject } from 'utility/utility';

const INITIAL_STATE = {
    isSuccess: false,
    isError: false
};

const successRegisterUser = (state, action) => {
    const { isSuccess } = action;

    return updateObject(state, {
        isSuccess
    });
};

const errorRegisterUser = (state, action) => {
    const { isError } = action;

    return updateObject(state, {
        isError
    });
};

const registerReducer = (state = INITIAL_STATE, action = {}) => {
    const payload = {
        [actions.SUCCESS_REGISTER_USER]: successRegisterUser,
        [actions.ERROR_REGISTER_USER]: errorRegisterUser
    };

    return (payload[action.type] || (() => state))(state, action);
};

export default registerReducer;