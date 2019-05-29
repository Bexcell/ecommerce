

const { getdata,deleted, comment,postComment } = require('./controllers/controller')
const express = require('express');

const app = express() 
app.use(express.json())


app.get('/api/getdata', getdata)
app.delete('/api/delete:id', deleted)
app.put('/api/appreciate:id', comment)
app.post("/api/postcomment", postComment)

const port = 3001
app.listen(port, ()=> {
    console.log('server on', port)
})