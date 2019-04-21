const connection = require('./connection');

var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
            cb(result);
        });
    },
    insertOne: function(valOfCol, cb){
        let queryString = `INSERT INTO burgers (burger_name, devoured) VALUES ('${valOfCol[0]}',${valOfCol[1]})`;
        connection.query(queryString, (err, result)=>{
            if (err) throw err;
            cb(result);
            console.log(result);
        })
    },
    updateOne: function(id, cb){
        let queryString = `UPDATE burgers SET devoured = true WHERE id = '${id.id}'`;
        console.log(queryString, "DEBUG", id);
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
            console.log(result);
        })
        
    }
}


module.exports = orm;