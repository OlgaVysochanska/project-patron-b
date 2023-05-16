const { Schema, model } = require("mongoose");
const Joi = require("joi");
const handleSchemaErrors = require("../middlewares/handleSchemaErrors");

const petsCategory = ["sell", "lost", "in good hands"];

const validData = /^\d{2}-\d{2}-\d{4}$/;

const petSchema = new Schema(
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
    Breed: {
      type: String,
    },
    location: {
      type: String,
    },
    avatarURL: {
      type: String,
    },
    sex: {
      type: String,
    },
    comments: {
      type: String,
    },
    price: {
      type: String,
    },
    favorite: {
      type: String,
      default: false,
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
  },
  { versionKey: false }
);
petSchema.post("save", handleSchemaErrors);

const addSchema = Joi.object({
  name: Joi.string().required(),
  date: Joi.string().pattern(validData).required(),
  category: Joi.string()
    .valid(...petsCategory)
    .required(),
});

const schemas = {
  addSchema,
};

const Pet = model("pet", petSchema);

module.exports = {
  Pet,
  schemas,
};
