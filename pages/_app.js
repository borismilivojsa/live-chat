import 'bootstrap/dist/css/bootstrap.css'
import '../styles/livechat.css'
import { RecoilRoot } from 'recoil'
import Layout from '@/components/Layout/Layout'

export default function App({Component, pageProps}) {
    return (
        <RecoilRoot>
            <Layout>
                <Component { ...pageProps } />
            </Layout>
        </RecoilRoot>
    )
}
