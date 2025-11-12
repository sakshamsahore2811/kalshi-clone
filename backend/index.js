const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000|process.env.PORT;

const supabase = require('./config/dbConn');

const { logger, loggerMiddleware } = require('./middleware/logger');
app.use(loggerMiddleware);

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'));
});

app.get('/wallet',async(req,res)=>{
    const { data, error } = await supabase
  .from('event')
  .select('*')
    res.send(`This is your wallet : ${data}`);

  if (error) {
    console.error('Supabase error:', error);
    return res.status(500).json({ error: error.message });
  }
});

app.listen(PORT,()=>console.log(`Server running on ${PORT}`));