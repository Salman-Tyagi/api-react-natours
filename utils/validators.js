import { Joi, celebrate } from 'celebrate';

export const signupValidation = celebrate({
  body: Joi.object({
    name: Joi.string()
      .required()
      .trim()
      .min(2)
      .pattern(new RegExp('^[A-Za-z]+( [A-Za-z]+)?$'))
      .max(30)
      .messages({
        'string.pattern.base': 'Only alphabets are allowed',
      }),

    email: Joi.string().email().required(),
    password: Joi.string().required().min(8).max(30),
    passwordConfirm: Joi.any().valid(Joi.ref('password')).required().messages({
      'any.only': 'Password and password confirm mismatch',
    }),
  }),
});

export const loginValidattion = celebrate({
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required().min(8).max(30),
  }),
});
