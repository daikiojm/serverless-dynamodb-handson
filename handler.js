'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  const params = {
    TableName: 'usersTable',
    Item: {
      email: 'daiking.ca2@gmail.com'
    }
  };

  dynamoDb.put(params, (error, result) => {
    if (error) {
      console.log(error);
      callback(new Error('Couldn\'t create the shareImage item.'));
      return;
    }
    console.log('ok!!!!!!!!!');
    callback(null, response);
  })



  // callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
