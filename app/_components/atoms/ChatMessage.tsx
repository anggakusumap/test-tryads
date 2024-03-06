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
                    <Image src={ img } alt='image' width={ 40 } height={ 40 } />
                </>
                :
                <>
                    <Image src={ img } alt='image' width={ 40 } height={ 40 } />
                    <p >{ message }</p>
                </>
            }
        </div>
    );
};

export default ChatMessage;