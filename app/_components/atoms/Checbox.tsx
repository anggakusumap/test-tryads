import React, { ReactNode } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

interface ICheckbox {
    children: ReactNode;
    onClick?: () => void;
    className: string;
}

const Checkbox = ({ children, onClick, className }: ICheckbox) => {
    return (
        <div className={ className } onClick={ onClick }>
            <input type='checkbox' />
            <label >{ children }</label>
            <BsThreeDotsVertical />
        </div>
    );
};

export default Checkbox;