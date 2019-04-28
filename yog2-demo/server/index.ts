import  express from 'express';

var app = express()

app.get('/', function (req:any, res:any) {
    res.send('Hello World!2')
  })


app.listen(3000)

