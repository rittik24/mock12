const express = require("express");
const { UserModel } = require("../models/User.model");
require("dotenv").config();
const userRouter = express.Router();
userRouter.use(express.json());

userRouter.post("/register", async (req, res) => {
    const { name, email, pass } = req.body;
    try {
        const user = new UserModel({ name, email, pass });
        await user.save();
        res.send("register has been succesfull")
    } catch (err) {
        res.send("something went wrong")
        console.log(err)
    }
})

module.exports = { userRouter };