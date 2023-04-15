import Joi from 'joi';

const userValidator = Joi.object({
    name: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.base': 'name повинен бути вказаний буквами!',
        'string.pattern.base': 'name має містити тільки літери мін кількість 1, мах 20!',
        'string.empty': 'Поле name обов\'язкове для заповнення!',
        'string.required': 'Поле name обов\'язкове для заповнення!',
        'any.required': 'Поле name обов\'язкове для заповнення!'
    }),

    username: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇ]*$/).required().messages({
        'string.base': 'username повинен бути вказаний буквами!',
        'string.pattern.base': 'username має містити тільки літери мін кількість 1, мах 20!',
        'string.empty': 'Поле username обов\'язкове для заповнення!',
        'string.required': 'Поле username обов\'язкове для заповнення!',
        'any.required': 'Поле username обов\'язкове для заповнення!'
    }),
    email: Joi.string().email({tlds: {allow: false}}).required().messages({
        'string.base': 'Поле email повинно бути рядком!',
        'string.email': 'Некоректний формат email адреси!',
        'string.empty': 'Поле email обов\'язкове для заповнення!',
        'any.required': 'Поле email обов\'язкове для заповнення!'
    }),

    phone: Joi.number().required().messages({
        'number.base': 'Номер телефону повинен містити тільки цифри!',
        'number.empty': 'Поле номеру телефону обов\'язкове для заповнення!',
        'number.required': 'Поле номеру телефону обов\'язкове для заповнення!',
        'any.required': 'Поле номеру телефону обов\'язкове для заповнення!'
    }),
    website: Joi.string().required().messages({
        'string.base': 'Адреса веб-сайту повинна бути вказана коректно!',
        'string.empty': 'Поле адреси веб-сайту обов\'язкове для заповнення!',
        'string.required': 'Поле адреси веб-сайту обов\'язкове для заповнення!',
        'any.required': 'Поле адреси веб-сайту обов\'язкове для заповнення!'
    }),
})

export {
    userValidator
}


