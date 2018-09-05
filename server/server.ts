import express = require('express')

const app = express();
const port = 3030

app.use(express.static('dist'));
app.use('/',(req,res) => {
  res.send(`
            <head>
                <base href="/" />
            </head>
            <body>
               
           
                <script src="client.js"></script> 
            </body>
        </html>`)
});

app.listen(port, function(){
  console.log('listening port ', port)
});