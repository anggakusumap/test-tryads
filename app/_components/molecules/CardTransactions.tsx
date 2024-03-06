"use client";

import React from 'react';
import styles from "../organisms/MainContent.module.css";
import TransactionList from '../atoms/TransactionList';
import useTransactions from '../hooks/useTransactions';

const CardTransactions = () => {
    const { isNew, orderByNewest, orderByLowest, transactions, } = useTransactions();

    return (
        <div className={ styles.cardTransactions }>
            <div className={ styles.cardTransactionsTitle }>
                <h3>Last Transactions</h3>
                <div>
                    <p className={ isNew ? styles.underline : '' } onClick={ orderByNewest }>Newest</p>
                    <p className={ !isNew ? styles.underline : '' } onClick={ orderByLowest }>Lowest</p>
                </div>
            </div>
            <hr />
            { transactions.map((list) => (
                <TransactionList key={ list.id }
                    className={ styles.transactionList }
                    img={ list.img }
                    name={ list.name }
                    createdAt={ list.createdAt }
                    transaction={ list.transaction } />
            )) }
        </div>
    );
};

export default CardTransactions;