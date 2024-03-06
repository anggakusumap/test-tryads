import Image, { StaticImageData } from 'next/image';
import React, { ReactNode } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

interface ITransactionList {
    className: string;
    img: StaticImageData;
    name: string;
    createdAt: string;
    transaction: string;
}

const TransactionList = ({ className, img, name, createdAt, transaction }: ITransactionList) => {
    return (
        <>
            <div className={ className } >
                <div>
                    <Image src={ img } alt='image' width={ 30 } height={ 30 } />
                    <div>
                        <h4>{ name }</h4>
                        <p>{ createdAt }</p>
                    </div>
                </div>
                <div>
                    <p>{ transaction }</p>
                    <BsThreeDotsVertical />
                </div>
            </div>
            <hr />
        </>
    );
};

export default TransactionList;