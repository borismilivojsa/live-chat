import React from 'react'
import { useMessageState } from '@/hooks/useMessageState'

const SendMessage = () => {
    const sendMessage = useMessageState()


    return (
        <button
            onClick={sendMessage}
        >
            Send
        </button>
    )
}

export default SendMessage