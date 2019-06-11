const mongoose =require('mongoose');
const schema=mongoose.Schema;
const productSchema=new schema({
    
    
    p_name:{
        type:String,
        require:true,
        
    },
    p_sku:{
        type:String,
        require:true,
    },
    p_quantity:{
        type:String,
        require:true,
    }
    

},
    {
        timestamps:true
});
var Products=mongoose.model('Gproducts',productSchema);
module.exports=Products;