import React from 'react';
import styles from "../organisms/Navbar.module.css";
import { FaBell, FaClock, FaGear, FaUsers, FaWallet } from 'react-icons/fa6';
import { FaHome } from 'react-icons/fa';
import Image from 'next/image';
import { Avatar } from '@/constants';

const NavbarMobile = () => {
    return (
        <nav className={ styles.navbarMobile }>
            <h1>A.</h1>

            <div className={ styles.secondSectionMobile }>
                <FaHome className={ styles.isActive } />
                <FaBell />
                <FaClock />
                <FaUsers />
                <FaWallet />
                <FaGear />
            </div>

            <div>
                <Image className={ styles.avatar } src={ Avatar } alt='logo' width={ 40 } height={ 40 } />
            </div>
        </nav>
    );
};

export default NavbarMobile;