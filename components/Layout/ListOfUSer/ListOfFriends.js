import React from 'react'
import { useRecoilValue } from 'recoil'
import { friendsState } from '@/atoms/friendsAtoms'
import { useRouter } from 'next/router'

const ListOfFriends = () => {
    const friends = useRecoilValue(friendsState)
    const router = useRouter()

    const renderListOfUsers = friends.map((friend) => {

        return (
            <div className="friend-drawer friend-drawer--onhover" key={friend.id} onClick={() => router.push(`/chat/${friend.id}`)}>
                <img
                    className="profile-image" src={friend.image}
                    alt="User photo"
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
            {renderListOfUsers}
        </div>
    )
}

export default ListOfFriends