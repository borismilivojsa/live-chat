import React, { useEffect, useRef, useState } from 'react'
import Message from '@/components/conversation/message/Message'
import ChatInput from '@/components/conversation/input/ChatInput'

const Chats = () => {
    const [messages, setMessages] = useState([])
    const bottomRef = useRef(null)

    useEffect(() => {
        bottomRef.current?.scrollIntoView()
    }, [messages])

    return (
        <>
            <div className="d-flex flex-column justify-content-between max-vh-height">
                <div className="mx-3 overflow-y-auto pe-1">
                    <Message setMessages={setMessages} messages={messages}/>
                    <div ref={bottomRef}/>
                </div>
                <div className="mb-3 mx-3">
                    <ChatInput messages={messages} setMessages={setMessages}/>
                </div>
            </div>
        </>
    )
}

export default Chats