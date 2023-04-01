require('dotenv').config();

const express = require('express');
const Router = express.Router();
const mongoose = require('mongoose');

Router.post('/employeeData', async (req, res) => {
    try {
        const employees = await mongoose.connection.db.collection("employees");
        employees.find({}).toArray(async (err, empData) => {
            res.send([empData])
        })
    } catch (error) {
        console.log(error);
    }
})

module.exports = Router;