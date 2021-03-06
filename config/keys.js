require('dotenv').config();

if (process.env.NODE_ENV === 'production') {
  // we are in production - return the prod set of keys
  module.exports = {
    TOKEN_SECRET: process.env.COOKIE_KEY,
    SQLCONNLIMIT: 10,
    SQLHOST: 'us-cdbr-iron-east-03.cleardb.net',
    SQLUSERNAME: 'bd526fad29745d',
    SQLPASSWORD: '2a827dc6',
    SQLSCHEMA: 'heroku_19125842a34b8b3'
  }
} else if (process.env.NODE_ENV == 'ci') {
  //we are in Travis CI - return those keys
  module.exports = {
    TOKEN_SECRET: 'eqwerepouin325y4',
    SQLCONNLIMIT: 10,
    SQLHOST: '127.0.0.1',
    SQLUSERNAME: 'root',
    SQLPASSWORD: '',
    SQLSCHEMA: 'recycling-project-nochain'
  }
} else {
  // we are in development - return the dev keys
  module.exports = {
    TOKEN_SECRET: 'sadfqwt547utrusdf',
    SQLCONNLIMIT: 10,
    SQLHOST: 'localhost',
    SQLUSERNAME: 'recycling',
    SQLPASSWORD: 'password',
    SQLSCHEMA: 'recycling-project-nochain'
  }
}