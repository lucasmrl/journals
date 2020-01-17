const express = require('express');
const journalController = require('./../controllers/journalController');

const router = express.Router();

router
    .route('/')
    .get(journalController.getAllJournals)
    .post(journalController.createJournal);

router
    .route('/:id')
    .get(journalController.getJournal)
    .patch(journalController.updateJournal)
    .delete(journalController.deleteJournal);

module.exports = router;