import express from "express"
import mongoose from "mongoose"
import Cors from "cors"

import Cards from "./DBCards.js"

// APP Configue
const app = express();
const port = process.env.PORT || 8001
const connection_url = 'mongodb+srv://admin:Hidden@cluster0.ljmfz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

// Middlewares
app.use(express.json());
app.use(Cors());


// DB Configue
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

// API Endpoints
app.get("/", (req,res) => res.status(200).send("Hello Anushk!!!"));

app.post('/NewFriends/card',(req,res) => {
    const DBCard = req.body;

    Cards.create(DBCard,(err,data) => {
        if(err)
        {
            res.status(500).send(err);   // Internal server error   
        }
        else
        {
            res.status(201).send(data);  //successful
        }

    })
})
   //for downloading data
app.get('/NewFriends/card',(req,res) => {

    Cards.find((err,data) => {
        if(err)
        {
            res.status(500).send(err);   // Internal server error   
        }
        else
        {
            res.status(200).send(data);  //successful
        }

    })
})   

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));