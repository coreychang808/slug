'use strict';

const express = require('express');
const slugRouter = express.Router();
const uuid = require ('uuid/v1');

let slugs = [
  {text: '10', name: 'Kali', id:uuid()},
  {text: '20', name: 'Khal Basil', id:uuid()},
  {text: '30', name: 'Ginger', id:uuid()},
  {text: '40', name: 'Snowdrop', id:uuid()},
];

slugRouter.get('/slugs', (request, response) => {
  response.send(slugs);
});

slugRouter.patch('/slugs/:id', (request, response) => {
  slugs.forEach(slug => {
    if( slug.id === request.params.id){
      Object.keys(slug).forEach(item => {
        slug[item] = request.body[item]
      })
    }
  })

  response.status(200).json(slugs);
});


module.exports = slugRouter;