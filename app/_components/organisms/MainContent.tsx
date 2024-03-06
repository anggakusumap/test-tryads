import React from 'react';
import styles from './MainContent.module.css';
import { FaArrowCircleUp, FaSearch } from 'react-icons/fa';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Image from 'next/image';
import { Avatar } from '@/constants';

const MainContent = () => {
    return (
        <main className={ styles.mainContent }>
            <section className={ styles.mainTop }>
                <div className={ styles.mainPeople }>
                    <h1>Hello, Jhon D</h1>
                    <p>View and control your finance here!</p>
                </div>
                <div className={ styles.mainSearch }>
                    <FaSearch />
                </div>
            </section>

            <section className={ styles.mainBalanceVisa }>
                <div className={ styles.cardBalance }>
                    <div className={ styles.cardBalanceTitle }>
                        <p>Balance statistics</p>
                        <div className={ styles.filter }>
                            <p>Filter</p>
                            <MdOutlineKeyboardArrowDown />
                        </div>
                    </div>
                    <div className={ styles.cardBalanceContent }>
                        <div>
                            <h1>$564</h1>
                            <div className={ styles.yourTotalBalance }>
                                <Image src={ Avatar } alt='balance' width={ 50 } height={ 50 } />
                                <p>Your total balance</p>
                            </div>
                            <hr />
                            <div>
                                <Image src={ Avatar } alt='balance' width={ 50 } height={ 50 } />
                                <FaArrowCircleUp />
                                <p>6%</p>
                            </div>
                            <p>Always see your earnings update</p>
                        </div>
                    </div>
                </div>
                <div className={ styles.cardVisa }></div>
            </section>

            <section className={ styles.mainBuyChat }>
                <div className={ styles.cardBuyChat }>
                    <div className={ styles.cardBuy }></div>
                    <div className={ styles.cardChat }></div>
                </div>
            </section>

            <section className={ styles.mainTransactionsAnalytics }>
                <div className={ styles.cardTransactions }></div>
                <div className={ styles.cardAnalytics }></div>
            </section>
        </main>
    );
};

export default MainContent;