const express = require('express')
const app = express()
const mongoDB = require("./db");
const cors = require('cors');
mongoDB();


app.use(cors({
    Origin: 'https://employee-management-website-two.vercel.app'
}));
app.use((req, res, next) => {
    console.log(req);
    res.header('Access-Control-Allow-Origin', 'https://employee-management-website-two.vercel.app');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
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



const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})