'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/exam-dev'
  },

  sql: {
    maxLimit: 100,
    host: '43.255.154.28',
    user : 'alpha101',
    password: 'ciitdc#123',
    database: 'Sharma_Infotech'
  },

  log: {
    logLevel : 'info' 
  },
  seedDB: false
};
