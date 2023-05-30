exports.getPortfolio="SELECT * FROM portfolio";
exports.getTrades="SELECT * FROM trades";
exports.insertTrade="INSERT INTO trades (tickersymbol,shares,price,type) VALUES ($1, $2, $3, $4)";
exports.updateSharesOnAdd=`WITH updated_shares AS (
    UPDATE portfolio p
    SET shares = CASE
      WHEN $3 = 'buy' THEN p.shares + $2
      WHEN $3 = 'sell' THEN p.shares - $2
      ELSE p.shares
    END
    WHERE p.tickersymbol = $1
    RETURNING p.shares
  )
  SELECT shares
  FROM updated_shares
  WHERE shares >= 0
`;