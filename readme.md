# Node Express Router App
 
 Using:  node, express, router, EJS

<hr>

## dotenv

 #### Use dotenv to store secrect vaiables
 - To install:  `npm install dotenv`
 - Create a file .env 
 - In the file add vaibles like `PORT=3000` & so on

#### Using dot env varibales :
- In the index file first require it-
  `require('dotenv').config();`
-  Then 
  `const port = process.env.PORT || 3000;`

<hr>

## Middleware
Middleware pre process the request(get, post etc). 
It runs between the request being received and the final response being sent.

ex: body-parser , `app.use(express.json());`

or you can create custom ones as well: see the custommiddleware.js

 ##### using morgan to log 

<hr>

## Router

### creating routes 
-create a folder & js files inside it then in that file

  `const express = require("express")`

  `const router = express.Router()`

  // define routes

   ` router.get("/", (req, res) => {`

   ` res.send("listening from  ${port} the user route")`

  `})`
  
  // export 
  
  `module.exports = router`


  ### using routes 

  in the index file - 
  //import routers

`const userRoute = require('./routes/user')`

`app.use('/user', userRoute)`

<hr>

## EJS (embaded javascript)
Is a templating language. this allows us to write js in html  

`app.set("view engine", "ejs")`
Create a folder views and then file with ejs extention
the we can render a file `res.render('success.ejs', { message: "thank you very much" })`

### ejs tags 

<% varibale   %> // js to output 
<% console.log("hello") %> // Js excecute on the server but no output
<%- <h1> just html here </h1> %> // render as html
<%% skip the tag  %> // to bypass ejs
<%# comment  %> // comment 
<%- include("page1.ejs") %> // link to another ejs file 
