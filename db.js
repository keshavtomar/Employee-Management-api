require('dotenv').config();

const mongoose = require('mongoose');
const password = process.env.PASSWORD;

const mongoURI = 'mongodb+srv://keshavtomar:' + password + '@cluster0.ibzyjol.mongodb.net/settyl-intern?retryWrites=true&w=majority';

mongoose.set('strictQuery', true);

const mongoDB = () => {
    // if showing error in mongoose that mongoose.connect no longer requests a callback, downgrade your mongoose
    mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err) => {
        if (err) {
            console.log("Database connection failed with following error");
            console.log(err);
        }
        else {
            const employees = await mongoose.connection.db.collection("employees");
            employees.find({}).toArray(async (err, empData) => {
                // I can also write if-else instead of try catch
                try {
                    global.emp = empData;
                } catch (error) {
                    console.log(error);
                }
                console.log("Database connection successfull");
            })
        }
    });
}

module.exports = mongoDB;