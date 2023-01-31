import { useRecoilState } from 'recoil'
import { friendsState, newFriendState } from '@/atoms/friendsAtoms'

export const useFriendsState = () => {
    const [ friends, setFriends ] = useRecoilState(friendsState)
    const [ newFriend, setNewFriend ] = useRecoilState(newFriendState)

    if (! newFriend) {
        return
    }

    setFriends([...friends, newFriend])
    setNewFriend('')
}