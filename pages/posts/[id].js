// pages named [something].js surrounded br brackets is a dynamic route in Next.js
import Head from 'next/head'
import Layout from '../../components/layout'
import Date from '../../components/date'
import { getAllPostIds, getPostData } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.scss'

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingX1}>{postData.title}</h1>
                <img className={utilStyles.imgDisplay} src={postData.imgDisp} />
                <div className={utilStyles.lightText}>
                    <Date  dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml}} />
            </article>
        </Layout>
    ) 
}

export async function getStaticPaths() {
    // return a list of possible values for id.
    const paths = getAllPostIds()

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    // fetch needed data for the blog post using params.id
    const postData = await getPostData(params.id)

    return {
        props: {
            postData
        }
    }
}