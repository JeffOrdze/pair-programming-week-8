const express = require("express");
const router = express.Router();
const fs = require("fs");


router.get('/', (_req,res) => {
const catData = JSON.parse(fs.readFileSync('./data/cats.json'))

res.status(200).send(catData)
}
)

module.exports = router;