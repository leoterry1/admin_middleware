module.exports = {
    index: (req,res)=>{
        res.render("index", {title:"Home", msg:"Home"})
    },
    admin: (req,res) =>{
        res.render("index",{title: req.query.user, msg: "Hola admin " + req.query.user})
    }
};