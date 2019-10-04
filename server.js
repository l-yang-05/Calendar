const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
require('dotenv').config()
const PORT = 5001

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('tiny'))
app.use(helmet())

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: process.env.KEY,
    database: 'Calendar'
})

app.get('/api/test', (req, res) =>{
    connection.query('SELECT hello FROM test', (err, data) =>{
        console.table(data)
        res.send(data)
    })
})


app.listen(PORT, () => { console.log(`Listening on port ${ PORT }`) })

