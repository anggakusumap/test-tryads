import React from 'react';
import styles from "../organisms/MainContent.module.css";
import { transactionList } from '@/constants';
import TransactionList from '../atoms/TransactionList';

const CardTransactions = () => {
    return (
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
    );
};

export default CardTransactions;