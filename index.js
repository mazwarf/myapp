const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.json('Hello World!')
})

app.post('/login', (req, res) => {
const username = 'Azwar'
const password = '12345'

if(req.body.username != username){
  res.json({
    status: 'error, username not found'
    })
}
if(req.body.password != password){
  res.json({
    status: 'error, wrong password'
    })
}
    res.json({ status: 'success' })

})

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })