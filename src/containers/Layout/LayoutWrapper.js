import React from 'react';
import Header from 'containers/Layout/Header';
import Content from 'containers/Layout/Content';
import Footer from 'containers/Layout/Footer';

const LayoutWrapper = ({children}) => {
    return (
        <React.Fragment>
            <Header/>

            <Content children={children}/>

            <Footer/>
        </React.Fragment>
    );
};

export default LayoutWrapper;