"use client";

import React from 'react';
import styles from "../organisms/MainContent.module.css";
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Image from 'next/image';
import { Chart, Money } from '@/constants';
import { FaArrowCircleUp } from 'react-icons/fa';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js';
import { faker } from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
    },
};

const labels = [ 'Oct', 'Nov', 'Dec', 'Jan', 'Feb' ];

const data = {
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

const CardBalance = () => {
    return (
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
                        <Image src={ Money } alt='balance' width={ 80 } height={ 80 } />
                        <p>Your total balance</p>
                    </div>
                    <hr />
                    <div className={ styles.yourEarnings }>
                        <Image src={ Chart } alt='balance' width={ 110 } height={ 30 } />
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
    );
};

export default CardBalance;