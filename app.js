const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen(3000, ()=>{
    console.log('Servidor funcionando en puerto 3000 :P');
});

const PORT = process.env.PORT || 3000

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});
