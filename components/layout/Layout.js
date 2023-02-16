import React from 'react'
import NavBar from '@/components/layout/nav/NavBar'
import Search from '@/components/layout/search/Search'
import FriendLists from '@/components/layout/list/FriendLists'
import useAuth from '@/lib/useAuth'

const Layout = ({children}) => {
    const {user} = useAuth({middleware: 'auth'})

    return (
        <div className="row g-0 max-vh-height">
            <div className="col-md-1">
                <NavBar user={ user }/>
            </div>
            <div className="col-md-4 border-end">
                <div className="border-bottom">
                    <Search/>
                </div>
                <FriendLists/>
            </div>
            <div className="col-md-7">
                { children }
            </div>
        </div>
    )
}

export default Layout