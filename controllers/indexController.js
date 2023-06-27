const customerSchema = require('../model/customerSchema');


// Get customers
module.exports = home = (req, res, next) =>{
    // Querying the daytabase
db.query("SELECT * FROM customer", function (error, customers, fields) {
  if (error) throw error;
  console.log('The solution is: ', customers);
  res.json(customers)
});
   
  }

// post request to home
module.exports = postCustomers = (req, res, next)=>{

  const{name, age, address, item_purchase, cost} = req.body ;
  db.query("INSERT INTO customer(name, age, address, item_purchase, cost) values(?, ?, ?, ?, ?)", [name, age, address,item_purchase,cost], function (error, results, fields){
  if (error) throw error;
  res.json({msg :'customer, was successfully inserted', results});
});
next ;

}  


  // Deleting a customer
module.exports = deleteCustomer = (req ,res, next) =>{
  // res.send("You click on deletecustomer");
  const{id} = req.body;
  db.query(`DELETE FROM customer WHERE id =${id} `, (err, results, fields)=>{
    if(err) throw err
    if(results) res.json("customer deleted")

  });
//  next ;
}

// Updating a customer
module.exports = updateCustomer = (req, res, next)=>{
  const{id, age, address, item_purchase, cost} = req.body ;
  db.query("UPDATE customer SET age = ?, address = ?, item_purchase = ?, cost = ?   WHERE id = ?", [age,address,item_purchase,cost, id], (err, results, fields)=>{
   if(err) throw err
   if(results) res.json({})
  });
 
}