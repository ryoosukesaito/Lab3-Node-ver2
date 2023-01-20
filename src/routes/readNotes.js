const express = require("express");
const router = express.Router();
const fs = require("fs");

// const notesData = require('./addNotes');

router.get("/read-notes", (req, res, next) => {
  
  fs.readFile("text.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    let notesData = [data];
    // notesData.push(data);
    console.log(`${notesData}`);
    res.render("read-notes", {
      Notes: notesData,
      url: "/read-notes",
    });
  });
});


module.exports = router;
