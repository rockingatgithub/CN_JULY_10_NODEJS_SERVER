const mongoose = require('mongoose')

const resultSchema = new mongoose.Schema({

    candidate: {
        type: mongoose.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    inteview: {
        type: mongoose.Types.ObjectId,
        ref: 'Interview',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['PASS', 'FAIL', 'PENDING']
    }

})

const Result = mongoose.model('Result', resultSchema)
module.exports = Result