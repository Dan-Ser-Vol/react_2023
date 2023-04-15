import Joi from 'joi'

const carValidator = Joi.object({
    brand: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.base': 'Brand повинен бути вказаний буквами!',
        'string.pattern.base': 'Brand має містити тільки літери мін кількість 1, мах 20!',
        'string.empty': 'Поле Brand обов\'язкове для заповнення!',
        'string.required': 'Поле Brand обов\'язкове для заповнення!',
        'any.required': 'Поле Brand обов\'язкове для заповнення!'
    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        'number.base': 'Price повинен бути числом!',
        'number.min': 'Мінімальна ціна 0!',
        'number.max': 'Максимальна ціна 1000000!',
        'number.empty': 'Поле Price обов\'язкове для заповнення!',
        'number.required': 'Поле Price обов\'язкове для заповнення!',
        'any.required': 'Поле Price обов\'язкове для заповнення!'
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.base': 'Year повинен бути числом!',
        'number.min': 'Мінімальний рік 1990!',
        'number.max': 'Максимально тільки поточний рік!',
        'number.empty': 'Поле Year обов\'язкове для заповнення!',
        'number.required': 'Поле Year обов\'язкове для заповнення!',
        'any.required': 'Поле Year обов\'язкове для заповнення!'
    })

})


export {carValidator}