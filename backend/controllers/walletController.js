

const supabase = require('../config/dbConn');

const getWalletByUserId = async(req,res)=>{
   const { id } = req.query;
    if (!id) {
    return res.status(400).json({ error: "Missing id parameter" });
  }
    const result = await supabase .from('wallet').select('*').eq("id",id).single();
    if(result){
        console.log("Found the data successfully");
        res.json({message:result});
    }else{
        console.log("Error while fetching the data");
        res.status(404).send("No record found");
    }
}

module.exports = {getWalletByUserId};