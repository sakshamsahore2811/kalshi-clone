const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000|process.env.PORT;

const { logger, loggerMiddleware } = require('./middleware/logger');
app.use(loggerMiddleware);

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'));
});

app.get('/wallet',(req,res)=>{
    res.send('This is your wallet');
})

app.listen(PORT,()=>console.log(`Server running on ${PORT}`));