'use strict';

import Vision from '@hapi/vision'; // for templating engine
import Inert from '@hapi/inert'; // for serving static files & directories
import HapiSwagger from 'hapi-swagger'; // for API documentation
import JWT from 'hapi-auth-jwt2';
import Pack from './../package';

const swaggerOptions = {
  info: {
    title: 'Snippetin API Documentation',
    version: Pack.version
  }
}

module.exports = [
  {
    plugin: Inert
  },
  {
    plugin: JWT
  },
  {
    plugin: Vision
  },
  {
    plugin: HapiSwagger,
    options: swaggerOptions
  }
]