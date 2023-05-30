const pool=require('./../db');
const queries=require('./../models/queries')

exports.getPortfolio = (req,res)=>{
    pool.query(queries.getPortfolio,(error,results)=>{
        if (error) return res.status(500).send(error.message);
        res.status(200).json(results.rows)
    })
}