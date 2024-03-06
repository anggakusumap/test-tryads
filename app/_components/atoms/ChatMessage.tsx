import Image from 'next/image';
import React, { ReactNode } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

interface ICheckbox {
    children: ReactNode;
    className: string;
    img: string;
}

const ChatMessage = ({ children, img, className }: ICheckbox) => {
    return (
        <div className={ className } >
            <Image src={ img } alt='image' width={ 30 } height={ 30 } />
            <label >{ children }</label>
            <BsThreeDotsVertical />
        </div>
    );
};

export default ChatMessage;