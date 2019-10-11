import controller from './controller';
import validator from './validator';

module.exports = [
  {
    method: 'GET',
    path: '/snippets',
    config: {
      tags: ['api'],
      description: 'GET all snippets',
      handler: controller.all
    }
  },
  {
    method: 'GET',
    path: '/snippets/{id}',
    config: {
      tags: ['api'],
      description: 'GET snippet by id',
      handler: controller.byId,
      validate: validator.byId
    }
  }
]