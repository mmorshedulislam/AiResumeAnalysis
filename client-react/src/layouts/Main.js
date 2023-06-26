import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const Main = () => {
    return (
        <>
        <Navbar/>
        <Outlet></Outlet>
        <Footer/>
        </>
    );
};

export default Main;