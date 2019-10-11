'use strict';

import Hapi from '@hapi/hapi';
import Plugin from '../plugin';
import HapiRouter from 'hapi-router';
import Qs from 'qs';

import { HttpServerConfig } from '../../config';


// bring your own validation function
const validate = async function (decoded, request) {
  console.info('decoded-------->', decoded);
 // do your checks to see if the person is valid
//  if (!decoded.id || !decoded.phone) {
//    const customer = await customer.findOne({ _id: decoded.id, phone: decoded.phone });
//    if (customer) {
//      return { isValid: true };
//    }
//  }
 return { isValid: true };
};

// Configure server
const server = Hapi.Server({
  host: HttpServerConfig.hostname,
  port: HttpServerConfig.port,
  query: {
    parser: query => Qs.parse(query)
  },
  routes: {
    'cors': {
      origin: ['*'],
      headers: ['Accept', 'Content-Type'],
      additionalHeaders: ['X-Requested-With', 'X-Auth-Token']
    }
  }
});

const StartServer = async () => {
  try {
    await server.register(Plugin);
    await server.auth.strategy('jwt', 'jwt', {
      key: 'jlshl^&I^*GVu%$#@(jb*7HFJk32jshdHGFFG32', // Never share your secret key
      validate: validate, // Validate function defined above.
      verifyOptions: { algorithms: [ 'HS256' ] } // Pick a strong Algorithm
    });
    // await server.auth.default('jwt');
    await server.register({
      plugin: HapiRouter,
      routes: {
        prefix: '/api/v1'
      },
      options: {
        routes: './src/api/**/routes.js'
      }
    })
  } catch (error) {
    // error statements
    console.log('ERR: Server Plugin - ', error);
  }

  await server.start();
  console.log(`Server started on port: ${server.info.uri}`);
}

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

export default StartServer;