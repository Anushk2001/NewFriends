import express from "express"
import mongoose from "mongoose"

// APP Configue
const app = express();
const port = process.env.PORT || 8001
const connection_url = 'mongodb+srv://admin:HIDDEN@cluster0.ljmfz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

// Middlewares

// DB Configue
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

// API Endpoints
app.get("/", (req,res) => res.status(200).send("Hello Anushk!!!"));

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));