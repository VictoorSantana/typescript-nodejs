
const Joi = require('@hapi/joi');

export const ImageSchema =  Joi.object({
    hash: Joi.string().max(50).messages({
        'string.base': 'campo "hash" deve ser do tipo "texto".',
        'string.empty': 'campo "hash" não pode ser vazio.',
        'string.min': 'campo "hash" deve ter o tamanho minimo de {#limit}',
        'string.max': 'campo "hash" deve ter o tamanho maximo de {#limit}',
        'any.required': 'campo "hash" é obrigatorio ser preenchido.'
    }),
    type: Joi.string().max(3).messages({
        'string.base': 'campo "type" deve ser do tipo "texto".',
        'string.empty': 'campo "type" não pode ser vazio.',
        'string.min': 'campo "type" deve ter o tamanho minimo de {#limit}',
        'string.max': 'campo "type" deve ter o tamanho maximo de {#limit}',
        'any.required': 'campo "type" é obrigatorio ser preenchido.'
    })
});
