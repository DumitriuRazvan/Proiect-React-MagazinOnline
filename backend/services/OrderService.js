const Order = require("../models/Order.model");
const User = require("../models/User.model");
const Item = require("../models/Item.model");

async function createOrder(id, items) {
    const user = await User.findById(id);

    if (!user) {
        throw new Error("Not logged in!");
    }

    const itemIds = items.map(x => x.id);

    const dbItems = await Item.find({
        id: {
            $in: itemIds
        }
    });

    let total = 0;

    for (const item of dbItems) {

        total += item.price * items.find(x => x.id == item.id).quantity;
    }

    const order = new Order({
        user: id,
        items,
        total,
        address: user.address
    });

    await order.save();

    user.orders.push(order.id);
    await user.save();

    return order;
}


async function readOrder(id) {
    const order = await Order.findById(id).populate({
        path: "orders",
        populate: {
            path: "item",
            ref: "Item"
        }
    });

    return order;
}

async function updateOrder(id, body) {
    await Order.findByIdAndUpdate(id, body);
}

module.exports = { createOrder, readOrder, updateOrder };