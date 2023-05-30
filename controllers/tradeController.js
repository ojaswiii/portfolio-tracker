const pool=require('./../db');
const queries=require('./../models/queries')

exports.getTrades = (req,res)=>{
    pool.query(queries.getTrades,(error,results)=>{
        if (error) return res.status(500).send(error.message);
        res.status(200).json(results.rows)
    })
}

exports.addTrade = async(req,res)=>{
    const {tickersymbol,shares,price,type}=req.body;

    try{
        await pool.query('BEGIN');
        await pool.query(queries.insertTrade,[tickersymbol,shares,price,type]);
        const result = await pool.query(queries.updateSharesOnAdd,[tickersymbol,shares,type]);
        if (result.rowCount === 0) {
            throw new Error('Shares cannot be negative');
        }
        await pool.query('COMMIT'); // Commit the transaction
        console.log('Transaction completed successfully');
        return res.status(201).send("Post request successful");
    } catch (error) {
        await pool.query('ROLLBACK'); // Rollback the transaction
        console.log('Transaction failed:', error);
        return res.status(500).send(error.message);
    }
};