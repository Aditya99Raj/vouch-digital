const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const SALT_WORK_FACTOR = 10;

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, min: 3, max: 20 },
    email: { type: String, required: true, unique: true, max: 50 },
    password: { type: String, required: true, min: 6 },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.pre("save", async function save(next) {
  if (!this.isModified) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});

userSchema.methods.checkPassword = function (data) {
  return bcrypt.compareSync(data, this.password);
};

const User = mongoose.model("user", userSchema);
module.exports = User;
