var express = require("express");
var router = express.Router();
let userschema = require("../Schema/Schema");

/* GET home page. */
router.get("/cart", async function (req, res) {
  try {
    const result = await userschema.find();
    res.json(result);
  } catch (error) {
    console.log(error);
  }
});

router.post("/product", async function (req, res) {
  try {
    console.log(req.params.id);
    const result = await userschema.create(req.body);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/cart/:id", async function (req, res) {
  try {
    const { id } = req.params;
    await userschema.findByIdAndDelete(id);
    res.send("deleted");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
