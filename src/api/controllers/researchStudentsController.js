// controllers/researchStudentsController.js
const connection = require('../db');

exports.getResearchStudents = (req, res) => {
  const query = 'SELECT * FROM research_students';

  connection.query(query, (err, results) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json(results);
    }
  });
};

exports.addResearchStudents = (req, res) => {
  // Logic to add a new Research Student to the database
  const { studentName, researchTopic, startDate } = req.body;

  connection.query(
    'INSERT INTO research_students (studentName, researchTopic, startDate) VALUES (?, ?, ?)',
    [studentName, researchTopic, startDate],
    (err, result) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.json({ id: result.insertId, studentName, researchTopic, startDate });
      }
    }
  );
};

exports.updateResearchStudents = (req, res) => {
  const { id } = req.params;
  const { studentName, researchTopic, startDate } = req.body;

  connection.query(
    'UPDATE research_students SET studentName=?, researchTopic=?, startDate=? WHERE id=?',
    [studentName, researchTopic, startDate, id],
    (err, result) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.json({ id, studentName, researchTopic, startDate });
      }
    }
  );
};


exports.searchByName = (req, res) => {
  const { name } = req.params;
  const query = 'SELECT * FROM research_students WHERE studentName LIKE ?';
  const searchValue = `%${name}%`;

  connection.query(query, [searchValue], (err, results) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json(results);
    }
  });
};

exports.searchByDate = (req, res) => {
  const { date } = req.params;
  const query = 'SELECT * FROM research_students WHERE startDate = ?';

  connection.query(query, [date], (err, results) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json(results);
    }
  });
};


