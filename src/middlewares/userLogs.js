const fs = require("fs");

let userLogs = (req,res,next)=>{
    fs.appendFileSync("src/logs/userLogs.txt", "El usuario ingresó a la ruta: " + req.url + "\n");
    next();
}

module.exports = userLogs;