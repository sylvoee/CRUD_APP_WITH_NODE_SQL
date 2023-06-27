let dbconnection = require('./dbConnection');

//  customer table  structure
let create_tbl_customer = "CREATE TABLE IF NOT EXISTS customer(id int AUTO_INCREMENT, name VARCHAR(255), age int(2), address VARCHAR(300), item_purchase VARCHAR(233), cost float(11), PRIMARY KEY(id))"
 
db.query(create_tbl_customer, (err, results, field)=>{
  if(err) throw err
  if(results) console.log(results)
});

