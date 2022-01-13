const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./controllers/UserRouter");
const fileRouter = require("./controllers/fileRouter");

const app = express();
app.use(express.json());
app.use(express.static('public'))

// routers
app.use(userRouter);
app.use(fileRouter);

app.listen(5000, async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017");



    console.log("App started on 5000");
});