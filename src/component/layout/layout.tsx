/* import React from 'react'; */
import { Link } from "react-router-dom";
import Header from '../header/header';
import Footer from '../footer/footer';
import "./layout.scss";
const Layout = (props: any) => {
    return (<>
        <Header />
        <main>
            {props.children}
        </main>
        <Footer />
    </>);
}

export default Layout;