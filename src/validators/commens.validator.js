import Joi from 'joi';

const commentsValidator = Joi.object({
    name: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.base': 'name повинен бути вказаний буквами!',
        'string.pattern.base': 'name має містити тільки літери мін кількість 1, мах 20!',
        'string.empty': 'Поле name обов\'язкове для заповнення!',
        'string.required': 'Поле name обов\'язкове для заповнення!',
        'any.required': 'Поле name обов\'язкове для заповнення!'
    }),

    email: Joi.string().email({tlds: {allow: false}}).required().messages({
        'string.base': 'Поле email повинно бути рядком!',
        'string.email': 'Некоректний формат email адреси!',
        'string.empty': 'Поле email обов\'язкове для заповнення!',
        'any.required': 'Поле email обов\'язкове для заповнення!'
    }),

    body: Joi.string().required().messages({
        'string.empty': 'Поле body обов\'язкове для заповнення!',
    }),
})

export {
    commentsValidator
}


