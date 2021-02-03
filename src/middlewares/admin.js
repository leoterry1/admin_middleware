function admin (req,res,next){
    let admins = ["Ada","Greta","Vim","Tim"];
    if (admins.includes(req.query.user)){
        return next();
    }else{
        return res.render("index", {msg:"No tienes privilegios para ver esta página", title: "Error"});
    }
}

module.exports = admin;