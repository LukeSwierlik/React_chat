import React from 'react';
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
                            <div><b>{messageUser.username || 'Ghost'}</b></div>
                            {message.message}
                        </div>
                    </div>
                )
            })}
        </React.Fragment>
    );
};

export default ViewMessages;