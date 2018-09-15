import React from 'react';
import PropTypes from 'prop-types';

const Content = ({ children }) => {
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    );
};

Content.propTypes = {
    children: PropTypes.element.isRequired
};

export default Content;