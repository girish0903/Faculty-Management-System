const mysql = require('mysql');
const util = require('util');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydatabase',
});

const query = util.promisify(connection.query).bind(connection);

async function createTablesAndInsertData() {
  try {
    // Connect to MySQL
    await connection.connect();

    // Create tables
    await query(`
      CREATE TABLE IF NOT EXISTS phd_registration (
        id INT AUTO_INCREMENT PRIMARY KEY,
        studentName VARCHAR(50) NOT NULL,
        researchTopic VARCHAR(255) NOT NULL,
        registrationDate DATE NOT NULL
      )
    `);

    await query(`
      CREATE TABLE IF NOT EXISTS research_students (
        id INT AUTO_INCREMENT PRIMARY KEY,
        studentName VARCHAR(50) NOT NULL,
        researchTopic VARCHAR(255) NOT NULL,
        startDate DATE NOT NULL
      )
    `);

    await query(`
      CREATE TABLE IF NOT EXISTS books_published (
        id INT AUTO_INCREMENT PRIMARY KEY,
        bookTitle VARCHAR(100) NOT NULL,
        author VARCHAR(50) NOT NULL,
        publicationDate DATE NOT NULL,
        publisher VARCHAR(50),
        remarks VARCHAR(255)
      )
    `);

    // Insert sample data
    await query('INSERT INTO phd_registration (studentName, researchTopic, registrationDate) VALUES (?, ?, ?)', [
      'John Doe',
      'PhD in Computer Science',
      '2022-01-01',
    ]);

    await query('INSERT INTO research_students (studentName, researchTopic, startDate) VALUES (?, ?, ?)', [
      'Jane Doe',
      'Machine Learning Research',
      '2022-02-01',
    ]);

    await query('INSERT INTO books_published (bookTitle, author, publicationDate, publisher, remarks) VALUES (?, ?, ?, ?, ?)', [
      'Angular in Action',
      'John Smith',
      '2022-03-01',
      'O\'Reilly',
      'Great book for learning Angular',
    ]);

    console.log('Tables created and sample data inserted successfully.');
  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    // Close the MySQL connection
    connection.end();
  }
}

// Call the function to create tables and insert sample data
createTablesAndInsertData();
