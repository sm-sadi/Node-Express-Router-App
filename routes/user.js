const express = require("express")
const router = express.Router()


// get dot env vairables
require('dotenv').config(); // Load .env file
const port = process.env.PORT || 3000;


// define routes
router.get("/", (req, res) => {
    res.send(`listening from  ${port} the user route`)
})

router.post("/", (req, res) => {
    console.log(req.body.name);

    res.send(`post successfull  ${port} the user route`)
})


// export 
module.exports = router