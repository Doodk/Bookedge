const google = require('googleapis');

const books = google.books('v1');

exports.getBook = (req, res) => {
  const query = {
    q: req.params.q
  };

  books.volumes.list(query, (_, result) => {
    res.json(result);
  });
};
