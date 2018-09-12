import React, {Component} from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Route, Switch, withRouter } from "react-router-dom";
import './App.css';
import routes from "./routes/routes";
import { users as actionUsers } from 'reduxUtility/actionsType/actionsType';
import { channels as actionChannels } from 'reduxUtility/actionsType/actionsType';
import { auth as actionAuth } from 'reduxUtility/actionsType/actionsType';
import LayoutWrapper from "./containers/Layout/LayoutWrapper";

class App extends Component {
     componentDidMount() {
        const { actions: { fetchUsers, fetchChannels, checkIsLogin }, history } = this.props;

        fetchChannels();
        fetchUsers();
        checkIsLogin(history);
    }

    render() {
        return (
            <LayoutWrapper>
                <Switch>
                    {routes.map(route => (
                        <Route key={route.id} component={route.component} path={route.path} exact={route.exact} />
                    ))}
                </Switch>
            </LayoutWrapper>
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
        fetchUsers: () => dispatch({type: actionUsers.FETCH_USERS_SAGA}),
        fetchChannels: () => dispatch({type: actionChannels.FETCH_CHANNELS_SAGA}),
        checkIsLogin: (history) => dispatch({type: actionAuth.CHECK_IS_LOGIN_SAGA, history})
    };

    return { actions };
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(App);
