let dbconnection = require('./dbConnection');

//  customer table  structure
let create_tbl_customer = "CREATE TABLE IF NOT EXISTS customer(id int AUTO_INCREMENT, name VARCHAR(255), age int(2), address VARCHAR(300), email VARCHAR(233), phone_num VARCHAR(20), PRIMARY KEY(id))"
 
db.query(create_tbl_customer, (err, results, field)=>{
  if(err) throw err
  if(results) console.log("Customer table successfully created");
});


//  customer table  structure
let customerOrder = "CREATE TABLE IF NOT EXISTS customerOrder(id int AUTO_INCREMENT, customer_id int(11), product_name VARCHAR(255), cost FLOAT(14), description VARCHAR(300), delivery_location VARCHAR(43), quantity int(11), time DATETIME(4), PRIMARY KEY(id)  )"
 
db.query(customerOrder, (err, results, field)=>{
  if(err) throw err;
  if(results) console.log("customer_order table successfully created");
});


