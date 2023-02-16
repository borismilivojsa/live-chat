import Head from 'next/head'
import Label from '@/components/utils/Label'
import Input from '@/components/utils/Input'
import { useState } from 'react'
import Link from 'next/link'
import Button from '@/components/utils/Button'
import Error from '@/components/utils/Error'
import useAuth from '@/lib/useAuth'

export default function LogIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const [remember, setRemember] = useState(false)

    const {login, isLoading, user} = useAuth({middleware: 'guest'})

    const submitForm = async event => {
        event.preventDefault()

        await login({email, password, remember, setErrors})
    }

    if (isLoading || user) {
        return <>Loading...</>
    }

    return (
        <>
            <Head>
                <title>Livechat-LogIn</title>
            </Head>

            <div className="container p-5">
                <Error errors={ errors }/>

                <form onSubmit={ submitForm }>
                    <div className="row mb-3">
                        <Label
                            htmlFor="email"
                            className="col-sm-2 col-form-label"
                        >
                            Email
                        </Label>
                        <div className="col-sm-10">
                            <Input
                                id="email"
                                type="email"
                                value={ email }
                                className="form-control"
                                required
                                autoFocus
                                autoComplete="off"
                                onChange={ (e) => setEmail(e.target.value) }
                                placeholder="example@gmail.com"
                            />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <Label
                            htmlFor="password"
                            className="col-sm-2 col-form-label"
                        >
                            Password
                        </Label>
                        <div className="col-sm-10">
                            <Input
                                id="password"
                                type="password"
                                value={ password }
                                className="form-control"
                                required
                                onChange={ (e) => setPassword(e.target.value) }
                                autoComplete="current-password"
                            />
                        </div>
                    </div>

                    <div>
                        <Input
                            id="remember_me"
                            type="checkbox"
                            name="remember"
                            checked={ remember }
                            onChange={ (e) => setRemember(e.target.value) }
                            className="form-check-input my-1"
                        />
                        <Label
                            htmlFor="remember_me"
                            className="mx-2"
                        >
                            Remember me
                        </Label>
                    </div>

                    <div className="offset-11">
                        <Link href="/register">
                            <p className="text-decoration-underline text-info-emphasis">
                                New account
                            </p>
                        </Link>
                        <Button className="btn btn-outline-success ms-4">Log In</Button>
                    </div>
                </form>
            </div>
        </>
    )
}