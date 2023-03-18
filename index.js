const express = require("express"); 
// importing for routes
const router=require("./src/routes");
//using db 
const db=require('./src/config/mongoose');
const app = express(); 
const PORT = 8000; 
app.use(express.urlencoded({extended: false}));
app.use("/",router);

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});