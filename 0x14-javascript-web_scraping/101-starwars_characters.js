#!/usr/bin/node
const request = require('request');
const options = {
  url: 'https://swapi-api.hbtn.io/api/films/' + process.argv[2],
  method: 'GET'
};

function getNameCharacter (url) {
  return new Promise((resolve, reject) => {
    request(url, function (err, res, body) {
      if (err) {
        // pass;
      }
      const json = JSON.parse(body);
      resolve(json.name);
    });
  });
}

request(options, function (err, res, body) {
  const json = JSON.parse(body);
  async function getCharacters () {
    for (const character of json.characters) {
      const name = await getNameCharacter(character);
      console.log(name);
    }
  }
  getCharacters();
  if (err) {
    // pass;
  }
});
