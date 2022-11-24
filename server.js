//server.js

const app = require(".");

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
    console.log('Your app is listening on port ' + listener.address().port);
  });
  
