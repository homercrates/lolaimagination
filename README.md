This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).



## Notes for self
to get the server side rendering effects you are looking for check this part of the next.js website
- basics
 - pre-rendering and data fetching
    - fetching data at request time. 

## remember to generate a dynamic route is [dynamic].js or jsx  and then 
it must contain
   1. a react component to render the page
   2. getStaticPaths  which reutns an arraty of possible values for [dynamic]
   3. getStaticProps which fetches necessary data for the post with [dynamic]

## install remark  remark remark-html to render markdown better
## installed date-fns  to format the date

