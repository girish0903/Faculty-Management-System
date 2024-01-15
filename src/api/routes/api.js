const express = require('express');
const router = express.Router();

const phdRegistrationController = require('../controllers/phdRegistrationController');
const researchStudentsController = require('../controllers/researchStudentsController');
const booksPublishedController = require('../controllers/booksPublishedController');

router.get('/phd-registration', phdRegistrationController.getPhdRegistrations);
router.post('/phd-registration', phdRegistrationController.addPhdRegistration);
router.get('/research-students', researchStudentsController.getResearchStudents);
router.post('/research-students', researchStudentsController.addResearchStudents);
router.put('/research-students/:id',researchStudentsController.updateResearchStudents);
router.get('/books-published', booksPublishedController.getBooksPublished);
router.post('/books-published',booksPublishedController.addBook);
router.put('/books-published/:id',booksPublishedController.updateBook);
router.get('/phd-registration/search-by-name/:name', phdRegistrationController.searchByName);
router.get('/phd-registration/search-by-date/:date', phdRegistrationController.searchByDate);
router.get('/books-published/search/title/:title',booksPublishedController.searchByTitle);
router.get('/books-published/search/date/:date', booksPublishedController.searchByDate);
router.get('/research-students/search-by-name/:name', researchStudentsController.searchByName);
router.get('/research-students/search-by-date/:date', researchStudentsController.searchByDate);
router.put('/phd-registration/:id',phdRegistrationController.updatePhdRegistration);
module.exports = router;
