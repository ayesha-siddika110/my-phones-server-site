
const express = require('express');
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000
app.use(cors())
app.use(express.json())

const users = [
    {id: 1, name: "ayesha siddika", email: "ayeshasiddika@g.com"},
    {id: 2, name: "arisha", email: "arisha@g.com"},
    {id: 3, name: "amariya", email: "mariya@g.com"},
    {id: 4, name: "tishamoni", email: "tishamoni@g.com"},
]


app.get('/', (req,res)=>{
    res.send('hello users !')
})

app.get('/users', (req,res)=>{
    res.send(users)
})
app.get('/users/:id', (req,res)=>{
    const id = parseInt(req.params.id)

    const data = users.find(item=>item.id === id)
    res.send(data)
})

app.post('/users', (req, res)=>{
    console.log('post api httiing')
    console.log(req.body)

    const newUser = req.body
    newUser.id = users.length + 1
    users.push(newUser)
    res.send(newUser)
})

app.listen(port, ()=>{
    console.log(`server is running on port number ${port}`);
    
})







