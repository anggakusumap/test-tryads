"use client";

import React from 'react';
import styles from './MainContent.module.css';
import { FaArrowCircleUp, FaRegSmile, FaSearch } from 'react-icons/fa';
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Image from 'next/image';
import { Avatar, Visa, messageList, shoppingListItem, transactionList } from '@/constants';
import { faker } from '@faker-js/faker';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { FaPaperclip, FaPlus } from 'react-icons/fa6';
import Checkbox from '../atoms/Checbox';
import ChatMessage from '../atoms/ChatMessage';
import Button from '../atoms/Button';
import TransactionList from '../atoms/TransactionList';
import { BsThreeDotsVertical } from 'react-icons/bs';
import SemiCircleDonutChart from '../atoms/SemiCircleDonutChart';
import SemiCircle from '../atoms/SemiCircleDonutChart';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
    },
};

const labels = [ 'Oct', 'Nov', 'Dec', 'Jan', 'Feb' ];

export const data = {
    labels,
    datasets: [
        {
            label: 'Balance',
            data: labels.map(() => faker.number.int({ min: 20, max: 60 })),
            backgroundColor: '#545DDC',
        },
        {
            label: 'Earnings',
            data: labels.map(() => faker.number.int({ min: 20, max: 60 })),
            backgroundColor: '#C8CBFD',
        },
    ],
};


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
                        <div className={ styles.cardBalanceFirstContent }>
                            <h1>$564</h1>
                            <div className={ styles.yourTotalBalance }>
                                <Image src={ Avatar } alt='balance' width={ 30 } height={ 30 } />
                                <p>Your total balance</p>
                            </div>
                            <hr />
                            <div className={ styles.yourEarnings }>
                                <Image src={ Avatar } alt='balance' width={ 30 } height={ 30 } />
                                <div>
                                    <FaArrowCircleUp />
                                    <p>6%</p>
                                </div>
                            </div>
                            <p>Always see your earnings update</p>
                        </div>
                        <div className={ styles.cardBalanceSecondContent }>
                            <Bar className={ styles.bar } options={ options } data={ data } />
                        </div>
                    </div>
                </div>
                <div className={ styles.cardVisa }>
                    <div className={ styles.cardVisaTitle }>
                        <h2>S.</h2>
                        <Image src={ Visa } alt='visa' width={ 50 } height={ 50 } />
                    </div>
                    <div className={ styles.cardVisaNumber }>
                        <h4><sup>****</sup>9838</h4>
                        <div>
                            <p>Jhon Demon</p>
                            <p>08/12</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={ styles.mainBuyChat }>
                <div className={ styles.cardBuyChat }>
                    <div className={ styles.cardBuy }>
                        <h3>List of items to buy</h3>
                        <div className={ styles.cardBuyTime }>
                            <div>
                                <h2>02:00</h2>
                                <p>Sat, August 12</p>
                            </div>
                            <div>
                                <MdKeyboardArrowRight size={ '2rem' } />
                            </div>
                            <div>
                                <h2>05:00</h2>
                                <p>Sat, September 12</p>
                            </div>
                        </div>
                        <div className={ styles.shoppingContainer }>
                            <div className={ styles.addShopping }>
                                <p>0/3 Shopping list</p>
                                <p> <FaPlus /> Add an item</p>
                            </div>
                            <div className={ styles.checkboxContainer }>
                                { shoppingListItem.map((shop) => (
                                    <Checkbox key={ shop.id } className={ styles.checkbox }>{ shop.title }</Checkbox>
                                )) }
                            </div>
                        </div>
                    </div>
                    <div className={ styles.cardChat }>
                        <h3>Esther Howard</h3>
                        <div className={ styles.chatContainer }>
                            { messageList.map((list) => (
                                <ChatMessage
                                    key={ list.id }
                                    img={ list.img }
                                    type={ list.type }
                                    message={ list.message }
                                    className={ list.type == 'sender' ? styles.messageSender : styles.messageReceiver } />
                            )) }
                        </div>
                        <div className={ styles.chatInput }>
                            <input type="text" name="chatInput" id="chatInput" placeholder='Type your message here' />
                            <div className={ styles.bottomInput }>
                                <div>
                                    <FaRegSmile />
                                    <FaPaperclip />
                                </div>
                                <Button className={ styles.buttonSend } >Send now</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={ styles.mainTransactionsAnalytics }>
                <div className={ styles.cardTransactions }>
                    <div className={ styles.cardTransactionsTitle }>
                        <h3>Last Transactions</h3>
                        <div>
                            <p>Newest</p>
                            <p>Lowest</p>
                        </div>
                    </div>
                    <hr />
                    { transactionList.map((list) => (
                        <TransactionList key={ list.id }
                            className={ styles.transactionList }
                            img={ list.img }
                            name={ list.name }
                            createdAt={ list.createdAt }
                            transaction={ list.transaction } />
                    )) }
                </div>
                <div className={ styles.cardAnalytics }>
                    <div className={ styles.cardAnalyticsTitle }>
                        <h3>Analytics</h3>
                        <BsThreeDotsVertical />
                    </div>
                    <div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MainContent;