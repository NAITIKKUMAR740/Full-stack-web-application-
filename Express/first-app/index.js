const express = require('express');
const app = express()
const port = 3009 

app.get('/', (req, res) => {
  res.send('Hello World! h ')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})