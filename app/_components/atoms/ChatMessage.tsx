import Image, { StaticImageData } from 'next/image';
import React, { ReactNode } from 'react';

interface IChatMessage {
    message: ReactNode;
    className: string;
    img: StaticImageData;
    type: string;
}

const ChatMessage = ({ message, img, className, type }: IChatMessage) => {
    return (
        <div className={ className } >
            { type === 'sender' ?
                <>
                    <p >{ message }</p>
                    <Image src={ img } alt='image' width={ 30 } height={ 30 } />
                </>
                :
                <>
                    <Image src={ img } alt='image' width={ 30 } height={ 30 } />
                    <p >{ message }</p>
                </>
            }
        </div>
    );
};

export default ChatMessage;