require('dotenv').config();

const express = require('express');
const Router = express.Router();
const Id = require('../models/PrevId');
const db = require('../db');
db();


Router.post('/getId', async (req, res) => {
    try {
        const prevId = await Id.findOne();
        if (!prevId) {
            await Id.create({
                id: 1
            })
            return res.json({ success: true, id: "1" });
        }
        else {
            const found = prevId.id;
            await Id.updateOne({ id: found }, { id: found + 1 });
            return res.json({ success: true, id: found + 1 });
        }
    } catch (error) {
        console.log(error);
    }
})

module.exports = Router;