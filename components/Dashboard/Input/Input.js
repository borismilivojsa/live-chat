import React from 'react'
import { useRecoilState } from 'recoil'
import { newMessageState } from '@/atoms/messageAtoms'
import { useMessageState } from '@/hooks/useMessageState'


const Input = () => {
    const [newMessage, setNewMessage] = useRecoilState(newMessageState)
    const sendMessage = useMessageState()
    const inputText = (e) => setNewMessage(e.target.value)

    const submit = (e) => {
        if (e.which !== 13) {
            return
        }

        sendMessage()
    }

    return (
        <div>
            <textarea
                value={newMessage}
                onChange={inputText}
                onKeyPress={submit}
            />
        </div>
    )
}

export default Input