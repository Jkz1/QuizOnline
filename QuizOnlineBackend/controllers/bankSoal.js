const banksoal = require('../models/bankSoalModel')

const quizModel = require('../models/quizModel')

exports.getAllSoal = (req, res) => {
    banksoal.find({})
        .then(soal => {
            res.status(200).json({message : "Success", data : soal});
        })
        .catch(err => {
            res.status(500).send(err);
        });
}