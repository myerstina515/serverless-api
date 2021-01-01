'use strict';

const dogModel = require('./dog.schema');

exports.handler = async (event) => {
  const id = event.pathParameters.id;
  console.log('__id__', id);
  
  try{

    let data;
    // check to see if there is an id
    // if there is
    // query the DB to find the record with the id and return it
    if(id){
      const list = await dogModel.query('id').eq(id).limit(1).exec();
      data = list;
    } else {
    // if there isn't, 
    // return all the records
      data = await dogModel.scan().exec();
    }
    return  {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (e) {
    return {
      statusCode: 500,
      response: JSON.stringify(e)
    }
  }
};