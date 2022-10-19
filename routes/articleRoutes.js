const express = require("express");

const router = express.Router();

//get all article list

router.get("/", getArticles);

//get one full article
router.get("/:id", getFullArticle);

//get author details
router.get("/:name", getAuthorDetails);

module.exports = router;
