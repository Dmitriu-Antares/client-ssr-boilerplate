import express = require('express')

const app = express();
const port = 3030

app.use('/',(req,res) => {
  res.send('hellss121s3')
});

app.listen(port, function(){
  console.log('listening port ', port)
});