module.exports = { 
    ensureAuthenticated: function (req, res, next){
        if (req.isAuthenticated()){
            return next();
        }
        //we can flash npm to inform as messsage in login page
        res.redirect('/users/login');
    },
    forwardAuthenticated: function (req, res, next){
        if (!req.isAuthenticated()) {
            return next();
        }
        res.redirect('/users/signup');
        // res.redirect('/dashboard');
    }
};