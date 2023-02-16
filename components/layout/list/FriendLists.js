import React, { useEffect } from 'react'
import useAuth from '@/lib/useAuth'
import axios from '@/lib/axios'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { friendsState } from '@/atoms/friendsAtoms'

const FriendLists = () => {
    const [friends, setFriends] = useRecoilState(friendsState)
    const { user } = useAuth('auth')
    const router = useRouter()

    useEffect(() => {
        getFriends()
    }, [user?.id])

    const getFriends = async () => {
         await axios.get('/api/friends').then((response) => {}).catch(
             (error) => {
                 setFriends([
                     {id: '2', name: 'Pero', lastName: 'dsgbgfd', last_message: 'Eee', last_message_time: '15:23'},
                     {id: '3', name: 'Stevo', lastName: 'edbfds', last_message: 'Na vezi smo', last_message_time: '23:43'},
                     {id: '4', name: 'Djuro', lastName: 'saddv', last_message: '(Y)', last_message_time: '06:23'},
                     {id: '5', name: 'Mihajlo', lastName: 'hgng', last_message: 'Posto je', last_message_time: '05:23'},
                     {id: '6', name: 'Sasa', lastName: 'dfdsdf', last_message: 'Dje si', last_message_time: '15:23'},
                     {id: '7', name: 'Drazo', lastName: 'dfdsf', last_message: 'Ej', last_message_time: '15:23'}
                 ])
             }
         )
    }

    const renderFriends = friends.map((friend, index) => {
        return (
            <div
                key={index}
                onClick={() => router.push(`/chat/${friend?.id}`)}
                className="friend-drawer d-flex align-baseline p-2 border-bottom"
            >
                <img
                    alt="User photo"
                    src={friend.image}
                    className="profile-image"
                />
                <div className="text">
                    <h6>{friend.name} {friend.lastName}</h6>
                    <p>{friend.last_message}</p>
                </div>
                <div className="time small">{friend.last_message_time}</div>
            </div>
    )
    })

    return (
        <div>
            {renderFriends}
        </div>
    )
}

export default FriendLists