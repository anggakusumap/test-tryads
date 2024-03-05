import React from 'react';
import styles from "./Aside.module.css";
import CardExpensesIncome from '../molecules/CardExpensesIncome';
import CardLatestSpending from '../molecules/CardLatestSpending';
import CardPremium from '../molecules/CardPremium';

const Aside = () => {
    return (
        <aside className={ styles.sideContent }>
            <CardExpensesIncome />
            <CardLatestSpending />
            <CardPremium />
        </aside>
    );
};

export default Aside;