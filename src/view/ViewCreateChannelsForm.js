import React from 'react';
import PropTypes from 'prop-types';

const ViewCreateChannelsForm = (props) => {
    const { onChange, onSubmit, value } = props;

    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Name channel</label>
                <input
                    type="text"
                    className="form-control"
                    id="name_channel"
                    aria-describedby="name_channel"
                    placeholder="Enter name channel"
                    onChange={onChange}
                    value={value}
                />
            </div>

            <button type="submit" className="btn btn-primary">Create</button>
        </form>
    );
};

ViewCreateChannelsForm.propTypes = {
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

ViewCreateChannelsForm.defaultProps = {
    value: ''
};

export default ViewCreateChannelsForm;