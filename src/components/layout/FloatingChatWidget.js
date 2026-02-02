'use client';

import { useState, useRef, useEffect } from 'react';
import { Headset, Phone, Mail, MessageCircle, Bot, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './FloatingChatWidget.module.css';

export default function FloatingChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);

    // Toggle the speed dial
    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (isChatOpen) setIsChatOpen(false); // Close chat if menu is toggled
    };

    // Toggle the chat window
    const openChat = () => {
        setIsChatOpen(true);
        setIsOpen(false); // Close speed dial
    };

    const closeChat = () => setIsChatOpen(false);

    // Mock Chat Logic
    const [messages, setMessages] = useState([
        { id: 1, type: 'bot', text: "Hello! 👋 I'm your AI assistant from Global Webify. How can I help you today?" }
    ]);
    const [inputText, setInputText] = useState('');

    const handleSend = () => {
        if (!inputText.trim()) return;

        // Add user message
        const newMsg = { id: Date.now(), type: 'user', text: inputText };
        setMessages(prev => [...prev, newMsg]);
        setInputText('');

        // Simulate Bot Response
        setTimeout(() => {
            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                type: 'bot',
                text: "Thanks for your message! Our team will get back to you shortly. For immediate assistance, please use the WhatsApp or Call options."
            }]);
        }, 1000);
    };

    return (
        <div className={styles.widgetContainer}>

            {/* Speed Dial Actions */}
            <AnimatePresence>
                {isOpen && (
                    <div className={styles.speedDial}>
                        <motion.a
                            href="https://wa.me/911234567890"
                            target="_blank"
                            className={`${styles.actionBtn} ${styles.whatsapp}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ delay: 0.05 }}
                            title="WhatsApp"
                        >
                            <MessageCircle size={20} />
                        </motion.a>

                        <motion.a
                            href="tel:+911234567890"
                            className={`${styles.actionBtn} ${styles.phone}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ delay: 0.1 }}
                            title="Call Us"
                        >
                            <Phone size={20} />
                        </motion.a>

                        <motion.a
                            href="mailto:help@globalwebify.com"
                            className={`${styles.actionBtn} ${styles.email}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ delay: 0.15 }}
                            title="Email Us"
                        >
                            <Mail size={20} />
                        </motion.a>

                        <motion.button
                            onClick={openChat}
                            className={`${styles.actionBtn} ${styles.bot}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ delay: 0.2 }}
                            title="AI Chat"
                        >
                            <Bot size={20} />
                        </motion.button>
                    </div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <button
                className={`${styles.toggleBtn} ${isOpen ? styles.active : ''}`}
                onClick={toggleMenu}
                aria-label="Contact Support"
            >
                {isOpen ? <X size={24} /> : <Headset size={24} />}
            </button>

            {/* Chat Window */}
            <AnimatePresence>
                {isChatOpen && (
                    <motion.div
                        className={styles.chatWindow}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    >
                        <div className={styles.chatHeader}>
                            <div className={styles.chatTitle}>
                                <Bot size={18} /> AI Assistant
                            </div>
                            <button onClick={closeChat} className={styles.closeChatBtn}><X size={18} /></button>
                        </div>

                        <div className={styles.chatBody}>
                            {messages.map(msg => (
                                <div key={msg.id} className={`${styles.message} ${styles[msg.type]}`}>
                                    {msg.type === 'bot' && <div className={styles.avatar}>🤖</div>}
                                    <div className={styles.bubble}>{msg.text}</div>
                                </div>
                            ))}
                        </div>

                        <div className={styles.chatInputArea}>
                            <input
                                type="text"
                                className={styles.chatInput}
                                placeholder="Type a message..."
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            />
                            <button className={styles.sendBtn} onClick={handleSend}>
                                <Send size={16} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
