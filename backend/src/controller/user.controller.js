const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const User = require("../models/user.model");

const newToken = (user) => {
  return jwt.sign({ user }, "ADITYA");
};

router.post("/register", async (req, res) => {
  let newUser;
  try {
    const existUser = await User.findOne({ email: req.body.email });
    if (existUser) {
      return res.status(500).send("email already taken");
    }

    //  newUser = new User({
    //   username: req.body.username,
    //   email: req.body.email,
    //   password: req.body.password,
    // });

    const user = await User.create(req.body);

    const token = newToken(user);

    return res.status(200).send({ user, token });
  } catch (err) {
    console.log(err);
    return res.status(400).send(err);
  }
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  try {
    if (!user)
      return res
        .status(500)
        .send({ message: "please try another email or password" });

    const match = user.checkPassword(req.body.password);

    if (!match)
      return res
        .status(500)
        .send({ message: "please try another email or password" });

    const token = newToken(user);
    return res
      .status(200)
      .send({ message: "User signedIn successfully", token });
  } catch (err) {
    return res.status(400).send({ message: err });
  }
});

router.get("/alluser", async (req, res) => {
  const user = await User.find().lean().exec();
  if (!user) return res.status(500).send({ message: "user doesnt exist" });

  return res.status(200).send(user);
});

module.exports = router;
