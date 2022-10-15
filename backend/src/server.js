const express = require("express");
const app = express();
app.use(express.json());
const connect = require("./db/config");
const cors = require("cors");
app.use(cors());

const userController = require("./controller/user.controller");
const clientController = require("./controller/client.controller");

app.use("/user", userController);
app.use("/client", clientController);

const port = process.env.PORT || 8080;
app.listen(port, async() => {
  await connect();
  console.log(`listening at port ${port}` || "8080");
});
