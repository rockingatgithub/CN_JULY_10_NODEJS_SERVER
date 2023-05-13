const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://sudhendra:9CjF2VX4A345jdNN@mern-db.f4av7ul.mongodb.net/?retryWrites=true&w=majority')

const db = mongoose.connection

db.once('open', (err) => {
    if(err) {console.log(err); return}
    console.log("Connected to DB!")
})

module.exports = db