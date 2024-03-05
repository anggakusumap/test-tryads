import React from 'react';
import styles from "./Aside.module.css";
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Avatar, latestSpendingData } from '@/constants';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import TextButton from '../atoms/TextButton';
import Button from '../atoms/Button';

const Aside = () => {
    return (
        <aside className={ styles.sideContent }>
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

            <div className={ styles.cardLatestSpending }>
                <div className={ styles.titleLatest }>
                    <h3>Latest Spending</h3>
                    <BsThreeDotsVertical />
                </div>

                { latestSpendingData.map((latest, i) => (
                    <div key={ i }>
                        <div className={ styles.dataLatest }>
                            <Image src={ latest.img } alt={ latest.title } width={ 50 } height={ 50 } />
                            <div>
                                <p className={ styles.fontMedium }>{ latest.title }</p>
                                <p className={ styles.textMuted }>{ latest.createdAt }</p>
                            </div>
                        </div>
                        <hr />
                    </div>
                )) }

                <TextButton className={ styles.viewAll }>
                    <p>View All</p>
                    <FaArrowRight />
                </TextButton>
            </div>

            <div className={ styles.cardPremium }>
                <div className={ styles.titlePremium }>
                    <p className={ styles.fontMedium }>Go to premium</p>
                </div>

                <Image src={ Avatar } alt="premium" width={ 80 } height={ 80 } />

                <div>
                    <h4>Need more features?</h4>
                    <p className={ styles.textMuted }>Update your account to premium to get more features.</p>
                </div>

                <Button className={ styles.buttonGetNow }>Get now</Button>
            </div>
        </aside>
    );
};

export default Aside;