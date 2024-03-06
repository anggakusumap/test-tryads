"use client";

import React, { useState } from 'react';
import styles from "../organisms/MainContent.module.css";
import { transactionList } from '@/constants';
import TransactionList from '../atoms/TransactionList';

const CardTransactions = () => {
    const [ transactions, setTransactions ] = useState(transactionList);
    const [ isNew, setIsNew ] = useState(true);

    const orderByNewest = () => {
        const sortedTransactions = [ ...transactions ].sort((a, b) => {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });
        setTransactions(sortedTransactions);
        setIsNew(true);
    };

    const orderByLowest = () => {
        const sortedTransactions = [ ...transactions ].sort((a, b) => {
            return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        });
        setTransactions(sortedTransactions);
        setIsNew(false);
    };

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