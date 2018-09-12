import React, {Component} from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ViewHeader from "../../view/ViewHeader";
import { auth as action } from 'reduxUtility/actionsType/actionsType';

class Header extends Component {
    onLogout = () => {
        const { actions: { logout }, history } = this.props;

        logout(history);
    };

    render() {
        const { user } = this.props;

        return (
            <ViewHeader user={user} onLogout={this.onLogout}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth
    }
};

const mapDispatchToProps = (dispatch) => {
    const actions = {
        logout: (history) => dispatch({type: action.LOGOUT_USER_SAGA, history})
    };

    return { actions };
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Header);