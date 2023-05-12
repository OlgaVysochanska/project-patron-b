const { Schema, model } = require("mongoose");
const Joi = require("joi");

const petSchema = new Schema({
  name: {
    type: String,
    required: [true, "Set name for pet"],
  },
  date: {
    type: String,
  },
  Breed: {
    type: String,
  },
  avatarURL: {
    type: String,
  },
  comments: {
    type: String,
  },
  //   owner: {
  //     type: Schema.Types.ObjectId,
  //     ref: "user",
  //     required: true,
  //   },
});

const addSchema = Joi.object({
  name: Joi.string().required(),
  date: Joi.string().required(),
});

const schemas = {
  addSchema,
};

const Pet = model("pet", petSchema);

module.exports = {
  Pet,
  schemas,
};
