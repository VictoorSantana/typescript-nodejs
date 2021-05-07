



const Joi = require('@hapi/joi');

export const MovieSchema = Joi.object({
    title: Joi.string().max(80).required().messages({
        'string.base': 'campo "title" deve ser do tipo "texto".',
        'string.empty': 'campo "title" não pode ser vazio.',
        'string.min': 'campo "title" deve ter o tamanho minimo de {#limit}',
        'string.max': 'campo "title" deve ter o tamanho maximo de {#limit}',
        'any.required': 'campo "title" é obrigatorio ser preenchido.'
    }),
    description: Joi.string().max(200).messages({
        'string.base': 'campo "description" deve ser do tipo "texto".',
        'string.empty': 'campo "description" não pode ser vazio.',
        'string.min': 'campo "description" deve ter o tamanho minimo de {#limit}',
        'string.max': 'campo "description" deve ter o tamanho maximo de {#limit}',
        'any.required': 'campo "description" é obrigatorio ser preenchido.'
    }),
    stars: Joi.number().integer().max(5).messages({
        'number.base': 'campo "stars" deve ser do tipo "inteiro".',
        'number.empty': 'campo "stars" não pode ser vazio.',
        'number.min': 'campo "stars" deve ter o tamanho minimo de {#limit}',
        'number.max': 'campo "stars" deve ter o tamanho maximo de {#limit}',
        'any.required': 'campo "stars" é obrigatorio ser preenchido.'
    }),
    id_category: Joi.number().integer().max(9999).messages({
        'number.base': 'campo "id_category" deve ser do tipo "inteiro".',
        'number.empty': 'campo "id_category" não pode ser vazio.',
        'number.min': 'campo "id_category" deve ter o tamanho minimo de {#limit}',
        'number.max': 'campo "id_category" deve ter o tamanho maximo de {#limit}',
        'any.required': 'campo "id_category" é obrigatorio ser preenchido.'
    }),
    id_image: Joi.number().integer().max(9999).messages({
        'number.base': 'campo "id_image" deve ser do tipo "inteiro".',
        'number.empty': 'campo "id_image" não pode ser vazio.',
        'number.min': 'campo "id_image" deve ter o tamanho minimo de {#limit}',
        'number.max': 'campo "id_image" deve ter o tamanho maximo de {#limit}',
        'any.required': 'campo "id_image" é obrigatorio ser preenchido.'
    }),
    status: Joi.number().integer().max(5).messages({
        'number.base': 'campo "status" deve ser do tipo "inteiro".',
        'number.empty': 'campo "status" não pode ser vazio.',
        'number.min': 'campo "status" deve ter o tamanho minimo de {#limit}',
        'number.max': 'campo "status" deve ter o tamanho maximo de {#limit}',
        'any.required': 'campo "status" é obrigatorio ser preenchido.'
    }),
    running: Joi.date().required().messages({
        'date.base': 'campo "running" deve ser do tipo "data válida".',
        'date.empty': 'campo "running" não pode ser vazio.',
        'date.min': 'campo "running" deve ter o tamanho minimo de {#limit}',
        'date.max': 'campo "running" deve ter o tamanho maximo de {#limit}',
        'any.required': 'campo "running" é obrigatorio ser preenchido.'
    })
});
