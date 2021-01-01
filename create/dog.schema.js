'use strict';

const dynamoose = require('dynamoose');

const dogSchema = new dynamoose.Schema({
  'id': String,
  'breed': String,
  'color': {
    'type': Array,
    'schema': [String]
  },
  'age': Number,
  'sheds': { type:Boolean, default: true}
});

module.exports = dynamoose.model('dog', dogSchema);