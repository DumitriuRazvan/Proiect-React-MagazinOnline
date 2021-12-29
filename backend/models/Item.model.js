const mongoose = require("mongoose");

const itemModel = new mongoose.Schema({
    name: {
        type: mongoose.SchemaTypes.String
    },
    description: {
        type: mongoose.SchemaTypes.String
    },
    options: [
        {
            type: mongoose.SchemaTypes.String
        }
    ],
    tags: [
        {
            type: mongoose.SchemaTypes.String
        }
    ],
    price: {
        type: mongoose.SchemaTypes.Number
    },
    quantity: {
        type: mongoose.SchemaTypes.Number
    }
});

const Item = mongoose.model("Item", itemModel);

module.exports = Item;