const express = require('express');
const router = express.Router();
const path = require('path');

const notes = [];


router.get('/leave-notes', (req, res, next) => {
  res.render("leave-notes", {
    url: "/leave-notes",
  })
});

router.post('/notes', (req, res, next) => {
  notes.push({ Note: req.body.notes});
  res.redirect("/home");
});


// router.get('/home', (req, res, next) => {
//   // res.sendFile(path.join(rootDir, 'views', 'home.html'));
//   res.render("home");
// });

module.exports = router;
exports.notes = notes;