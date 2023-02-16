import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Input from '@/components/utils/Input'
import Button from '@/components/utils/Button'
import Error from '@/components/utils/Error'
import Label from '@/components/utils/Label'
import useAuth from '@/lib/useAuth'
export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])

    const { register } = useAuth({middleware: 'guest'})
    const submitForm = async event => {
        event.preventDefault()

        await register({name, email, password, password_confirmation, setErrors})
    }

    return (
        <>
            <Head>
                <title>LiveChat-Register</title>
            </Head>

            <div className='container p-5'>
                <Error errors={ errors }/>

                <form onSubmit={ submitForm }>
                    <div className="row mb-3">
                        <Label
                            htmlFor="email"
                            className="col-sm-2 col-form-label"
                        >
                            Username
                        </Label>
                        <div className="col-sm-10">
                            <Input
                                id="name"
                                type='text'
                                value={name}
                                className="form-control"
                                required
                                autoFocus
                                autoComplete="off"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>

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
                                type='email'
                                value={email}
                                className="form-control"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='example@gmail.com'
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
                                type='password'
                                value={password}
                                className="form-control"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <Label
                            htmlFor="password"
                            className="col-sm-2 col-form-label"
                        >
                            Confirm Password
                        </Label>
                        <div className="col-sm-10">
                            <Input
                                id="passwordConfirmation"
                                type='password'
                                value={password_confirmation}
                                className="form-control"
                                required
                                onChange={(e) => setPasswordConfirmation(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="row mx-1">
                        <Link href='/login'>
                            <p className='text-decoration-underline text-info-emphasis'>
                                Already registered?
                            </p>
                        </Link>
                        <Button className='btn btn-outline-success'>Register</Button>
                    </div>
                </form>
            </div>
        </>
    )
}