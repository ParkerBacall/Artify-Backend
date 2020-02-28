const count = 50
const xappToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI1ZTU4NDFmOGViOWE2ODAwMTIwODJhZjQiLCJleHAiOjE1ODM0NDk2NzQsImlhdCI6MTU4Mjg0NDg3NCwiYXVkIjoiNWU1ODQxZjhlYjlhNjgwMDEyMDgyYWY0IiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjVlNTg0YmNhY2E3N2E2MDAxMjdjM2MyMCJ9.Hup__6PY57_H_S9A6mkl4_11Ll60japGzKl9tG4wbfg';
const fetch = require('node-fetch')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('gene').del()
    .then(function () {
      // Inserts seed entries

fetch(`https://api.artsy.net/api/genes?size=${count}`,{
  method: 'GET',
  headers: {
    'X-Xapp-Token': xappToken,
    'Accept': 'application/vnd.artsy-v2+json'
  }
})
.then(response => response.json())
      .then(art => art._embedded.genes.forEach(gene => {
        return knex('gene').insert([
          {name: gene.name, image: gene._links.thumbnail.href},
    ])
  })) 
})
}