const express = require("express");
const path = require("path");
// const bodyParser = require("body-parser");
const app = express();

//Import Routers
const adminRoutes = require("./routes/admin");
const addNotesRoutes = require("./routes/addNotes");
const readNotesRoutes = require("./routes/readNotes");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));



//install ejs
app.set("view engine", "ejs");
app.set("views", "src/views");

// Routes for other pages
app.use(adminRoutes);
app.use(addNotesRoutes);
app.use(readNotesRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not Found</h1>");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
