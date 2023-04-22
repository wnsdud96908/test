const express = require('express');
const { board } = require('../models');

const router = express.Router();

router.route('/')
    .get(async (req, res, next) => {
        try {
            const boards = await board.findAll({});
            console.log("111111111->", boards);
            res.json(boards);
        } catch(err) {
            console.error(err);
            next(err);
        }
    })
    .post(async (req, res, next) => {
        try {
            const board = await board.create({
                board_no: req.body.board_no,
                title: req.body.title,
                store_name: req.body.store_name,
                star: req.body.star,
                nick: req.body.nick,
                content: req.body.content,
            });
            console.log(board);
            res.status(201).json(board);
        } catch (err) {
            console.error(err);
            next(err);
        }
    });
module.exports = router;