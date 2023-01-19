const express = require('express');
const router = express.Router();
const path = require('path');

const notesData = require('./addNotes');

router.get('/read-notes', (req, res, next) => {
  console.log(notesData.notes);
  // res.render(path.join(__dirname, "../views/read-notes.ejs"));
  res.render("read-notes", {
    Notes: notesData.notes,
    url: "/read-notes"
  });
})

module.exports = router;