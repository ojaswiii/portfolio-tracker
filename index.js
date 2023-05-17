const express=require('express');
const dotenv=require('dotenv');

dotenv.config({path:'./config.env'});

const portfolioRouter=require('./routes/portfolioRoutes');
const tradeRouter=require('./routes/tradeRoutes')

const app=express();

app.use(express.json());

const PORT = process.env.PORT || 3300;

app.use('/api/v1/portfolio', portfolioRouter);
app.use('/api/v1/trades', tradeRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

process.on('unhandledRejection', err=>{
    console.log(err.name, err.message);
    console.log('UNHANDLED REJECTION! Shutting down...');
    server.close(()=>{
        process.exit(1);
    });
});