const express = require('express');
const router = express.Router();
const walletController = require('../controllers/walletController');

router.route("/")
.get(walletController.getWalletByUserId);

module.exports = router;

