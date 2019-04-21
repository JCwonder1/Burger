const orm = require('../config/orm.js');

let burger = {
    all:  function(cb){
        orm.selectAll("burgers", (res)=>{
            cb(res);
        });
    },
    create: function(vals, cb){
        orm.insertOne(vals, (res)=>{
            cb(res);
        });
    },
    update: function(id, cb){
        orm.updateOne(id, (res)=>{
            cb(res);
        } )
    }
    
    
};


// Export the database functions for the controller (catsController.js).
module.exports = burger;