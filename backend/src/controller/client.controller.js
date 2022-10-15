const express = require("express");
const router = express.Router();

const clientModel = require("../models/client.model");

router.get("/allclients", async (req, res) => {
  try {

    const client = await clientModel.find();
    return res.status(200).send(client);
    
  } catch (err) {
    return res.status(400).send({ message });
  }
});

router.post("/addclients", async (req, res) => {
  try {
    const data = req.body;
    const client = await clientModel.create(data);
    return res.status(200).send(client);
  } catch (err) {
    return res.status(400).send({ message });
  }
});

module.exports = router;
