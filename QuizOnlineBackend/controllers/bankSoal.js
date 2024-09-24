const banksoal = require('../models/bankSoalModel')

const quizModel = require('../models/quizModel')

exports.getAllSoal = (req, res) => {
    quizModel.find({})
        .then(soal => {
            res.status(200).json({message : "Sialan gak work", data : soal});
        })
        .catch(err => {
            res.status(500).send(err);
        });
}