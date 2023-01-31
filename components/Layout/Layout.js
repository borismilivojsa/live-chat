import React from 'react'
import NavBar from '@/components/Layout/NavBar/NavBar'
import Search from '@/components/Layout/Search/Search'
import ListOfFriends from '@/components/Layout/ListOfUSer/ListOfFriends'

const Layout = ({ children }) => {
    return (
        <div className='body'>
            <div className='cont'>
                <div className="row no-gutters">
                    <div className="col-md-1 border-right">
                        <NavBar/>
                    </div>
                    <div className="col-md-4 border-right">
                        <div className="search-box">
                            <Search/>
                        </div>
                        <ListOfFriends/>
                    </div>
                    <div className="col-md-7 border-right">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout