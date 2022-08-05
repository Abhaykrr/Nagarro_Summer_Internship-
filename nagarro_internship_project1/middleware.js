const isLoggedIn = (req,res,next)=>{
    if(!req.isAuthenticated()){
        res.send("Please Login");
    }
    next();
}

module.exports ={isLoggedIn};