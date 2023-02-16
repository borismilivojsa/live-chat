import React, { useState } from 'react'
import axios from '@/lib/axios'
import useAuth from '@/lib/useAuth'
import Button from '@/components/utils/Button'

const ChatInput = ({messages, setMessages}) => {
    const [message, setMessage] = useState('')
    const { user } = useAuth({middleware: 'auth'})

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const addNewMessage = async () => {
        if (! message) {
            return
        }

        let randId = getRandomInt(10000000)

        await axios.post('/api/addNewMessage', {
            user_id: user?.id,
            message: message,
        }).then((response) => {
        }).catch((error) => {
            setMessages([...messages, {
                id: randId,
                value: message,
                user_id: `${ user?.id }`,
            }])
        })

        setMessage('')
    }

    const submit = (e) => {
        if (e.which !== 13) {
            return
        }

        addNewMessage()
        setMessages([...messages, message])
        setMessage('')
    }

    return (
        <div className="d-flex">
            <input
                className="form-control me-2"
                value={message}
                onChange={e => setMessage(e.target.value)}
                onKeyPress={submit}
                placeholder="Unesite poruku ;)"
            />
            <Button
                onClick={addNewMessage}
                className="btn btn-primary d-flex align-items-center"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                    stroke="currentColor" width="20" height="20"
                >
                    <path
                        strokeLinecap="round" strokeLinejoin="round"
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                </svg>
            </Button>
        </div>
    )
}

export default ChatInput