var SpotifyWebApi = require('spotify-web-api-node');
const express = require('express');
const app = express();


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


var clientId = '2a81858d80f649b89b616b9d5290cd4f',
    clientSecret = '2bde582d663d43a0b962a36e7542a1ad';

var spotifyApi = new SpotifyWebApi({
  clientId : clientId,
  clientSecret : clientSecret
});

spotifyApi.clientCredentialsGrant()
  .then(function(data) {
    spotifyApi.setAccessToken(data.body['access_token']);
  }, function(err) {
    console.log('Something went wrong when retrieving an access token', err);
});

app.get('/', (req, res, next) => {
    let a = spotifyApi.searchArtists;
  
    res.render('index', {name:a});
  });



  app.listen(3000, () => {
    console.log('My first app listening on port 3000!');
  });
  
