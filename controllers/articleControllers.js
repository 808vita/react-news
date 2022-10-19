const _ = require("lodash");
const { content, contentAuthor } = require("../data");

const getArticles = async (req, res) => {
  // send back list of articles
  // only id,img, title & author
  // _.omit(item, ["content"]);
  const articles = content.map((o) => _.omit(o, ["content"]));
  res.status(200).json(articles);
};

const getFullArticle = async (req, res) => {
  //send back one full article record

  const { id } = req.params;

  const checkArticleId = _.find(content, { id });
  // check if the current article id exists

  if (!checkArticleId) {
    res.status(404).json({ error: "no such record" });
    return;
  }

  res.status(200).json(checkArticleId);
};

const getAuthorDetails = async (req, res) => {
  //send back one author details

  const { name } = req.params;
  const checkAuthorId = contentAuthor[name];

  if (!checkAuthorId) {
    res.status(404).json({ error: "no such record" });
    return;
  }

  res.status(200).json(checkAuthorId);
};

module.exports = {
  getArticles,
  getFullArticle,
  getAuthorDetails,
};
