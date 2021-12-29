const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
    username: {
        type: mongoose.SchemaTypes.String
    },
    password: {
        type: mongoose.SchemaTypes.String
    },
    orders: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Order'
        }
    ],
    role: {
        type: mongoose.SchemaTypes.String
    }
});

const User = mongoose.model("User", userModel);

module.exports = User;