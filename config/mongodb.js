'use strict';

export default {
  databaseConnection: {
    protocol: 'mongodb',
    hostname: process.env.MONGODB_HOSTNAME || 'localhost',
    port: process.env.MONGODB_PORT || 27017,
    database: process.env.MONGODB_DATABASE || 'SnippetIn',
    uri() {
      return this.protocol + '://' + this.hostname + ':' + this.port + '/' + this.database;
    }
  },
  auth: {
    authdb: process.env.MONGODB_AUTHDB || 'admin',
    user: process.env.MONGODB_USER || 'test',
    password: process.env.MONGODB_PASSWORD || '123456'
  }
}