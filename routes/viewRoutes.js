const express = require('express');
const viewController = require('./../controllers/viewController');

const router = express.Router();

router.get('/', viewController.allJournals);

router.get('/article/:id', viewController.journal);

router.get('/new', viewController.newJournalPage);

router.get('/update/:id', viewController.update);

router.post('/update/:id', viewController.updateJournal);

router.get('/delete/:id', viewController.deleteJournal);

router.post('/newJournal', viewController.newJournal);

module.exports = router;