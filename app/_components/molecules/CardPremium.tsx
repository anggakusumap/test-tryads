import React from 'react';
import styles from "../organisms/Aside.module.css";
import Image from 'next/image';
import { Crown } from '@/constants';
import Button from '../atoms/Button';

const CardPremium = () => {
    return (
        <div className={ styles.cardPremium }>
            <div className={ styles.titlePremium }>
                <p className={ styles.fontMedium }>Go to premium</p>
            </div>

            <Image src={ Crown } alt="premium" width={ 120 } height={ 80 } />

            <div>
                <h4>Need more features?</h4>
                <p className={ styles.textMuted }>Update your account to premium to get more features.</p>
            </div>

            <Button className={ styles.buttonGetNow }>Get now</Button>
        </div>
    );
};

export default CardPremium;