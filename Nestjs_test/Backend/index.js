import express, { response } from "express";
import { handleUser } from "./controller/users.js";
// creat app express

const app = express();

app.get('', (req, response) => {
   response.send('okeoke')
})

app.get('/users', handleUser);
 






// lang nghe cong

app.listen(3333,'localhost',() => {
   console.log('connect ok')
})