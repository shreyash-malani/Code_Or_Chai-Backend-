require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
//   res.send('Hello World!')
// })
// app.get('/', (req, res) => {
//   res.json({
//     message1: 'Hello World!',
//     message2: 'Hello World!'
//   })
// })

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1><h1>Hello World!</h1>')
})

app.get('/twitter', (req, res) => {
    res.send('Hello Twitter!')
})

app.get('/login', (req, res) => {
    res.send('<h1>pls login at chai or code</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Chai or coffee</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port http://localhost:${process.env.PORT}`)
})
