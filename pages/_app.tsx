import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

//In Next.js, you can add global CSS files by 
//importing them from pages/_app.js. You cannot import global CSS anywhere else.

//The reason that global CSS can't be imported outside of pages/_app.js is that global CSS affects all elements on the page.
//If you were to navigate from the homepage to the /posts/first-post page, global
//styles from the homepage would affect /posts/first-post unintentionally.


