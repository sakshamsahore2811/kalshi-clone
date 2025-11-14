const express = require('express');
const app = express();
const path = require('path');
const PORT = 3001 || process.env.PORT;
const cors = require('cors');

app.use(cors());

const { logger, loggerMiddleware } = require('./middleware/logger');
app.use(express.json());
app.use(loggerMiddleware);


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'));
});

app.use('/wallet',require('./routes/walletRoutes'));

app.use('/home',require("./routes/homeRoutes"));

app.listen(PORT,()=>console.log(`Server running on ${PORT}`));