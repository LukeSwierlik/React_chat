import React, {Component} from 'react';
import { connect } from 'react-redux';
import ViewRegister from "../../view/ViewRegister";
import { register as action } from 'reduxUtility/actionsType/actionsType';
import { currentTime } from 'utility/utility';
import ViewAlert from 'view/ViewAlert';

class Register extends Component {
    state = {
        data_account: {
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: ''
        }
    };

    handlerChange = ({ target }) => {
        const { name, value } = target;
        const { data_account } = this.state;

        this.setState({
            data_account: {
                ...data_account,
                [name]: value
            }
        });
    };

    sendRegister = (event) => {
        event.preventDefault();

        const { data_account: { firstName, lastName, email, username, password } } = this.state;
        const { actions : { registerUser } } = this.props;
        const id = new Date().valueOf();
        const date_create_account = currentTime();

        const data_account = {
            id,
            firstName,
            lastName,
            email,
            username,
            password,
            date_create_account
        };

        registerUser(data_account);

        this.setState({
            data_account: {
                firstName: '',
                lastName: '',
                email: '',
                username: '',
                password: ''
            }
        })
    };

    render() {
        const { successRegister, errorRegister } = this.props;
        const { data_account } = this.state;

        return (
            <React.Fragment>
                <ViewRegister
                    onChange={this.handlerChange}
                    onSubmit={this.sendRegister}
                    data_account={data_account}
                />

                <div className="container">
                    {successRegister && <ViewAlert type={'success'} message={'Success Register! You login now!'} />}
                    {errorRegister && <ViewAlert type={'danger'} message={'Error Register'}/>}
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        successRegister: state.register.isSuccess,
        errorRegister: state.register.isError
    }
};

const mapDispatchToProps = (dispatch) => {
    const actions = {
        registerUser: (user) => dispatch({type: action.REGISTER_USER_SAGA, user})
    };

    return { actions };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);