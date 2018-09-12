import React from 'react';
import classNames from 'classnames';

const ViewAlert = (props) => {
    const { type, message } = props;

    return (
        <div className={classNames('alert', `alert-${type}`)} role="alert">
            {message}
        </div>
    );
};

export default ViewAlert;