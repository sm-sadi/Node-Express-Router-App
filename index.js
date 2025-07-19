require('dotenv').config(); // Load .env file

const express = require("express")
const app = express();
const port = process.env.PORT || 3000;


// Middleware to get path 
const path = require('path');

// middleware to parse json 
app.use(express.json());

// Middleware to Parse Form Data
app.use(express.urlencoded({ extended: true }));


//import routers
const userRoute = require('./routes/user')
app.use('/user', userRoute)

const getInTouchRoute = require('./routes/getInTouch')
app.use('/getInTouch', getInTouchRoute)


// start listening to the port 
app.listen(port, () => {
    console.log(`listening from ${port}`);
})

// response when user makes a get call 
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));

    // res.send(`listening from ${port}`)
})