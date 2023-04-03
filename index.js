const express = require('express')
const app = express()
const mongoDB = require("./db");
const cors = require('cors');
mongoDB();
const v = 5;

app.get("/", (req, res) => {
    res.send({ status: ok });
})

app.use(cors());



app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://employee-management-website-two.vercel.app");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json());

app.use('/api', require('./Routes/createUser'));
app.use('/api', require('./Routes/addEmployee'));
app.use('/api', require('./Routes/getId'));
app.use('/api', require('./Routes/employeeData'));



const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})