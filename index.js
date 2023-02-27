const express=require("express")
const app=express()
const port=4000
const bodyParser = require('body-parser'); 
app.use(bodyParser.urlencoded({ extended: false }));


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", " GET, POST, PUT,DELETE,PATCH");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  // Route to Homepage
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });
  app.get('/dictionary/:word', (req, res) => {
    // Insert Login Code Here
    
    let word = req.params.word;
    console.log(word)
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(data => {
    return data.json();
    })
    .then(word => {
    console.log(word);
    res.send( JSON.stringify(word[0].meanings) );
    });
    
  });
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
