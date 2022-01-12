const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

app.listen(5000, async () => {
    await mongoose.connect("mongo://127.0.0.1:27017");

    

    console.log("App started on 5000");
});