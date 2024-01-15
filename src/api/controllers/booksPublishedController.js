// controllers/booksPublishedController.js
const connection = require('../db');

exports.getBooksPublished = (req, res) => {
  const query = 'SELECT * FROM books_published';

  connection.query(query, (err, results) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json(results);
    }
  });
};


exports.addBook = (req, res) => {
  // Logic to add a new PhD registration to the database
  const { bookTitle, author, publicationDate, publisher, remarks } = req.body;

  connection.query(
    'INSERT INTO books_published (bookTitle, author, publicationDate, publisher, remarks) VALUES (?, ?, ?, ?, ?)',
    [bookTitle, author, publicationDate, publisher, remarks],
    (err, result) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.json({ id: result.insertId, bookTitle, author, publicationDate, publisher, remarks });
      }
    }
  );
};

exports.updateBook = (req, res) => {
  // Logic to edit an existing PhD registration in the database
  const { id } = req.params;
  const { bookTitle, author, publicationDate, publisher, remarks } = req.body;

  connection.query(
    'UPDATE books_published SET bookTitle=?, author=?, publicationDate=?, publisher=?, remarks=? WHERE id=?',
    [bookTitle, author, publicationDate, publisher, remarks, id],
    (err, result) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.json({ id, bookTitle, author, publicationDate, publisher, remarks });
      }
    }
  );
};

exports.searchByTitle = (req, res) => {
  const { title } = req.params;
  const query = 'SELECT * FROM books_published WHERE bookTitle LIKE ?';
  const searchValue = `%${title}%`;

  console.log('SQL Query:', query);
  console.log('Parameters:', [searchValue]);

  connection.query(query, [searchValue], (err, results) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).send(err.message);
    } else {
      console.log('Search by Title Results:', results);
      res.json(results);
    }
  });
};

exports.searchByDate = (req, res) => {
  const { date } = req.params;
  const query = 'SELECT * FROM books_published WHERE publicationDate = ?';

  connection.query(query, [date], (err, results) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json(results);
    }
  });
};
