const express = require('express');
const router = express.Router();

const messages = require('../messages');

router.get('/', (req, res, next) => {
    res.render('form', {title: 'Create new post'});
})

router.post('/', (req, res, next) => {
    messages.unshift({
        text: req.body.msgText,
        user: req.body.msgUser,
        added: new Date()
    });

    res.redirect('/');
});

module.exports = router;