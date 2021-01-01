
import Link from 'next/link'
import Head from 'next/head'

import Layout from '../../components/layout'


export default function FirstPost() {
    return (
        <Layout>
                <div>
                    <Head>
                        <title>Test Page</title>
                    </Head>
                    <h1>First Post</h1>
                    <h2>
                        Read{' '}
                        <Link href="/">
                            <a>this Page</a>
                        </Link>
                    </h2>
                </div>
        </Layout>
    )
}
