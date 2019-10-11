'use strict';

import Mongoose from 'mongoose'; // ODM

import { MongodbConfig } from '../../config';

const ConnectToDatabase = () => {
  Mongoose.connect(MongodbConfig.databaseConnection.uri(), {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // auth: MongodbConfig.auth
  });

  const db = Mongoose.connection;
  db.on('error', console.error.bind(console, 'Connection Error!'));
  db.once('open', () => {
    console.log(`YEAH! Connected to Database @ ${MongodbConfig.databaseConnection.uri()}`)
  })
}

export default ConnectToDatabase;