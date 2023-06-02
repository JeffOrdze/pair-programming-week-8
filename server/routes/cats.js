const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (_req, res) => {
  const catData = JSON.parse(fs.readFileSync("./data/cats.json"));

  res.status(200).send(catData);
});

router.get("/checkout/:id", (req,res) => { 
    const catId = req.params.id
    const catData = JSON.parse(fs.readFileSync('./data/cats.json'));
    const selectedCat = catData.filter(cat => cat.id === catId)

    res.status(200).send(selectedCat)
})

module.exports = router;
