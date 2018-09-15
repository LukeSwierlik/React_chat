import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import ViewLogin from "../../view/ViewLogin";
import { auth as actionAuth } from 'reduxUtility/actionsType/actionsType';

class Login extends React.Component {
    static propTypes = {
        users: PropTypes.array.isRequired,
        actions: PropTypes.object.isRequired
    };

    static defaultProps = {
        users: []
    };

    state = {
        email: '',
        password: ''
    };

    handlerChange = ({ target }) => {
        const { name, value } = target;

        this.setState({
            [name]: value
        });
    };

    sendLogin = (event) => {
        event.preventDefault();

        const { email, password } = this.state;
        const { actions: {loginUser}, users } = this.props;
        const { history } = this.props;
        const action = {
            email,
            password,
            users,
            history
        };

        loginUser(action);
    };

    render() {
        return (
            <div className={'login-container'}>
                <ViewLogin onChange={this.handlerChange} onSubmit={this.sendLogin} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users.usersList
    }
};

const mapDispatchToProps = (dispatch) => {
    const actions = {
        loginUser: (dataLoginUser) => dispatch({type: actionAuth.LOGIN_USER_SAGA, dataLoginUser})
    };

    return { actions };
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Login);