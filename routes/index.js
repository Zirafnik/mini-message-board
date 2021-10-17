const express = require('express')
const router = express.Router();

const messages = [
    {
        text: 'Hello there! This is the first message',
        user: 'David',
        added: new Date()
    }, 
    {
        text: 'Hello World!',
        user: 'Anja',
        added: new Date()
    }
]

router.get('/', (req, res, next) => {
    res.render('index', {title: 'Mini Message Board', messages});
});

module.exports = router;