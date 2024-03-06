import React from 'react';
import styles from "../organisms/MainContent.module.css";
import { messageList } from '@/constants';
import ChatMessage from '../atoms/ChatMessage';
import { FaRegSmile } from 'react-icons/fa';
import { FaPaperclip } from 'react-icons/fa6';
import Button from '../atoms/Button';

const CardChat = () => {
    return (
        <div className={ styles.cardChat }>
            <h3>Esther Howard</h3>
            <div className={ styles.chatContainer }>
                { messageList.map((list) => (
                    <ChatMessage
                        key={ list.id }
                        img={ list.img }
                        type={ list.type }
                        message={ list.message }
                        className={ list.type == 'sender' ? styles.messageSender : styles.messageReceiver } />
                )) }
            </div>
            <div className={ styles.chatInput }>
                <input type="text" name="chatInput" id="chatInput" placeholder='Type your message here' />
                <div className={ styles.bottomInput }>
                    <div>
                        <FaRegSmile />
                        <FaPaperclip />
                    </div>
                    <Button className={ styles.buttonSend } >Send now</Button>
                </div>
            </div>
        </div>
    );
};

export default CardChat;