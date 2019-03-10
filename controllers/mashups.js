const express = require('express');
const router = express.Router();
const Mashup = require('../models/mashup');

// get all mashup route
router.get('/', async (req, res) => {
    try  {
    const allMashups = await Mashup.find();
      res.json({
      status: 200,
      data: allMashups
    });
  } catch (err) { 
    res.json(err)
  }
});

// create mashup
router.post('/', async (req, res) => {
  try {
      const mashup = await Mashup.create(req.body);
      res.json({
          status: 200,
          data: mashup
      });
  } catch(err){
      console.log(err);
      res.send(err);
  }
});

module.exports = router