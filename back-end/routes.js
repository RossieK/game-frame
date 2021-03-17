const router = require('express').Router();

router.use('/', (req, res) => {
    res.send('Hello from backend');
});

module.exports = router;