const schema = require('../model/schema');


// Get customers
module.exports = orders = (req, res, next) =>{
    // Querying the daytabase
let aQuery = "SELECT * FROM customerOrder INNER JOIN customer ON customerOrder.customer_id = customer.id" ;    
db.query(aQuery, function (error, orders, fields) {
  if (error) throw error;
  console.log('The solution is: ', orders);
  res.json(orders)
});
   
  }

// post request to home
module.exports = postOrders = (req, res, next)=>{

  const{customer_id, product_name,cost, description, delivery_location, quantity, time} = req.body ;
  db.query("INSERT INTO customerOrder(customer_id, product_name, cost, description, delivery_location, quantity, time) values(?, ?, ?, ?, ?, ?, ?)", [customer_id, product_name,cost, description, delivery_location, quantity,  'NOW()'], function (error, results, fields){
  if (error) throw error;
  res.json({msg :'order, was successfully inserted', results});
});
next ;

}  


  // Deleting a customer
module.exports = deleteOrder = (req ,res, next) =>{
  // res.send("You click on deletecustomer");
  const{id} = req.body;
  db.query(`DELETE FROM customerOrder WHERE id =${id} `, (err, results, fields)=>{
    if(err) throw err
    if(results) res.json("order deleted")

  });
//  next ;
}

// Updating a customer
module.exports = editOrder = (req, res, next)=>{
  const{product_name ,cost, description, delivery_location, quantity,  id} = req.body ;
  db.query("UPDATE customerOrder SET product_name =? ,cost = ?, description = ?, delivery_location = ?, quantity =?, time = ? WHERE id = ?", [product_name ,cost, description, delivery_location, quantity, 'NOW()',  id], (err, results, fields)=>{
   if(err) throw err
   if(results) res.json({})
  });
 
}