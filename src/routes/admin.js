const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.redirect("/input");
});

router.get("/input", (req, res, next) => {
  res.send(`
      <body>
        <div style = "display: flex; justify-content : center; align-items: center; margin: 3rem; flex-direction: column;">
        <h3 style = "display: flex; margin: 3rem ">Enter Your Name</h3>
          <form action="/login" method="POST">
              <input type="text" name="name" placeholder="Username" required>
              <button type="submit">Enter</button>
          </form>
        </div>
      <body>
    `);
});

router.post("/login", (req, res, next) => {
  const { name } = req.body;
  console.log("username: " + `${name}`);

  res.render("home", {
    url: "/home",
    username: `${name}`
  });
});

router.get("/home", (req, res, next) => {

  res.render("home", {
    url: "/home",
    username: "user"
  });
});

module.exports = router;
