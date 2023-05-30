const express=require('express');
const router=express.Router();

const tradeController=require('./../controllers/tradeController')

router
.route('/')
.get(tradeController.getTrades)
.post(tradeController.addTrade)

module.exports= router;