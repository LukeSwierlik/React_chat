import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ViewChannelsList = (props) => {
    const { channelsList } = props;

    return (
        <ul className="list-group">
            {channelsList.map((channel) => (
                <li className="list-group-item" key={channel.id}>
                    <span>{channel.name}</span>

                    <Link
                        to={`/channel/${channel.name}`}
                        className="btn btn-success"
                    >Join</Link>
                </li>
            ))}
        </ul>
    );
};

ViewChannelsList.propTypes = {
    channelsList: PropTypes.array.isRequired
};

ViewChannelsList.defaultProps = {
    channelsList: []
};

export default ViewChannelsList;