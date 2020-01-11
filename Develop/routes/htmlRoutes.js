var path = require("path");

module.exports = function(app) {
    // HTML GET Requests
  
    app.get("/notes", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
    
    // If no route is found goes back home
    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/index.html"));
    });
  };