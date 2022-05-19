const express = require('express')
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

require('dotenv').config();
const app = express()
const port = process.env.PORT || 5000

// middleware 
app.use(cors())
app.use(express.json())

const uri = "mongodb+srv://doctors-admin:<password>@cluster0.i2xzc.mongodb.net/?retryWrites=true&w=majority";

app.get('/', (req, res) => {
    res.send('Hello from Doctors Portal!')
})

app.listen(port, () => {
    console.log(`Doctors portal listening on port ${port}`)
})