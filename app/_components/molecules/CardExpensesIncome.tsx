import React from 'react';
import styles from "../organisms/Aside.module.css";

const CardExpensesIncome = () => {
    return (
        <div className={ styles.cardExpensesIncome }>
            <h3>Expenses and income</h3>
            <div className={ styles.detailExpenseIncome }>
                <div className={ styles.detailExpense }>
                    <p className={ styles.fontMedium }>Expense</p>
                    <p className={ styles.fontLarge }>75%</p>
                    <p className={ styles.textMuted }>5.653</p>
                </div>
                <div>
                    <p>VS</p>
                </div>
                <div className={ styles.detailIncome }>
                    <p className={ styles.fontMedium }>Income</p>
                    <p className={ styles.fontLarge }>40%</p>
                    <p className={ styles.textMuted }>2.656</p>
                </div>
            </div>
            <div className={ styles.widthBar }>
                <div className={ styles.width70 }></div>
                <div className={ styles.width30 }></div>
            </div>
        </div>
    );
};

export default CardExpensesIncome;