const { Schema, model } = require("mongoose");
const Joi = require("joi");
const handleSchemaErrors = require("../middlewares/handleSchemaErrors");

const petsCategory = ["sell", "my pet", "lost-found", "for-free"];

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
      required: [true, "Set date format how 01-01-2000"],
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
    avatarUrl: {
      type: String,
    },

    sex: {
      type: String,
    },
    location: {
      type: String,
    },
    price: {
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
  avatarUrl: Joi.string().required().max(300000),
  sex: Joi.string().required().valid("male", "female"),
  location: Joi.string().required().pattern(validSity),
  price: Joi.number().min(1),
  comments: Joi.string().required().alphanum().min(8).max(120),
});

// category	обовʼязково обране 1 з 3 категорій (my pet, sell, lost-found, for-free)
// name	обовʼязкове, будь-які літери, мінімум 2 символи, максимум 16
// date	обовʼязкове, дата в форматі 22.10.2022
// breed	обовʼязкове, будь-які літери, мінімум 2 символи, максимум 16
// file	обовʼязковий, обʼємом до 3Мб
// sex	обовʼязкове для sell, lost-found, for-free, обирається 1 тип з 2х (male, female)
// location	обовʼязкове для sell, lost-found, for-free. Строка в форматі Місто. Наприклад: Brovary, Kyiv, Akhtyrka, Sumy
// price	число більш 0, обовʼязкове для sell
// comments	опціональне, будь-які літери та символи. мінімум 8 символи, максимум 120

const schemas = {
  addSchema,
};

const Pet = model("pet", petSchema);

module.exports = {
  Pet,
  schemas,
};
