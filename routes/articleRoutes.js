const express = require("express");

const {
  getArticles,
  getFullArticle,
  getAuthorDetails,
} = require("../controllers/articleControllers");

const router = express.Router();

//get all article list

router.get("/", getArticles);

//get one full article
router.get("/get/:id", getFullArticle);

//get author details
router.get("/author/:name", getAuthorDetails);

module.exports = router;
