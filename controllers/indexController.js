const schema = require('../model/schema');


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

  const{name, age, address, email, phone_num} = req.body ;
  db.query("INSERT INTO customer(name, age, address, email, phone_num) values(?, ?, ?, ?, ?)", [name, age, address, email , phone_num], function (error, results, fields){
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
  const{age, address, email, phone_num, id} = req.body ;
  db.query("UPDATE customer SET age = ?, address = ?, email = ?, phone_num = ?   WHERE id = ?", [age, address, email, phone_num, id], (err, results, fields)=>{
   if(err) throw err
   if(results) res.json({})
  });
 
}