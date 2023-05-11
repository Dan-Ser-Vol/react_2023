import Joi from "joi";


const authValidator = Joi.object({
    username: Joi.string().regex(/^[a-zA-Z]\w{1,19}$/).messages({
        'string.pattern.base': 'Username must start with letter, and consist with letter, number or _. Length must be ' +
            'min 2 symbol, max 20'
    }).required(),
    password: Joi.string().messages({
        'string.pattern.base': 'Password must start with letter, and consist from one uppercase, one lowercase, one number, ' +
            'one alphanumeric Length must be min 8 symbol, max 20'
    }).required(),
})

export {authValidator}