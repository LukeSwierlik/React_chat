import React, {Component} from 'react';
import { connect } from 'react-redux';
import ViewCreateChannelsForm from 'view/ViewCreateChannelsForm';
import {channels as action} from 'reduxUtility/actionsType/actionsType';
import ViewAlert from 'view/ViewAlert';

class CreateChannelsContainer extends Component {
    state = {
        name: ''
    };

    handlerChange = ({ target }) => {
        const name = target.value;

        this.setState({
            name
        });
    };

    handlerCreateNewChannel = (event) => {
        event.preventDefault();

        const { actions: { createChannel } } = this.props;
        const { name } = this.state;
        const id = new Date().valueOf();

        const channel = {
            id,
            name
        };

        this.setState({
            name: ''
        });

        createChannel(channel);
    };

    render() {
        const { name } = this.state;
        const { isCreateChannelSuccess, isCreateChannelError } = this.props;

        return (
            <div className={'container'}>
                <h1>Create Channel</h1>

                {isCreateChannelSuccess && <ViewAlert type={"success"} message={"You create a new channel!"}/>}
                {isCreateChannelError && <ViewAlert type={"danger"} message={"Error - create Channel"}/>}

                <ViewCreateChannelsForm
                    onChange={this.handlerChange}
                    onSubmit={this.handlerCreateNewChannel}
                    value={name}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isCreateChannelSuccess: state.channels.isCreateChannelSuccess,
        isCreateChannelError: state.channels.isCreateChannelError
    }
};

const mapDispatchToProps = (dispatch) => {
    const actions = {
        createChannel: (channel) => dispatch({type: action.CREATE_CHANNEL_SAGA, channel })
    };

    return { actions };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateChannelsContainer);