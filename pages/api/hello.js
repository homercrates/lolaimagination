// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


// req = HTTP incoming message
// res = HTTP server response
export default (req, res) => {
  res.statusCode = 200
  res.json({ name: 'check check test API', anotherObject: 100, location: 'second' })
}

// could simplify to res.status(200).json({ name: 'hey man', anotherObject: 'sha sha'})

//You should not fetch an API Route from getStaticProps or getStaticPaths. Instead, 
// write your server-side code directly in getStaticProps or getStaticPaths (or call a helper function).
// Here’s why: getStaticProps and getStaticPaths runs only on the server-side. It will never be run on the client-side.
// It won’t even be included in the JS bundle for the browser. That means you can write code such as 
// direct database queries without them being sent to browsers.