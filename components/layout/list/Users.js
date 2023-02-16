import React, { useEffect, useState } from 'react'
import axios from '@/lib/axios'
import { useRecoilState } from 'recoil'
import { friendsState } from '@/atoms/friendsAtoms'

const Users = () => {
    const [users, setUsers] = useState([])
    const [friends, setFriends] = useRecoilState(friendsState)
    const [selectedUsers, setSelectedUsers] = useState([])
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        getUsers()
    }, [])

    const addUsers = (user) => {
        setSelectedUsers([...selectedUsers, user.user_id])

        setFriends([...friends, {id: user.user_id, name: user.userName, lastName: user.lastName}])
    }

    const removeUsers = (user) => {
        setSelectedUsers(selectedUsers.filter((selectedUser) => selectedUser !== user.user_id))

        if (friends.map((friend) => friend?.id === user.user_id)) {
            setFriends(friends.filter((friend) => {
                return friend?.id !== user.user_id
            }))
        }
    }


    const getUsers = async () => {
        await axios.get('/api/users').then((response) => {
        }).catch((error) => {
            setUsers([
                {user_id: '34', userName: 'Pero', lastName: 'dfs'},
                {user_id: '22', userName: 'sfsdf', lastName: 'ewf'},
                {user_id: '342', userName: 'Perwerfo', lastName: 'rg'},
                {user_id: '435345', userName: 'Pwefwsdfero', lastName: 'egref'},
                {user_id: '54654', userName: 'Pesdfero', lastName: 'sdfsdf'},
                {user_id: '67', userName: 'Perosfds', lastName: 'ewf'},
                {user_id: '78765', userName: 'Pwefwcvero', lastName: 'fwef'},
                {user_id: '3980794', userName: 'Peqasdro', lastName: 'efwfew'},
                {user_id: '3408', userName: 'Pwqero', lastName: 'wfeew'},
                {user_id: '39904', userName: 'Peeeero', lastName: 'wef'},
                {user_id: '78787', userName: 'Perorrrr', lastName: 'wfe'},
                {user_id: '347778', userName: 'rwqPero', lastName: 'fffr'},
                {user_id: '39879564', userName: 'qsPero', lastName: 'gtgt'},
                {user_id: '345785', userName: 'weewqPero', lastName: 'hy'},
                {user_id: '3758584', userName: 'qewPero', lastName: 'jy'},
                {user_id: '357855874', userName: 'wqePero', lastName: 'yj'},
            ])
        })
    }
    if (! users) {
        return
    }

    const renderUsers = users.map((user) => {
        return (
            <div className="card mx-2 my-2" key={ user.user_id } id="card">
                <img
                    id="cardImage"
                    src="https://www.ikea.com/hr/hr/images/products/kopparfall-slika-mjeseceva-povrsina__0997459_pe822680_s5.jpg?f=xxs"
                    alt="profile-image"
                />
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Username:{ user.userName }</li>
                    <li className="list-group-item">Lastname:{ user.lastName }</li>
                    <li className="list-group-item">UserId:{ user.user_id }</li>
                    <button
                        className={ `btn ${ selectedUsers.includes(user.user_id) ? 'btn-outline-danger' : 'btn-outline-success' }` }
                        onClick={ () => addUsers(user) }
                        hidden={ selectedUsers.includes(user.user_id) ? true : checked }
                    >
                        Add
                    </button>
                    <button
                        className={ `btn ${ selectedUsers.includes(user.user_id) ? 'btn-outline-danger' : 'btn-outline-success' }` }
                        onClick={ () => removeUsers(user) }
                        hidden={ selectedUsers.includes(user.user_id) ? checked : true }
                    >
                        Remove
                    </button>
                </ul>
            </div>
        )
    })

    return (
        <>
            <div className="max-vh-height overflow-y-scroll">
                <div className="d-flex align-content-start flex-wrap">
                    { renderUsers }
                </div>
            </div>
        </>
    )
}

export default Users