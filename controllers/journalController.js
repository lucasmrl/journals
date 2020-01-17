const Journal = require('./../models/journalModel');

exports.getAllJournals = async (req, res) => {

  try {
    //Using the MODEL and the method that we want.
    const allJournals = await Journal.find();

    res.status(200).json({
      status: 'sucess',
      results: allJournals.length,
      data: {
        allJournals
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};

exports.createJournal = async (req, res) => {
  try {
    const newJournal = await Journal.create(
      req.body
    );

    res.status(200).json({
      status: 'sucess',
      data: {
        newJournal
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err
    });
  }

};

exports.getJournal = async (req, res) => {
  try {
    const singleJournal = await Journal.findById(req.params.id);

    res.status(200).json({
      status: 'sucess',
      data: {
        singleJournal
      }
    });

  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err
    });
  }
};

exports.updateJournal = async (req, res) => {
  try {

    const updatedJorurnal = await Journal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })

    res.status(200).json({
      status: 'sucess',
      data: {
        updatedJorurnal
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err
    });
  }

};

exports.deleteJournal = async (req, res) => {
  try {

    await Journal.findByIdAndDelete(req.params.id)

    res.status(204).json({
      status: 'sucess',
      data: null
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err
    });
  }

};