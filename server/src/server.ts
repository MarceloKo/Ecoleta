import express from 'express'

const app = express();

app.get('/users',(request,response)=>{
    console.log('Listagem de usuários')
    response.send([
        'Diego','Cleiton','Robson'
    ])
})

app.listen(5000)