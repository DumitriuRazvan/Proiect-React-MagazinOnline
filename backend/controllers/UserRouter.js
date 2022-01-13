const express = require("express");
const { verifyLoggedIn } = require("../middlewares/auth");
const { createUser, loginUser, updateUser } = require("../services/UserService");

const userRouter = express.Router();

userRouter.post("/signup", async (req, res) => {
    try {
        const user = await createUser(req.body.email, req.body.password);

        return res.status(201).send(user);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

userRouter.post("/login", async (req, res) => {
    try {
        const token = await loginUser(req.body.email, req.body.password);

        return res.status(200).send({ token });
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

userRouter.get("/status", [verifyLoggedIn], async (req, res) => {
    try {
        return res.status(200).send(req.user);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

userRouter.put("/user", [verifyLoggedIn], async (req, res) => {
    try {
        await updateUser(req.user._id, req.body);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

module.exports = userRouter;
