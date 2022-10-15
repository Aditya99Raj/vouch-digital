const mongoose = require("mongoose");

module.exports = () => {
  mongoose.connect(
    "mongodb+srv://aditya:aditya@cluster0.vq3pvcr.mongodb.net/?retryWrites=true&w=majority"
  );
};
