"use client";

import React from 'react';
import styles from "../organisms/MainContent.module.css";
import ChatMessage from '../atoms/ChatMessage';
import { FaRegSmile } from 'react-icons/fa';
import { FaPaperclip } from 'react-icons/fa6';
import Button from '../atoms/Button';
import useChat from '../hooks/useChat';

const CardChat = () => {
    const { messages, newMessageText, setNewMessageText, handleSendMessage } = useChat();

    return (
        <div className={ styles.cardChat }>
            <div className={ styles.chatContainer }>
                <h3>Esther Howard</h3>
                { messages.map((list) => (
                    <ChatMessage
                        key={ list.id }
                        img={ list.img }
                        type={ list.type }
                        message={ list.message }
                        className={ list.type == 'sender' ? styles.messageSender : styles.messageReceiver } />
                )) }
            </div>
            <div className={ styles.chatInput }>
                <input
                    type="text"
                    name="chatInput"
                    id="chatInput"
                    value={ newMessageText }
                    onChange={ (e) => setNewMessageText(e.target.value) }
                    placeholder="Type your message here"
                />
                <div className={ styles.bottomInput }>
                    <div>
                        <FaRegSmile />
                        <FaPaperclip />
                    </div>
                    <Button className={ styles.buttonSend } onClick={ handleSendMessage }>Send now</Button>
                </div>
            </div>
        </div>
    );
};

export default CardChat;