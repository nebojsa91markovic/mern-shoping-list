const express = require("express");
const router = express.Router();

// Item Model
const Item = require("../../models/Item");

//  @route  GET api/items
//  @desc   Get All Items
//  @access Public
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 }) //desc || 1 for asc
    .then((items) => res.json(items));
});

//  @route  POST api/items
//  @desc   Create A Item
//  @access Public
router.post("/", (req, res) => {
  console.log(req.body);
  const newItem = new Item({
    name: req.body.name,
  });

  //   try {
  //     const item = await newItem.save();
  //     if (!item) throw Error("Something went wrong saving the item");

  //     res.status(200).json(item);
  //   } catch (e) {
  //     res.status(400).json({ msg: e.message });
  //   }

  newItem.save().then((item) => res.json(item));
});

//  @route  DELETE api/items/:id
//  @desc   Delete A Item
//  @access Public
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
