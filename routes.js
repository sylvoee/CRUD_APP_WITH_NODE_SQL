var express = require('express');
var router = express.Router();
let indexController = require('./controllers/indexController');

/* GET home page. */
router.get('/', home);
router.post('/', postCustomers)
router.delete('/', deleteCustomer);
router.put('/',  updateCustomer);

module.exports = router;
