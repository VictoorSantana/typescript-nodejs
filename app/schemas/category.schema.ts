



const Joi = require('@hapi/joi');

export const CategorySchema =  Joi.object({
    title: Joi.string().max(80).required().messages({
        'string.base': 'campo "title" deve ser do tipo "texto".',
        'string.empty': 'campo "title" não pode ser vazio.',
        'string.min': 'campo "title" deve ter o tamanho minimo de {#limit}',
        'string.max': 'campo "title" deve ter o tamanho maximo de {#limit}',
        'any.required': 'campo "title" é obrigatorio ser preenchido.'
    })
});
