import { NavDropdown } from 'react-bootstrap'
import useAuth from '@/lib/useAuth'
import { useRouter } from 'next/router'

export default function Dropdown({user}) {
    const { logout } = useAuth()
    const router = useRouter()
    const openProfile = (event) => {
        event.preventDefault()

        router.push('/profile')
    }

    return (
        <>
            <NavDropdown title={`#${user?.id}`} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={openProfile}>Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logout}>
                    Switch Account
                </NavDropdown.Item>
                <NavDropdown.Item onClick={logout} href="/register">
                    New Account
                </NavDropdown.Item>
                <NavDropdown.Item onClick={logout}>
                    Log Out
                </NavDropdown.Item>
            </NavDropdown>
        </>
    )
}