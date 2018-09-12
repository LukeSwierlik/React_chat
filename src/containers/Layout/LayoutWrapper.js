import React from 'react';
import HeaderContainer from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const LayoutWrapper = ({children}) => {
    return (
        <React.Fragment>
            <HeaderContainer/>
            <Content children={children}/>
            <Footer/>
        </React.Fragment>

    );
};

export default LayoutWrapper;