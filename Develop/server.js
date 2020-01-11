var express = require("express");
//We are creating an "express" server
var app = express();

// Sets an initial port
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

// These routes give our server a "map" of how to respond when users visit or request data from various URLs.


require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);



// The below code starts our server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});