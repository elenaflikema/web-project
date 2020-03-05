const express = require('express');
const router = express.Router();
const verify = require('../verifyToken');

router.get('/', verify, async (req, res) => {
    res.json({
        posts: {
            name: 'first post',
            text: 'aalalalalallal'
        }
    });
});

module.exports = router;