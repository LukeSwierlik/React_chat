import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ViewMessages = (props) => {
    const { messages, currentUser, users } = props;

    return (
        <React.Fragment>
            {messages.map((message, index) => {
                const messageUser = users.find(user => user.id === parseInt(message.userId, 10));

                return (
                    <div className={classNames('alert', {
                        'alert-primary': message.userId === currentUser.id,
                        'alert-secondary':  message.userId !== currentUser.id
                    })}
                         role="alert"
                         key={index}
                    >
                        <div className={'text'}>
                            <div><b>{messageUser.username}</b> - <span className={'date_message'}>{message.messageDate}</span></div>
                            {message.message}
                        </div>
                    </div>
                )
            })}
        </React.Fragment>
    );
};

ViewMessages.propTypes = {
    messages: PropTypes.array.isRequired,
    currentUser: PropTypes.object.isRequired,
    users: PropTypes.array.isRequired
};

ViewMessages.defaultProps = {
    messages: [],
    currentUser: {},
    users: []
};

export default ViewMessages;