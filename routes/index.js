const express = require('express');
const homeController = require("../controllers/home_controller")

const router = express.Router();

console.log("router loaded");

router.get('/', homeController.home);
router.post('/create-task', homeController.create);
router.post('/delete-task', homeController.delete);

module.exports = router;