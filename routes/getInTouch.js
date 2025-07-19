const express = require("express")
const router = express.Router()

// to get port data 




// define routes
router.get("/", (req, res) => {
    res.send(`listening from  ${port} the user route`)
})

router.post("/", (req, res) => {
    console.log(req.body);

    res.send(`post successfull the user route`)
})


// export 
module.exports = router