var AWSXray = require('aws-xray-sdk-core'),
    AWS = AWSXray(require('aws-sdk'));
    AWS.config.update ({
        region: process.env.REGION
    })


getDynamoDB = function() {
    return new AWS.getDynamoDB.DocumentClient();
}   

module.export = {
    getDynamoDB: getDynamoDB
}