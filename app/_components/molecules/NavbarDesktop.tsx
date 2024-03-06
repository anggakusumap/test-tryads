import React from 'react';
import styles from "../organisms/Navbar.module.css";
import { FaBell, FaClock, FaGear, FaMessage, FaUsers, FaWallet } from 'react-icons/fa6';
import { FaHome, FaSignOutAlt } from 'react-icons/fa';
import Image from 'next/image';
import { Avatar } from '@/constants';


const NavbarDesktop = () => {
    return (
        <>
            <div className={ styles.widthTemp }>
            </div>
            <nav className={ styles.navbarDesktop }>
                <div className={ styles.firstSection }>
                    <h1>S.</h1>
                    <div className={ styles.circleMessage }><FaMessage /></div>
                </div>

                <div className={ styles.secondSection }>
                    <FaHome />
                    <FaBell />
                    <FaClock />
                    <FaUsers />
                    <FaWallet />
                    <FaGear />
                </div>

                <div className={ styles.thirdSection }>
                    <Image className={ styles.avatar } src={ Avatar } alt='logo' width={ 40 } height={ 40 } />
                    <div className={ styles.circleSignOut }>
                        <FaSignOutAlt />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavbarDesktop;