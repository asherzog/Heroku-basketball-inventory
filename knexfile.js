module.exports = {

  development: {
    client: 'pg',
    connection:  process.env.NODE_URL
  },
  production: {
    client: 'pg',
    connection:  process.env.NODE_URL + '?ssl=true'
  }
};
