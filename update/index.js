'use strict';
const dogModel = require('./dog.schema');

exports.handler = async (event) => {
  // const { breed, color, age, sheds } = JSON.parse(event.body);
  const id = event.pathParameters.id
  try {
    let data;
    if(id){
      console.log('this is the event body', event.body)
      const object = JSON.parse(event.body);
      data = await dogModel.update({id}, object);
  }
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }

  } catch (e) {
    return {
      statusCode: 500,
      response: JSON.stringify(e.message)
    }
  }
};
