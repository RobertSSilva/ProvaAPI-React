import mysql2 from 'mysql2/promise'

const con = await mysql2.createConneection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    
})