const express = require('express')
const http = require('http')
const app = express()
const mongoDB = require("./db");
mongoDB();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://employee-management-website-two.vercel.app');
    res.header(
        "Access-Control-Allow-Headers",
        "Origiin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

app.use(express.json());
app.get("*", res.send({ status: 'Bad Request' }));

app.use('/api', require('./Routes/createUser'));
app.use('/api', require('./Routes/addEmployee'));
app.use('/api', require('./Routes/getId'));
app.use('/api', require('./Routes/employeeData'));



const port = process.env.PORT

const server = http.createServer(app);
server.listen(port, () => { console.log('this app is running on ' + port) });