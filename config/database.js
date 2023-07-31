import mysql from "mysql2";
   
// create the connection to database
const db = mysql.createConnection({
    host: 'localhost',
    port:3308,
    user: 'root',
    password: 'ShariShari55',
    database: 'demo_db'
});
  
export default db;
