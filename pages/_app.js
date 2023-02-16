import 'bootstrap/dist/css/bootstrap.css'
import '../styles/livechat.css'
import { RecoilRoot } from 'recoil'
import Layout from '@/components/layout/Layout'
import { useRouter } from 'next/router'
import React from 'react'

export default function App({Component, pageProps}) {
    const router = useRouter()

    if (router.pathname === '/login' || router.pathname === '/register') {
        return <Component {...pageProps}/>
    }

    return (
        <RecoilRoot>
            <Layout>
                <Component { ...pageProps } />
            </Layout>
        </RecoilRoot>
    )
}
