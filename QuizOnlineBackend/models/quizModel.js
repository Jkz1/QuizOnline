const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
    daftarSoal : [
        {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        }
    ],
})

module.exports = mongoose.model("Quiz", quizSchema, "Quiz");