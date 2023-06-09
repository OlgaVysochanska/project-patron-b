// Повинен містити  мінімум 1 літеру верхнього регістру,
// 1 літеру нижнього регістру та 1 цифру

const Joi = require("joi");

const validPassword =
  /^(?=(?:[^A-Z]*[A-Z]){1,}[^A-Z]*$)(?=(?:[^a-z]*[a-z]){1,}[^a-z]*$)(?=(?:\D*\d){1,}\D*$)[A-Za-z\d]+/;

const userValidation = Joi.object({
  password: Joi.string()
    .required()
    .pattern(validPassword)
    .messages({
      "string.pattern.base":
        "The password must contain at least 1 uppercase letter, 1 lowercase letter and 1 number",
      "string.min": "Must have at least 6 characters",
      "string.max": "Must have at least 16 characters",
    })
    .min(6)
    .max(16),

  email: Joi.string().email().required(),
});

module.exports = userValidation;
