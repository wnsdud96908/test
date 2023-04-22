const express = require('express');
const { board } = require('../models');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const boards = await board.findAll();
        res.render('board', {boards});
    } catch(err) {
        console.error(err);
        next(err);
    }
});
module.exports = router;