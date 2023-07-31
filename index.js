// import express
import express from "express";
// import cors
import cors from "cors";
 
import bodyParser from "body-parser";
// const bodyParser = require('body-parser');
 
// import routes
import Router from "./routes/routes.js";
// import router from "./routes/routes"; 

  
// init express
const app = express();
  
// use express json
app.use(express.json());
  
// use cors
app.use(cors());
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
  
// use router
app.use(Router);
// app.use(router);
  
app.listen(5000, () => console.log('Server running at http://localhost:5000'));