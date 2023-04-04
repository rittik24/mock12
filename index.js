const express = require("express")
const { connection } = require("./config/db")
require("dotenv").config();

const app = express()
app.use(express.json());
// const port = 5000

app.get("/", (req, res) => {
    res.send("Home Page")
})

app.listen(process.env.port, async () => {
    try {
        await connection;
        console.log("connected to DB")
    } catch(err) {
        console.log("something went wrong")
        console.log(err)
    }
    console.log(`Port is running at port ${process.env.port}`)
})