const path = require('path');

module.exports = {
    dbUrl: 'mongodb+srv://mainmounasakho:Hassan2014@test.kklz6qg.mongodb.net/?retryWrites=true&w=majority',
    cert: path.join(__dirname, '../ssl/local.crt'),
    key: path.join(__dirname, '../ssl/local.key')
}