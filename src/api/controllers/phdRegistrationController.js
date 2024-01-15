// controllers/phdRegistrationController.js
const connection = require('../db'); // Assuming you have a MySQL connection
exports.getPhdRegistrations = (req, res) => {
  // Logic to fetch PhD registrations from the database
  connection.query('SELECT * FROM phd_registration', (err, registrations) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json(registrations);
    }
  });
};

exports.addPhdRegistration = (req, res) => {
  // Logic to add a new PhD registration to the database
  const { studentName, researchTopic, registrationDate } = req.body;

  connection.query(
    'INSERT INTO phd_registration (studentName, researchTopic, registrationDate) VALUES (?, ?, ?)',
    [studentName, researchTopic, registrationDate],
    (err, result) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.json({ id: result.insertId, studentName, researchTopic, registrationDate });
      }
    }
  );
};

exports.updatePhdRegistration = (req, res) => {
  // Logic to edit an existing PhD registration in the database
  const { id } = req.params;
  const { studentName, researchTopic, registrationDate } = req.body;

  connection.query(
    'UPDATE phd_registration SET studentName=?, researchTopic=?, registrationDate=? WHERE id=?',
    [studentName, researchTopic, registrationDate, id],
    (err, result) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.json({ id, studentName, researchTopic, registrationDate });
      }
    }
  );
};

exports.searchByName = (req, res) => {
  const { name } = req.params;
  const query = 'SELECT * FROM phd_registration WHERE studentName LIKE ?';
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
  const query = 'SELECT * FROM phd_registration WHERE registrationDate = ?';

  connection.query(query, [date], (err, results) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json(results);
    }
  });
};
