const mysql = require('mysql2')
export const mysqlPool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'review'
})