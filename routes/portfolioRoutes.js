const express=require('express');
const router=express.Router();

const portFolioController=require('./../controllers/portfolioController')

router
.route('/')
.get(portFolioController.getPortfolio)

module.exports= router;