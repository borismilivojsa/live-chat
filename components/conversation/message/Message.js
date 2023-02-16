import React, { useEffect } from 'react'
import useAuth from '@/lib/useAuth'
import { useRouter } from 'next/router'
import axios from '@/lib/axios'

const Message = ({setMessages, messages}) => {
    const router = useRouter()
    const { user } = useAuth({ middleware: 'auth' })
    let friend_id = router.query.friendId

    useEffect(() => {
        takeMessage()
    }, [friend_id, user?.id])

    const takeMessage = async () => {
        await axios.get('/api/message').then((response) => {
                // simulate taking data
            },
        ).catch((error) => {
            setMessages([
                {id: '1', value: 'Cao', user_id: `${ user?.id }`, time: '12:21'},
                {id: '2', value: 'Cao', user_id: `${ friend_id }`, time: '12:22'},
                {id: '12', value: 'Cao', user_id: `${ user?.id }`, time: '12:22'},
                {id: '13', value: 'sta ima', user_id: `${ friend_id }`, time: '12:22'},
                {id: '14', value: 'eo', user_id: `${ user?.id }`, time: '12:22'},
                {id: '133', value: 'nista, ktb', user_id: `${ friend_id }`, time: '12:22'},
                {id: '51', value: 'asd', user_id: `${ user?.id }`, time: '12:22'},
                {id: '16', value: 'Cao', user_id: `${ friend_id }`, time: '12:22'},
                {id: '17', value: 'Cao', user_id: `${ user?.id }`, time: '12:22'},
                {id: '188', value: 'Cao', user_id: `${ friend_id }`, time: '12:22'},
                {id: '199', value: 'Cao', user_id: `${ user?.id }`, time: '12:22'},
                {id: '1567', value: 'Cao', user_id: `${ friend_id }`, time: '12:22'},
                {id: '7861', value: 'Cao', user_id: `${ user?.id }`, time: '12:22'},
                {id: '178', value: 'Cao', user_id: `${ friend_id }`, time: '12:22'},
                {id: '1678', value: 'Cao', user_id: `${ user?.id }`, time: '12:22'},
                {id: '189', value: 'Cao', user_id: `${ friend_id }`, time: '12:22'},
                {id: '1789', value: 'Cao', user_id: `${ user?.id }`, time: '12:22'},
                {id: '7891', value: 'Cao', user_id: `${ friend_id }`, time: '12:22'},
                {id: '179785', value: 'Cao', user_id: `${ user?.id }`, time: '12:22'},
            ])
        })
    }

    const renderMessages = messages.map((message) => {
        return (
            <div key={ message.id }>
                <div className={ `col-md-3 ${ parseInt(message.user_id) === user?.id ? 'offset-md-9' : '' }` }>
                    <div className="px-3 py-1 my-2 rounded-4 chat-bubble text-break d-flex justify-content-between">
                        <div className="fs-5">
                            { message.value }
                        </div>
                        <div className="fs-6">
                            { message.time }
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    if (! messages.length) {
        return (
            <>
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div>
            { renderMessages }
        </div>
    )
}

export default Message