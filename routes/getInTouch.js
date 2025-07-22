const express = require("express")
const router = express.Router()
const app = express();
// to get port data 


app.set("view engine", "ejs")

// define routes
router.get("/", (req, res) => {
    res.send(`listening from   the user route`)

})

router.post("/", (req, res) => {
    console.log(req.body);

    // res.send(`post successfull the user route`)
    res.render('success.ejs', { message: "thank you very much" })
})


// export 
module.exports = router