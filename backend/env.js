"use strict"

const fs = require('fs');
const paths = require('./paths');

//Making sure that including paths.js after env.js will read .env variables
delete require.cache[require.resolve('./paths')];

const NODE_ENV = process.env.NODE_ENV || 'development';

const dotenvFiles = [
  `${paths.dotenv}.${NODE_ENV}.local`,
  `${paths.dotenv}.${NODE_ENV}`,
  NODE_ENV !== 'test' && `${paths.dotenv}`,
  NODE_ENV !== 'test' && `${paths.dotenv}.local`,
  paths.dotenv
].filter(Boolean)