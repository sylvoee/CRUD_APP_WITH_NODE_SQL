var express = require('express');
var router = express.Router();
let indexController = require('./controllers/indexController');
const orderController = require('./controllers/orderController');

/* GET home page. */
router.get('/', home);
router.post('/', postCustomers)
router.delete('/', deleteCustomer);
router.put('/',  updateCustomer);


// order controllers
router.get('/orders', orders );
router.post('/post-orders', postOrders );
router.delete('/delete-order', deleteOrder);
router.put('/edit-order'  , editOrder);

module.exports = router;
