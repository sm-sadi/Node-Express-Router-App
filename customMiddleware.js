const express = require("express");
const app = express()
const port = 3000

// using custom midddleware
app.use(custom_function)

// creating middleware function
function custom_function(req, res, next) {
    console.log(req.url);
    console.log(req.method);
    next() // need to call next for the function to move on
}


app.get("/customMiddleware", (req, res) => {
    res.send("hello")
})

app.listen(port, () => {
    console.log(`listing to port ${port}`);

})