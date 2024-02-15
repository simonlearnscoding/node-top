const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("users");
});

router.get("/new", (req, res) => {
  res.send("new");
});

router.post("/", (req, res) => {
  res.send("create");
});

router.get("/:id", (req, res) => {
  res.send(`${req.params.id} details`);
});

const userRouter = require("./users");
module.exports = router;
