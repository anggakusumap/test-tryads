import React from 'react';
import NavbarDesktop from '../molecules/NavbarDesktop';
import NavbarMobile from '../molecules/NavbarMobile';

const Navbar = () => {
    return (
        <header>
            <NavbarDesktop />
            <NavbarMobile />
        </header>
    );
};

export default Navbar;