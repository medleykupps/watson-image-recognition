var request = require('request');
var fs = require('fs');
var creds = require('./credentials.json');

var imageUrl = 'http://liveimages.bikesales.com.au/dlrportal/bike/dealer/bd4858897315022433232.jpg?width=400';

var serviceEndpoint = 'https://gateway-a.watsonplatform.net/visual-recognition/api/v3/classify?api_key=' + creds.credentials.api_key + '&version=2016-05-20&url=' + imageUrl;
console.log('Posting to ' + serviceEndpoint);

request.get(serviceEndpoint, function(err, resp, body) {
  if (err) throw err;
  console.log('it worked');
  console.log(body);
})
