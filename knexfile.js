require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection:  process.env.DEVELOPMENT_NODE_URL
  },
  production: {
    client: 'pg',
    connection:  process.env.NODE_URL + '?ssl=true'
  }
};
