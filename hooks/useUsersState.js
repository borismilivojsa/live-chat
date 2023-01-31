import { useRecoilState } from 'recoil'
import { usersState, newUserState } from '@/atoms/usersAtoms'

export const useUsersState = () => {
    const [ users, setUsers ] = useRecoilState(usersState)
    const [ newUser, setNewUser ] = useRecoilState(newUserState)

    if (! newUser) {
        return
    }

    setUsers([...users, newUser])
    setNewUser('')
}