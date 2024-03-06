"use client";
import React, { useState } from 'react';
import styles from "../organisms/MainContent.module.css";
import { shoppingListItem } from '@/constants';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { FaPaperPlane, FaPlus } from 'react-icons/fa6';
import Checkbox from '../atoms/Checbox';
import TextButton from '../atoms/TextButton';
import Button from '../atoms/Button';

const CardItemBuy = () => {
    const [ shoppingItem, setShoppingItem ] = useState(shoppingListItem);
    const [ showAddItem, setShowAddItem ] = useState(false);
    const [ newItem, setNewItem ] = useState('');
    const activeItems = shoppingItem.filter(item => item.active);

    const handleShowAddItem = () => {
        if (showAddItem)
        {
            setShowAddItem(false);
        } else
        {
            setShowAddItem(true);
        }
    };

    const handleAddItem = () => {
        if (newItem.trim() !== '')
        {
            const newItemObject = {
                id: shoppingItem.length + 1,
                title: newItem,
                active: false,
            };

            setShoppingItem([ ...shoppingItem, newItemObject ]);
            setNewItem('');
            setShowAddItem(false);
        }
    };

    const handleChange = (id: number) => {
        const updatedShoppingItem = shoppingItem.map(item => {
            if (item.id === id)
            {
                return {
                    ...item,
                    active: !item.active
                };
            }
            return item;
        });

        setShoppingItem(updatedShoppingItem);
    };

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
                    <p>{ activeItems.length }/{ shoppingItem.length } <span>Shopping list</span></p>
                    <TextButton className={ styles.addItem } onClick={ handleShowAddItem }> <FaPlus /> Add an item</TextButton>
                </div>
                { showAddItem &&
                    <div className={ styles.inputItem }>
                        <input
                            type="text"
                            name="chatInput"
                            id="chatInput"
                            value={ newItem }
                            onChange={ (e) => setNewItem(e.target.value) }
                            placeholder="Type your item here"
                        />
                        <Button onClick={ handleAddItem } className={ styles.inputItemButton }><FaPaperPlane color='white' /></Button>
                    </div>
                }
                <div className={ styles.checkboxContainer }>
                    { shoppingItem.map((shop) => (
                        <Checkbox
                            onChange={ () => handleChange(shop.id) }
                            isActive={ shop.active }
                            key={ shop.id }
                            className={ styles.checkbox }>
                            { shop.title }
                        </Checkbox>
                    )) }
                </div>
            </div>
        </div>
    );
};

export default CardItemBuy;