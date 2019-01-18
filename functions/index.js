var dbHelper = require ('../dao/dbhelper');

exports.handler = async (event) => {
    if(event.httpMethod === 'GET') {
        return getItem(event);
    }
    if(event.httpMethod === 'POST') {
        return createCart(event);
    }
    if(event.httpMethod === 'PUT') {
        console.log("inside index file");
        return dbHelper.createItem();
    }
};


const getItem = event => {
    let item ={
      description: 'a green shirt',
      color: 'red',
      size: 'M',
      prize: 22
    };
    return {
        statusCode: 200,
        body: JSON.stringify(item)
    };
};

const createCart = event => {
    let body = JSON.parse(event.body);
    console.log("this was a cart" + body);
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'This was created'
        })
    };
}