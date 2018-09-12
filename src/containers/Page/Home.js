import React, {Component} from 'react';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                    <h1 className="display-4">Pricing</h1>
                    <p className="lead">Quickly build an effective pricing table for your potential customers with this
                        Bootstrap example. It's built with default Bootstrap components and utilities with little
                        customization.</p>
                </div>

                <div className="container">
                    <div className="card-deck mb-3 text-center">
                        <div className="card mb-4 shadow-sm">
                            <div className="card-header">
                                <h4 className="my-0 font-weight-normal">Free</h4>
                            </div>

                            <div className="card-body">
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>10 users included</li>
                                    <li>2 GB of storage</li>
                                    <li>Email support</li>
                                    <li>Help center access</li>
                                </ul>

                                <button type="button" className="btn btn-lg btn-block btn-outline-primary">Register for
                                    free
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;