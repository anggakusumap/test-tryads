"use client";

import React from 'react';
import styles from "../organisms/Aside.module.css";
import { BsThreeDotsVertical } from 'react-icons/bs';
import { latestSpendingData } from '@/constants';
import TextButton from '../atoms/TextButton';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import Image from 'next/image';
import useLatestSpending from '../hooks/useLatestSpending';

const CardLatestSpending = () => {
    const { isViewAll, handleButtonClick } = useLatestSpending();

    return (
        <div className={ styles.cardLatestSpending }>
            <div className={ styles.titleLatest }>
                <h3>Latest Spending</h3>
                <BsThreeDotsVertical />
            </div>

            { isViewAll
                ? latestSpendingData.map((latest, i) => (
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
                ))
                : latestSpendingData.slice(0, 3).map((latest, i) => (
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

            <TextButton className={ styles.viewAll } onClick={ handleButtonClick }>
                { isViewAll ?
                    <>
                        <FaArrowLeft />
                        <p>View Less</p>
                    </>
                    :
                    <>
                        <p>View All</p>
                        <FaArrowRight />
                    </>
                }
            </TextButton>
        </div>
    );
};

export default CardLatestSpending;