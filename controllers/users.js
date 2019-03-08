const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

// router.get('/', (req, res) => {
//     res.send('users route is hitting')
// })

router.get('/', async (req, res) => {
    // req.body this is from the fetch request
      try  {
      const allUsers = await User.find();
    //   console.log(allUsers)
        res.json({
        status: 200,
        data: allUsers
      });
    } catch (err) { 
      res.json(err)
    }
  });


router.post('/', async (req, res) => {
    let crypted = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    req.body.password = crypted;
    try {
        const user = await User.create(req.body);
        res.json({
            status: 200,
            data: 'login successful',
            user
        });
    } catch(err){
        console.log(err);
        res.send(err);
    }
});

module.exports = router