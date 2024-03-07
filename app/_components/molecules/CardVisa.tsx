import React from 'react';
import styles from "../organisms/MainContent.module.css";
import Image from 'next/image';
import { Card, Visa } from '@/constants';

const CardVisa = () => {
    return (
        <div className={ styles.cardVisa }>
            <div className={ styles.cardVisaTitle }>
                <h2>A.</h2>
                <Image src={ Visa } alt='visa' width={ 50 } height={ 50 } />
            </div>
            <div className={ styles.visaPic }>
                <Image src={ Card } alt='card' width={ 150 } height={ 150 } />
            </div>
            <div className={ styles.cardVisaNumber }>
                <h4><sup>****</sup>9838</h4>
                <div>
                    <p>Jhon Demon</p>
                    <p>08/12</p>
                </div>
            </div>
        </div>
    );
};

export default CardVisa;