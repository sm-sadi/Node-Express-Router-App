## Node Express Router App
 
 Using:  node, express, router, EJS

<hr>

### dotenv

 ##### Use dotenv to store secrect vaiables
 - To install:  `npm install dotenv`
 - Create a file .env 
 - In the file add vaibles like `PORT=3000` & so on

##### Using dot env varibales :
- In the index file first require it-
  `require('dotenv').config();`
-  Then 
  `const port = process.env.PORT || 3000;`

<hr>

### Middleware
Middleware pre process the request(get, post etc). 
It runs between the request being received and the final response being sent.

ex: body-parser , `app.use(express.json());`
