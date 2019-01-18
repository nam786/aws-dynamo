var AWSHelper = require ('../helpers/awshelp');


function createItem() {
return new Promise(function(resolve, reject) {
   
   var dbClient = AWSHelper.getDynamoDB(),
       params = { 
           Item: {
              date: Date.now(),
              message: "hello how are you"
           },
           TableName: process.env.TABLE_NAME
         };
   dbClient.put(params, function(err, data) {
       if(err) {
           callback(err, null);
       } else {
           callback(null, data);
       }
   })
});
 

}