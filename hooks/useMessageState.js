import { messageState, newMessageState } from '@/atoms/messageAtoms'
import { useRecoilState } from 'recoil'

export const useMessageState = () => {
    const [message, setMessage] = useRecoilState(messageState)
    const [newMessage, setNewMessage] = useRecoilState(newMessageState)

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }


    return () => {
        if (! newMessage) {
            return
        }

        let messageObject = {
            'id': getRandomInt(1000000),
            'value': newMessage,
            'user_id': 1
        }

        setMessage([...message, messageObject])
        setNewMessage('')
    }
}