// LOAD DATA
// We are linking our routes to a series of data sources.
const fs = require("fs");

var notesInfo = require("../db/db.json");

//ROUTING
module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
       return res.json(notesInfo);
      });

    app.post("/api/notes", function(req,res){
        let newNote = req.body;
        notesInfo.push(newNote);
        addId();
        let save = JSON.stringify(notesInfo);
        fs.writeFileSync("./db/db.json",save)

        res.redirect('back');
    });
    app.delete("/api/notes/:id", function (req,res) {
        const deleted = notesInfo.findIndex((i) => i.id == req.params.id);
        notesInfo.splice(deleted, 1);
        reWrite();
        res.json(notesInfo);
    });

    function addId() {
        notesInfo.forEach((element, i) => {
            element.id = i + 1;
        });
    }
    let reWrite = () => {
        let newDB = JSON.stringify(notesInfo);
        fs.writeFile('db/db.json', newDB, err => { if (err) throw err });
    }


};