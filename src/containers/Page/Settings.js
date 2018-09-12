import React, {Component} from 'react';
import { connect } from 'react-redux';
import ViewSettings from 'view/ViewSettings';
import { settings as action } from 'reduxUtility/actionsType/actionsType';

class Settings extends Component {
    state = {
        user: {},
        newUsername: '',
        error: false,
        errorMessage: ''
    };

    componentDidMount() {
        const { users, userId } = this.props;
        const user = users.find(user => user.id === parseInt(userId, 10));

        this.setState({
            user
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.users.length !== this.props.users.length) {
            const { users, userId } = this.props;
            const user = users.find(user => user.id === parseInt(userId, 10));

            this.setState({
                user
            });
        }
    }

    changeUsername = ({ target }) => {
        const { value, name } = target;

        this.setState({
            [name]: value
        });
    };

    onSubmitChangeUsername = (event) => {
        event.preventDefault();

        const { users, actions: { changeUsername }, userId } = this.props;
        const { newUsername } = this.state;

        const error = users.some(user => user.username === newUsername);

        if(error) {
            const errorMessage = 'This new username is exists.';

            this.setState({
                errorMessage,
                error: !error
            });
        }
        else {
            const user = users.find(u => u.id === parseInt(userId, 10));

            const updateUser = {
                ...user,
                username: newUsername
            };

            changeUsername(updateUser);
        }
    };

    render() {
        const { user, newUsername } = this.state;

        return (
            <div className={"container"}>
                <h1>Settings</h1>

                {user && <ViewSettings
                    user={user}
                    onSubmit={this.onSubmitChangeUsername}
                    onChange={this.changeUsername}
                    newUsername={newUsername}
                /> }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users.usersList,
        userId: state.auth.id,
        userUId: state.auth.uid
    };
};

const mapDispatchToProps = (dispatch) => {
    const actions = {
        changeUsername: (user) => dispatch({type: action.CHANGE_USERNAME_SAGA , user})
    };

    return { actions };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);