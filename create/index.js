'use strict';
const uuid = require('uuid').v4;
const dogModel = require('./dog.schema');

exports.handler = async (event) => {
  const {breed, color, age, sheds} = JSON.parse(event.body);

  const id = uuid();

  try {
    const record = new dogModel({ id, breed, color, age, sheds });
    const data = await record.save();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }

  } catch (e) {
    return {
      statusCode: 500,
      response: e.message
    }
  }

};