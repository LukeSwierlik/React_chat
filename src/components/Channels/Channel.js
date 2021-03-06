import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MessagesContainer from "../Messages";

class Channel extends React.Component {
    static propTypes = {
        channelsList: PropTypes.array.isRequired,
        loading: PropTypes.bool.isRequired,
    };

    static defaultProps = {
        channelsList: [],
        loading: false
    };

    constructor(props) {
        super(props);

        const name = props.match.params.name;

        this.state = {
            name,
        }
    }

    render() {
        const { name } = this.state;
        const { channelsList } = this.props;

        return (
            <div className={'container'}>
                <h1>Channel name: {name}</h1>

                {!!channelsList.length && <MessagesContainer channel={channelsList.find(channel => channel.name === name)}/>}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        channelsList: state.channels.channelsList,
        loading: state.channels.loading
    }
};

export default connect(mapStateToProps)(Channel);