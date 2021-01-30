const { Pool } = require('pg')

const pool = new Pool({
    user: 'jvovfrvz',
    host: 'motty.db.elephantsql.com',
    database: 'jvovfrvz',
    password: 'TmVJKOnoH3MISP6p1-rqnuRl_2sfKe89',
    port: 5432,
})

module.exports = pool