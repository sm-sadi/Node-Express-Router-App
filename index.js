require('dotenv').config(); // Load .env file

const express = require("express")
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs")

// Middleware to get path 
const path = require('path');

// middleware to parse json 
app.use(express.json());

// Middleware to Parse Form Data
app.use(express.urlencoded({ extended: true }));

// middleware morgan to log 
var morgan = require('morgan')
app.use(morgan('tiny'))


//import routers
const userRoute = require('./routes/user')
app.use('/user', userRoute)

const getInTouchRoute = require('./routes/getInTouch')
app.use('/getInTouch', getInTouchRoute)

// response when user makes a get call 
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));

    // res.send(`listening from ${port}`)
})


// start listening to the port 
app.listen(port, () => {
    console.log(`listening from ${port}`);
})