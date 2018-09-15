import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ViewAlert = (props) => {
    const { type, message } = props;

    return (
        <div className={classNames('alert', `alert-${type}`)} role="alert">
            {message}
        </div>
    );
};

ViewAlert.propTypes = {
    type: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
};

ViewAlert.defaultProps = {
    type: 'success',
    message: ''
};

export default ViewAlert;