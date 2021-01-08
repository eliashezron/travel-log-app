const{ Router}= require('express');

const router = Router();
const LogEntry = require('../models/logEntry')

router.get('/',(req,res)=>{
    res.json({
        message:'my world',
    });
    
}); 

 router.post('/',async(req,res, next)=>{
    try{
        const logEntry = new LogEntry(req.body);
        const createdEntry=await logEntry.save();
        res.json(createdEntry);
    } catch (error){
        if (error.name === 'ValidationError'){
            res.staus(422);
        }
        next(error);  
    }
     
     console.log(req.body);
 })

module.exports = router;