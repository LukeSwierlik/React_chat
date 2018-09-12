import React from 'react';
import {Link} from 'react-router-dom';
import logoApp from 'assets/images/logoApp.svg';

const ViewHeader = (props) => {
    const { user, onLogout } = props;

    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <h5 className="my-0 mr-md-auto font-weight-normal">
                <Link className="navbar-brand" to={'/'}>
                    <img src={logoApp} width="30" height="30" alt=""/>
                </Link>
            </h5>

            {!user.isLogged ? (
                <React.Fragment>
                    <nav className="my-2 my-md-0 mr-md-3">
                        <Link className="p-2 text-dark" to={'/channels'}>Channels</Link>
                        <Link className="btn btn-outline-primary" to={'/login'}>Login</Link>
                    </nav>

                    <Link className="btn btn-primary" to={'/register'}>Register</Link>
                </React.Fragment>
            ) : (
                <nav className="my-2 my-md-0 mr-md-3">
                    Welcome: {user.username}
                    <Link className="p-2 text-dark" to={'/channels'}>Channels</Link>
                    <Link className="p-2 text-dark" to={'/settings'}>Settings</Link>
                    <button className="btn btn-outline-danger" onClick={onLogout} >Logout</button>
                </nav>
            )}
        </div>
    );
};

export default ViewHeader;