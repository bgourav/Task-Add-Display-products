
const Products=require('../config/models/product');

module.exports.addProduct = function(req, res) 
{
    
    Products.insertMany(req.body.more,(err) => {

        if(err)
        {
            console.log(err);
            res.json({"status": 404,msg: {str1:'Failed to Add Product.', str2: ''}});
        }
        else
        {
                res.json({"status": 200, msg: {
                str1: 'Successfully Add Product',
                str2: ''
                }});    
        }
    })
};

module.exports.showProduct = function(req, res) 
{
    
    Products.find({},(err,data) => {
        if(err)
        {
            console.log(err);
            res.json({"status": 404});
        }
        else
        {
                res.json({"status": 200, details : data});
               
        }
    })
}; 