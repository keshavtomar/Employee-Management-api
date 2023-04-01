const express = require('express')
const app = express()
const mongoDB = require("./db");
mongoDB();
const v = 5;


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origiin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

app.use(express.json());

app.use('/api', require('./Routes/createUser'));
app.use('/api', require('./Routes/addEmployee'));
app.use('/api', require('./Routes/getId'));
app.use('/api', require('./Routes/employeeData'));


const port = process.env.PORT
console.log(port);
if (port == null || port == "") {
    port = 4000;
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})