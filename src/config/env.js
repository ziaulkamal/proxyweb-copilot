require('dotenv').config();

const HOST = process.env.HOST;
const ROOT_TARGET = process.env.ROOT_TARGET;

if (!HOST || !ROOT_TARGET) {
  throw new Error('Environment variables HOST and ROOT_TARGET must be defined in .env');
}

module.exports = { HOST, ROOT_TARGET };