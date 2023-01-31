import React from 'react'
import Message from '@/components/Dashboard/Message/Message'
import Chat from '@/components/Dashboard/Chat/Chat'
const Chats = () => {
    return (
        <>
            <div>
                <div>
                    <Message/>
                </div>
                <div className="chat-panel">
                    <Chat/>
                </div>
            </div>
        </>
    )
}

export default Chats