import Joi from '@hapi/joi';

const byId = {
  params: {
    id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
  }
}

const subTagsSchema = {
  id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
  name: Joi.string().required(),
}

const tagsSchema = {
  id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
  language: Joi.string().required(),
  tags: Joi.array().items(Joi.object(subTagsSchema))
}

const create = {
  payload: {
    title: Joi.string().required(),
    description: Joi.string().required(),
    snippet: Joi.string().required(),
    tags: Joi.array().items(Joi.object(tagsSchema))
  }
}

const update = {
  params: {
    id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
  },
  payload: {
    title: Joi.string().required(),
    description: Joi.string().required(),
    snippet: Joi.string().required(),
    tags: Joi.array().items(Joi.object(tagsSchema))
  }
}

const destroy = {
  params: {
    id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
  }
}

export default {
  byId,
  create,
  update,
  destroy
}