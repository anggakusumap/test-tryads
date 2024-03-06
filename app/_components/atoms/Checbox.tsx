import React, { ReactNode } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

interface ICheckbox {
    children: ReactNode;
    onChange?: () => void;
    className: string;
    isActive: boolean;
}

const Checkbox = ({ children, onChange, className, isActive }: ICheckbox) => {
    return (
        <div className={ className }>
            <input type='checkbox' checked={ isActive } onChange={ onChange } />
            <label >{ children }</label>
            <BsThreeDotsVertical />
        </div>
    );
};

export default Checkbox;