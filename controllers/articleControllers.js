const getArticles = async (req, res) => {
  // send back list of articles
  // only img, title with maybe shortend content & author
};

const getFullArticle = async (req, res) => {
  //send back one full article record

  const { id } = req.params;

  // if (check if the current article id exists ) {
  // 	 res.status(404).json({ error: "no such record" });
  //   return
  // }

  res.status(200).json(bid);
};

const getAuthorDetails = async (req, res) => {
  //send back one author details

  const { name } = req.params;

  // if (check if the current author name exists ) {
  // 	 res.status(404).json({ error: "no such record" });
  //   return
  // }

  res.status(200).json(bid);
};

module.exports = {
  getArticles,
  getFullArticle,
  getAuthorDetails,
};
