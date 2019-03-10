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

// show one mashup route
router.get('/:id', async (req, res) => {
    try {
        const foundMashup = await Mashup.findById(req.params.id);
        res.json({
            status: 200,
            data: foundMashup
        });
    } catch (err) {
        console.log(err);
        res.send(err);
    }
});

// delete mashup route
router.delete('/:id', async (req, res) => {
    try {
       const deletedMashup = await Mashup.findByIdAndRemove(req.params.id);
        res.json({
          status: 200,
          data: deletedMashup
        });
    } catch(err){
      res.send(err);
    }
});

module.exports = router