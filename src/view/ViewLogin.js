import React from 'react';
import PropTypes from 'prop-types';
import logoApp from 'assets/images/logoApp.svg';

const ViewLogin = (props) => {
    const { onChange, onSubmit } = props;

    return (
        <form className="form-signin" onSubmit={onSubmit}>
            <img className="mb-4" src={logoApp} alt="" width="72" height="72"/>

            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

            <label htmlFor="email" className="sr-only">Email address</label>
            <input
                type="email"
                id="email"
                name={"email"}
                className="form-control"
                placeholder="Email address"
                required
                autoFocus
                onChange={onChange}
            />

            <label htmlFor="password" className="sr-only">Password</label>
            <input
                type="password"
                id="password"
                name={'password'}
                className="form-control"
                placeholder="Password"
                required
                onChange={onChange}
            />

            <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>

            <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
        </form>
    );
};

ViewLogin.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
};

export default ViewLogin;