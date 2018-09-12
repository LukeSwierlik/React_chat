import React, {Component} from 'react';
import { connect } from 'react-redux';
import ViewCreateChannelsForm from 'view/ViewCreateChannelsForm';
import {channels as action} from 'reduxUtility/actionsType/actionsType';

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

        return (
            <div className={'container'}>
                <h1>Create Channel</h1>

                <ViewCreateChannelsForm
                    onChange={this.handlerChange}
                    onSubmit={this.handlerCreateNewChannel}
                    value={name}
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    const actions = {
        createChannel: (channel) => dispatch({type: action.CREATE_CHANNEL_SAGA, channel })
    };

    return { actions };
};

export default connect(null, mapDispatchToProps)(CreateChannelsContainer);