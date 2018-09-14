import React, {Component} from 'react';
import { connect } from 'react-redux';
import ViewChannelsList from 'view/ViewChannelsList';
import {Link} from "react-router-dom";
import ViewAlert from "../../view/ViewAlert";

class ChannelList extends Component {
    shouldComponentUpdate(prevProps, prevState) {
        return (prevProps.channelsList.length !== this.props.channelsList.length);
    }

    render() {
        const { channelsList, isLogged } = this.props;

        return (
            <div className={'container'}>
                <h1>List channels</h1>

                {isLogged ? (
                    <Link
                        type="button"
                        className="btn btn-primary"
                        to={'/create-channels'}
                    >Create a new channel</Link>
                ) : (
                    <ViewAlert type={'danger'} message={'You must be logged in to add a channel.'}/>
                )}

                <hr />

                {!!channelsList.length ?
                    (<ViewChannelsList channelsList={channelsList} />) :
                    (<h5>Zero channels</h5>)
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        channelsList: state.channels.channelsList,
        isLogged: state.auth.isLogged
    }
};


export default connect(mapStateToProps)(ChannelList);