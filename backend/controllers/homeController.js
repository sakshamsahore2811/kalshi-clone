const supabase = require("../config/dbConn");

const getAllEvents = async(req,res) =>{
   
     const { data, error } = await supabase.from("event").select("*");
    if(data){
        res.status(200).json({message:data});
    }
        if(error){
        console.log("Error: ",error);
        }
    }

module.exports = {getAllEvents};