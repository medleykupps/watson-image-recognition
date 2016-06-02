var watson = require('watson-developer-cloud');
var fs = require('fs');
var creds = require('./credentials.json');

var visual_recognition = watson.visual_recognition({
  username: '<username>',
  password: '<password>',
  version: 'v2-beta',
  version_date: '2015-12-02'
});

