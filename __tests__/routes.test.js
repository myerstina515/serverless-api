'use strict';


let urlGET = 'https://sz8evusnlf.execute-api.us-west-2.amazonaws.com/dogs/';
let urlCREATE = 'https://sz8evusnlf.execute-api.us-west-2.amazonaws.com/dogs';
let id = 'ec8e07f7-8581-48fd-bba3-69b3e66211e6';
let idDelete = 'a5a2751a-6699-416a-88d3-d19331e2dc88';
let urlUPDATE = `https://sz8evusnlf.execute-api.us-west-2.amazonaws.com/dogs/${id}`;
let urlDELETE = `https://sz8evusnlf.execute-api.us-west-2.amazonaws.com/dogs/${idDelete}`;
const { it, expect } = require('@jest/globals');
const request = require('superagent');
describe('endpoint', () => {
  it('GET', async () => {
    const response = await request.get(urlGET);
    expect(response.status).toBe(200);
    expect(typeof response.body).toEqual('object');
  });
  it('CREATE', async () => {
    const response = await request.post(urlCREATE).send({
        "breed": "Dalmation",
        "color": ["black", "white", "spotted"],
        "age": 3,
        "sheds": false
        });
    expect(response.status).toBe(200);
    expect(typeof response.body).toEqual('object');
  });
  it('UPDATE', async() => {
      const response = await request.put(urlUPDATE).send({
          "breed": "Corgi",
          "color": "tan",
          "age": 3,
          "sheds": true
      })
    expect(response.status).toBe(200);
    expect(typeof response.body).toEqual('object');
  });
  it('DELETE', async() => {
    const response = await request.delete(urlDELETE);
    expect(response.status).toBe(200);
    expect(typeof response.body).toEqual('object');
  });
});


