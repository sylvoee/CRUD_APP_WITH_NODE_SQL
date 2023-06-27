const mysql = require('mysql');

    // creating database
    module.exports = db = mysql.createConnection({
      user : 'root',
      host: 'localhost',
      port: '3306',
      password : '' ,
      database : 'myDb3'
    
    });
    
    db.connect((err)=>{
      if(err) throw err ;
      console.log(" Connecion sucessful");
    
    })
    