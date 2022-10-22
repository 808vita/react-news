require("dotenv").config();
const express = require("express");
const articleRoutes = require("./routes/articleRoutes");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 4000;

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// app.use("/api", (req, res) => res.status(200).json({ oof: "oof" }));

app.use("/api/article", articleRoutes);

// ----------------------------------------------
const __dirname1 = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/build")));

  app.get("*", (req, res) =>
    // res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
    res.sendFile(path.join(__dirname1, "/build/index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}
// ----------------------------------------------
//oof 808vita
app.listen(port, () => {
  console.log(` connected to db & Listening on port ${port}`);
});
