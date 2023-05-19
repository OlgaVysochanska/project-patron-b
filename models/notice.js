const { Schema, model } = require("mongoose");
const Joi = require("joi");
const handleSchemaErrors = require("../middlewares/handleSchemaErrors");

const petsCategory = ["sell", "lost-found", "for-free"];

const validData = /^\d{2}.\d{2}.\d{4}$/;

const validSity = /^[a-zA-Z]+$/;

const noticeSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for pet"],
    },
    date: {
      type: String,
      match: validData,
      required: [true, "Set date format how 01-01-2000"],
    },
    breed: {
      type: String,
      required: [
        true,
        "Set breed any letters, minimum 2 characters, maximum 16",
      ],
    },
    location: {
      type: String,
      required: [
        true,
        "Set location format City. (example: Kiev, Lviv, Odessa",
      ],
    },
    petURL: {
      type: String,
      required: [true, "Set pet format URL"],
    },
    sex: {
      type: String,
      enum: ["male", "female"],
      required: [true, "Set sex format male or female"],
    },
    comments: {
      type: String,
      // required: [
      //   true,
      //   "Set coments any letters and symbol, minimum 8 characters, maximum 120",
      // ],
    },
    price: {
      type: String,
    },
    category: {
      type: String,
      enum: petsCategory,
      required: [true, "Set category"],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);
noticeSchema.post("save", handleSchemaErrors);

const addSchema = Joi.object({
  name: Joi.string().required(),
  date: Joi.string().pattern(validData).required(),
  category: Joi.string()
    .valid(...petsCategory)
    .required(),
  breed: Joi.string(),
  location: Joi.string().required().pattern(validSity),
  petURL: Joi.string(),
  sex: Joi.string().valid("male", "female"),
  comments: Joi.string(),
  price: Joi.string(),
  owner: Joi.string(),
});

const schemas = {
  addSchema,
};

const Notice = model("notice", noticeSchema);

module.exports = {
  Notice,
  schemas,
};
