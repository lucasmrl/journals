const Journal = require('./../models/journalModel');

exports.allJournals = async (req, res) => {
    try {
        //Using the MODEL and the method that we want.
        const allJournals = await Journal.find();

        res.status(200).render('base', {
            allJournals
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: "Error - Couldn't get data from DB to render all Articles!"
        });
    }
};

exports.journal = async (req, res) => {
    try {
        //Using the MODEL and the method that we want.
        const singleArticle = await Journal.findById(req.params.id);

        res.status(200).render('article', {
            singleArticle
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: "Error - Couldn't get data from DB to render this article!"
        });
    }
};

exports.update = async (req, res) => {
    try {
        //Using the MODEL and the method that we want.
        const articleToUpdate = await Journal.findById(req.params.id);

        res.status(200).render('update', {
            articleToUpdate
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: "Error - Couldn't get data from DB to render this article to update!"
        });
    }
};

exports.updateJournal = async (req, res) => {
    try {
        await Journal.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });

        res.redirect(`/article/${req.params.id}`);
    } catch (err) {
        res.status(400).json({
            status: 'fail - Couldn\'t update article',
            message: err
        });
    }
};

exports.newJournalPage = async (req, res) => {
    res.status(200).render('new');
};

exports.newJournal = async (req, res) => {
    try {
        const newJournal = await Journal.create(req.body);

        res.redirect('/');
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};

exports.deleteJournal = async (req, res) => {
    try {
        await Journal.findByIdAndDelete(req.params.id);

        res.redirect('/');
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};