const express = require('express');
const router = express();

router.get('/', (req, res) => {
    res.send('users route is hitting')
})



module.exports = router