const { Schema, model } = require("mongoose");
const Joi = require("joi");
const handleSchemaErrors = require("../middlewares/handleSchemaErrors");

const petsCategory = ["your pet"];

const validData = /^\d{2}.\d{2}.\d{4}$/;

const validSity = /^[a-zA-Z]+$/;

const petSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for pet"],
    },
    date: {
      type: String,
      match: validData,
      required: [true, "Set date format how 01.01.2000"],
    },
    category: {
      type: String,
      enum: petsCategory,
      required: [true, "Set category"],
    },
    breed: {
      type: String,
      required: [true, "Set breed"],
    },
    petURL: {
      type: String,
    },
    comments: {
      type: String,
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
  name: Joi.string().required().min(2).max(16),
  date: Joi.string().pattern(validData).required(),
  category: Joi.string()
    .valid(...petsCategory)
    .required(),
  breed: Joi.string().required().min(2).max(16),
  petURL: Joi.string().required().max(300000),
  comments: Joi.string().required().min(8).max(120),
});

const schemas = {
  addSchema,
};

const Pet = model("pet", petSchema);

module.exports = {
  Pet,
  schemas,
};
