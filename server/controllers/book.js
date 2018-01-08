const google = require('googleapis');

const books = google.books('v1');

exports.getBook = (req, res) => {
  console.log('getBook');
  const query = {
    q: req.params.q
  };
  console.log(query.q);

  books.volumes.list(query, (_, result) => {
    res.json(result);
  });
};
