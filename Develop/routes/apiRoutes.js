// LOAD DATA
// We are linking our routes to a series of data sources.
const fs = require("fs");

var notes = require("../db/db.json");


module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
       return res.json(notesInfo);
      });

    app.post("/api/notes", function(req,res){
        let newNote = req.body;
        console.log(newNote);
        notes.push(newNote);
        console.log(notesInfo);
        addId();
        let save = JSON.stringify(notesInfo);
        fs.writeFileSync("./db/db.json",save)

        res.redirect('back');
    });
    app.delete("/api/notes/:id", function (req,res) {
        console.log(req.params.id);
        notesInfo.splice((req.params.id -1),1);
        fs.writeFileSync("./db/db.json",save);
        res.redirect('back');
    });

    function addId() {
        notesInfo.forEach((element,i) => {
            element.id = i+1;
        });
    }


};