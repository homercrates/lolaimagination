import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.scss'
import Date from '../components/date'

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  // By returning allPostsData inside the props object in getStaticProps, 
  //the blog posts will be passed to the Home component as a prop. Now you can access the blog posts like so
  // export default function Home ({ allPostsData }) { ... }
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          come enjoy the treats that Lola has dreamt up.
        </p>
      </section>
      
      {/*  the below section is where we are pulling in the blod MD info from getStaticProps function*/}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>On Display</h2>
        <main className={styles.main}>
          <div className={styles.grid}>
            {allPostsData.map(({ id, date, title, imgDisp }) => (
              <a href={`/posts/${id}`} className={styles.card} key={id}>
                <h3>{title}</h3>
                <br />
                <img src={imgDisp} className={styles.imgCard} />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </a>
            ))}
          </div>
        </main>
        {/* <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                {title}
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date  dateString={date} />
              </small>
            </li>
          ))}
          </ul> */}
      </section>

      <main className={styles.main}>
        <div className={styles.grid}>
          <a href="/" className={styles.card}>
            <h3>Lola's videos &rarr;</h3>
            <p>Videos Lola makes because she is very interested in making and editing videos</p>
          </a>

          <a href="/" className={styles.card}>
            <h3>Lolas thoughts &rarr;</h3>
            <p>A place where Lola can just put stuff out there I guess, because why not.</p>
          </a>

          <a
            href="/"
            className={styles.card}
          >
            <h3>Lolas Pet Rocks &rarr;</h3>
            <p>Discover and deploy Pet Rocks!!!!</p>
          </a>

          <a
            href="/"
            className={styles.card}
          >
            <h3>Other Stuff &rarr;</h3>
            <p>
              Just more stuff. Who even knows anymore.
            </p>
          </a>

          <Link href='/posts/first-post'>
            <a className={styles.card}>
              click this card to go to something blabla
            </a>
          </Link>
         
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </Layout>
  )
}