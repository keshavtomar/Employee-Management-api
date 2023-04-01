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


app.get('/api/employeeData', async (req, res) => {
    try {
        const employees = await mongoose.connection.db.collection("employees");
        employees.find({}).toArray(async (err, empData) => {
            res.status(200).json({
                data: [empData]
            })
        })
    } catch (error) {
        console.log(error);
    }
})

app.use('/api', require('./Routes/createUser'));
app.use('/api', require('./Routes/addEmployee'));
app.use('/api', require('./Routes/getId'));
app.use('/api', require('./Routes/employeeData'));

app.get('*', (req, res, next) => {
    res.status(200).json({
        message: 'bad request'
    })
})



const port = process.env.PORT || 3000

const server = http.createServer(app);
server.listen(port, () => { console.log('this app is running on ' + port) });