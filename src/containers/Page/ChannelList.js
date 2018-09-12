import React, {Component} from 'react';
import { connect } from 'react-redux';
import ViewChannelsList from 'view/ViewChannelsList';
import {Link} from "react-router-dom";

class ChannelList extends Component {
    shouldComponentUpdate(prevProps, prevState) {
        return (prevProps.channelsList.length !== this.props.channelsList.length);
    }

    render() {
        const { channelsList } = this.props;

        return (
            <div className={'container'}>
                <h1>List channels</h1>

                {!!channelsList.length ?
                    (<ViewChannelsList channelsList={channelsList} />) :
                    (<h5>Zero channels</h5>)
                }

                <hr />

                <Link
                    type="button"
                    className="btn btn-primary"
                    to={'/create-channels'}
                >Create a new channel</Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        channelsList: state.channels.channelsList
    }
};


export default connect(mapStateToProps)(ChannelList);