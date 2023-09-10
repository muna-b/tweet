const mongoose = require('mongoose');
const env = require(`../environment/${ process.env.NODE_ENV }`)

exports.clientPromise = mongoose.connect(env.dbUrl)
    .then( (client) => {
        console.log('connexion DB ok');
        return client
    })
    .catch( err => console.log(err));