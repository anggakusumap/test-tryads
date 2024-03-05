import React from 'react';
import styles from "./Navbar.module.css";
import { FaGear, FaMessage } from 'react-icons/fa6';
import { FaBell, FaClock, FaHome, FaSignOutAlt, FaUsers, FaWallet } from 'react-icons/fa';
import Image from 'next/image';
import Avatar from "@/public/img/man.png";

const Navbar = () => {
    return (
        <>
            <div className={ styles.navbarDesktop }>
                <div className={ styles.firstSection }>
                    <h1>S.</h1>
                    <div className={ styles.circleMessage }><FaMessage /></div>
                </div>

                <div className={ styles.secondSection }>
                    <FaHome className={ styles.isActive } />
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
            </div>
            <div className={ styles.navbarMobile }>
                <h1>S.</h1>

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
            </div>
        </>
    );
};

export default Navbar;