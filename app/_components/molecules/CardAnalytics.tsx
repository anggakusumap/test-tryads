"use client";

import React from 'react';
import styles from "../organisms/MainContent.module.css";
import { Doughnut } from 'react-chartjs-2';
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
import { BsThreeDotsVertical } from 'react-icons/bs';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

const dataCircle = {
    labels: [ 'Done', 'In progres', 'Todo', 'Task' ],
    datasets: [
        {
            data: [ 30, 30, 20, 10 ],
            backgroundColor: [
                '#292522',
                '#A39080',
                '#EFD9B4',
                '#F1F2F3'
            ],
            borderColor: [
                '#292522',
                '#A39080',
                '#EFD9B4',
                '#F1F2F3'
            ],
            borderWidth: 1,
        },
    ],
};

const CardAnalytics = () => {
    return (
        <div className={ styles.cardAnalytics }>
            <div className={ styles.cardAnalyticsTitle }>
                <h3>Analytics</h3>
                <BsThreeDotsVertical />
            </div>
            <div className={ styles.doughnut }>
                <Doughnut data={ dataCircle } />
            </div>
            <div className={ styles.analyticsText }>
                <h2>90%</h2>
                <p>Done</p>
            </div>
        </div>
    );
};

export default CardAnalytics;