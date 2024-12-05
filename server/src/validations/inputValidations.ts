import joi from 'joi'

const registerInputValidate = joi.object({
    email: joi.string().email().required(),
    username : joi.string().max(30).min(3).required(),
    password: joi.string().min(8).required()
})

export {registerInputValidate}