import React from 'react';
import styles from "../organisms/MainContent.module.css";
import { shoppingListItem } from '@/constants';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { FaPlus } from 'react-icons/fa6';
import Checkbox from '../atoms/Checbox';

const CardItemBuy = () => {
    return (
        <div className={ styles.cardBuy }>
            <h3>List of items to buy</h3>
            <div className={ styles.cardBuyTime }>
                <div>
                    <h2>02:00</h2>
                    <p>Sat, August 12</p>
                </div>
                <div>
                    <MdKeyboardArrowRight size={ '2rem' } />
                </div>
                <div>
                    <h2>05:00</h2>
                    <p>Sat, September 12</p>
                </div>
            </div>
            <div className={ styles.shoppingContainer }>
                <div className={ styles.addShopping }>
                    <p>0/3 Shopping list</p>
                    <p> <FaPlus /> Add an item</p>
                </div>
                <div className={ styles.checkboxContainer }>
                    { shoppingListItem.map((shop) => (
                        <Checkbox key={ shop.id } className={ styles.checkbox }>{ shop.title }</Checkbox>
                    )) }
                </div>
            </div>
        </div>
    );
};

export default CardItemBuy;