import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose';
/* import mysql from 'mysql' */


const app = express()
app.use(cors())

//connect to mongodb
const dbURI = "mongodb+srv://david:daveeys123@daveeys.zz47b.mongodb.net/Daveeys?retryWrites=true&w=majority"
mongoose.connect(dbURI,{ useNewUrlParser: true , useUnifiedTopology:true}) //actually an async task
    .then((result)=>app.listen(5000, ()=>console.log(`Listening on port 5000`)))
    .catch((err)=>console.log(err))

app.use(express.json())

/* const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'daveeysdb1',

}) */




