const mongoose = require("mongoose");

const orderModel = new mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    items: [
        {
            item: {
                type: mongoose.SchemaTypes.ObjectId,
                ref: 'Item'
            },
            quantity: {
                type: mongoose.SchemaTypes.Number
            }
        }
    ],
    address: {
        type: mongoose.SchemaTypes.String
    },
    status: {
        type: mongoose.SchemaTypes.String
    }
});

const Order = mongoose.model("Order", orderModel);

module.exports = Order;