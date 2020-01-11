// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

const fs = require("fs");

var notes = require("../db/db.json");


module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
       return res.json(notes);
      });

    app.post("/api/notes", function(req,res){
        let newNote = req.body;
        console.log(newNote);
        notes.push(newNote);
        console.log(notes);
        addId();
        let save = JSON.stringify(notes);
        fs.writeFileSync("./db/db.json",save)

        res.redirect('back');
    });
    app.delete("/api/notes/:id", function (req,res) {
        console.log(req.params.id);
        notes.splice((req.params.id -1),1);
        fs.writeFileSync("./db/db.json",save);
        res.redirect('back');
    });

    function addId() {
        notes.forEach((element,i) => {
            element.id = i+1;
        });
    }


};