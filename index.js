const express = require('express');
const app = express();
const port = 8000;

app.use(express.urlencoded({extended: true}));


// static files
app.use(express.static('assets'));

app.listen(port, err => {
    if(err){
        console.log(`Error in running server ${err}`);
        return;
    }
    console.log(`Server is running at port : ${port}`);
});