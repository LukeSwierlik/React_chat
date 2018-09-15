import React from 'react';
import PropTypes from 'prop-types';
import logoApp from 'assets/images/logoApp.svg';

const ViewRegister = (props) => {
    const { onChange, onSubmit, data_account } = props;
    const { firstName, lastName, email, username, password } = data_account;

    return (
        <div className="container">
            <div className="py-5 text-center">
                <img className="d-block mx-auto mb-4" src={logoApp} alt="" width="72"
                     height="72"/>
                <h2>Register form</h2>

                <p className="lead">
                    Below is an example form built entirely with Bootstrap's form controls. Each
                    required form group has a validation state that can be triggered by attempting to submit the
                    form without completing it.
                </p>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <h4 className="mb-3">From account</h4>

                    <form className="needs-validation" onSubmit={onSubmit}>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="firstName">First name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    placeholder="First name"
                                    required
                                    name={'firstName'}
                                    onChange={onChange}
                                    value={firstName}
                                />

                                <div className="invalid-feedback">
                                    Valid first name is required.
                                </div>
                            </div>

                            <div className="col-md-6 mb-3">
                                <label htmlFor="lastName">Last name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    placeholder="Last name"
                                    required
                                    name={'lastName'}
                                    onChange={onChange}
                                    value={lastName}
                                />

                                <div className="invalid-feedback">
                                    Valid last name is required.
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="ssername">Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    placeholder="Username"
                                    required
                                    name={'username'}
                                    onChange={onChange}
                                    value={username}
                                />

                                <div className="invalid-feedback">
                                    Valid first name is required.
                                </div>
                            </div>

                            <div className="col-md-6 mb-3">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Password"
                                    required
                                    name={'password'}
                                    onChange={onChange}
                                    value={password}
                                />

                                <div className="invalid-feedback">
                                    Valid last name is required.
                                </div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="you@example.com"
                                name={'email'}
                                onChange={onChange}
                                value={email}
                            />

                            <div className="invalid-feedback">
                                Please enter a valid email address for shipping updates.
                            </div>
                        </div>

                        <hr className="mb-4"/>

                        <button className="btn btn-primary btn-lg btn-block" type="submit">
                            Join us!
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

ViewRegister.propTypes = {
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    data_account: PropTypes.object.isRequired
};

ViewRegister.defaultProps = {
    data_account: {
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: ''
    }
};

export default ViewRegister;