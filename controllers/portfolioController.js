const pool=require('./../db');

exports.getPortfolio = (req,res)=>{
    pool.query("SELECT * FROM portfolio",(error,results)=>{
        if (error) return res.status(500).send(error.message);
        res.status(200).json(results.rows)
    })
}