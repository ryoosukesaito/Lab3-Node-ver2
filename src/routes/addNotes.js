const express = require("express");
const router = express.Router();
const fs = require("fs");

// const notes = [];

router.get("/leave-notes", (req, res, next) => {
  res.render("leave-notes", {
    url: "/leave-notes",
  });
});

router.post("/notes", (req, res, next) => {
  const notes = req.body.notes + `\n`;

  fs.appendFile("text.txt", notes, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });

  // notes.push({ Note: req.body.notes});
  res.redirect("/home");
});

module.exports = router;
