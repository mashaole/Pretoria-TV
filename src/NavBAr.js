import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from '@ovie/react-navbar'
const colors = {
    black: 'black',
    white: 'white',
    maincolor: "#ff6600"
}
const navTheme = {
    mainColor: colors.white,
    menuBgColor: colors.maincolor,
    backgroundColor: colors.maincolor
}

const navBrand = <a href="#">Pretoria <a style={{ color: "black" }}>TV</a></a>


const rightLinks = (
    <>
        <a href="#" style={{ color: colors.white }}>Home</a>
        <a href="#" style={{ color: colors.white }}>Channel</a>
        <a href="#" style={{ color: colors.white }}>About Us</a>
        <a href="#" style={{ color: colors.white }}>Bookings</a>
        <a href="#" style={{ color: colors.white }}>Join Us</a>
    </>
)

function NavBar() {
    return (
        <div className="app">
            <Navbar
                className="navbar" // style .navbar in your css
                menuClassName="navbar--menu" // style .navbar--menu in your css
                brand={navBrand}
                theme={navTheme}
                rightLinks={rightLinks}
                shouldAnimate={true}
            />
        </div>
    )
}

export default NavBar;