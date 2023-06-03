const mongoose = require('mongoose')

mongoose.connect(process.env.TEST_DB_URL)

const db = mongoose.connection

db.once('open', (err) => {
    if(err) {console.log(err); return}
    console.log("Connected to DB!")
})

module.exports = db