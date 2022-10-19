const express = require("express");

const app = express();

app.use(express.json());
const port = 4000;

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api", (req, res) => res.status(200).json({ oof: "oof" }));

// data routes - required
//get list of articles _> public
// get detailed article _> requires protection

// handle for 404

app.listen(port, () => {
  console.log(` connected to db & Listening on port ${port}`);
});
