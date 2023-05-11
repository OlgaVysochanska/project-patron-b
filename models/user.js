const { Schema, model } = require("mongoose");

const handleSchemaErrors = require("../middlewares/handleSchemaErrors");

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    name: {
      type: String,
      default: "",
    },
    phone: {
      type: String,
      default: "",
    },
    city: {
      type: String,
      default: "",
    },
    myPets: {
      type: Array,
      default: [],
    },
    myAbs: {
      type: Array,
      default: [],
    },
    favorite: {
      type: Array,
      default: [],
    },
    token: {
      type: String,
      default: null,
    },
    avatarURL: {
      type: String,
      default: "",
    }
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleSchemaErrors);

const User = model("user", userSchema);

module.exports = User;
