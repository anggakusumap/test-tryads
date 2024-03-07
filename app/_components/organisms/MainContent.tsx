import React from 'react';
import styles from './MainContent.module.css';
import Search from '../atoms/Search';
import CardBalance from '../molecules/CardBalance';
import CardVisa from '../molecules/CardVisa';
import CardItemBuy from '../molecules/CardItemBuy';
import CardChat from '../molecules/CardChat';
import CardTransactions from '../molecules/CardTransactions';
import CardAnalytics from '../molecules/CardAnalytics';

export const dataCircle = {
    labels: [ 'Done', 'In progres', 'Todo', 'Task' ],
    datasets: [
        {
            data: [ 30, 30, 20, 10 ],
            backgroundColor: [
                '#515BEA',
                '#FEA50F',
                '#DB694E',
                '#F1F2F3'
            ],
            borderColor: [
                '#515BEA',
                '#FEA50F',
                '#DB694E',
                '#F1F2F3'
            ],
            borderWidth: 1,
        },
    ],
};

const MainContent = () => {
    return (
        <main className={ styles.mainContent }>
            <section className={ styles.mainTop }>
                <div className={ styles.mainPeople }>
                    <h1>Hello, Angga Kusuma</h1>
                    <p>View and control your finance here!</p>
                </div>
                <Search className={ styles.mainSearch } />
            </section>

            <section className={ styles.mainBalanceVisa }>
                <CardBalance />
                <CardVisa />
            </section>

            <section className={ styles.mainBuyChat }>
                <div className={ styles.cardBuyChat }>
                    <CardItemBuy />
                    <CardChat />
                </div>
            </section>

            <section className={ styles.mainTransactionsAnalytics }>
                <CardTransactions />
                <CardAnalytics />
            </section>
        </main>
    );
};

export default MainContent;