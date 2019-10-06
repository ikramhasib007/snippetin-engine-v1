'use strict';

import Hapi from '@hapi/hapi';

const init = async () => {
  const server = Hapi.Server({
    port: process.env.PORT,
    host: process.env.HOST
  });

  server.ext('onRequest', (request, h) => {
    request.setUrl = '/test';
    h.continue;
  })

  await server.start();
  console.log(`Server running on %s`, server.info.uri);
}

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();