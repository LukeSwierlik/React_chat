import React from 'react';
import PropTypes from 'prop-types';

const ViewSettings = (props) => {
    const { user, onChange, onSubmit, newUsername } = props;
    const { id, firstName, lastName, username, date_create_account } = user;

    return (
        <React.Fragment>
            <div className={"row"}>
                <div className={'col sm-12'}>
                    <hr/>

                    <h3>Profile info: {username}</h3>

                    <ul className="list-group">
                        <li className="list-group-item">ID: {id}</li>
                        <li className="list-group-item">Fisrt name: {firstName}</li>
                        <li className="list-group-item">Last name: {lastName}</li>
                        <li className="list-group-item">Date create account: {date_create_account}</li>
                    </ul>
                </div>
            </div>

            <div className={'row'}>
                <div className={'col sm-12'}>
                    <hr/>

                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor="changeUsername">Change username</label>
                            <input type="text"
                                   className="form-control"
                                   id="changeUsername"
                                   aria-describedby="changeUsername"
                                   placeholder="Enter new username"
                                   onChange={onChange}
                                   name={"newUsername"}
                                   value={newUsername}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">Change username</button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
};

ViewSettings.propTypes = {
    user: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    newUsername: PropTypes.string.isRequired
};

ViewSettings.defaultProps = {
    user: {
        id: 0,
        firstName: '',
        lastName: '',
        username: '',
        date_create_account: ''
    },
    newUsername: ''
};

export default ViewSettings;