require('dotenv').config();

const express = require('express');
const Router = express.Router();
const Employee = require('../models/Employee');

Router.post('/addEmployee', async (req, res) => {
    try {
        await Employee.create({
            id: parseInt(req.body.id),
            name: req.body.name,
            age: req.body.age,
            department: req.body.department,
            status: req.body.status,
            address: req.body.address
        })
        return res.json({ success: true })
    } catch (error) {
        console.log(error);
        return res.json({ success: false })
    }
})

Router.post('/updateEmployee', async (req, res) => {
    try {
        await Employee.findOneAndUpdate({ id: req.body.id }, {
            id: parseInt(req.body.id),
            name: req.body.name,
            age: req.body.age,
            department: req.body.department,
            status: req.body.status,
            address: req.body.address
        })
        console.log("Success");
        return res.json({ success: true })
    } catch (error) {
        console.log(error);
        return res.json({ success: false })
    }
})

module.exports = Router;