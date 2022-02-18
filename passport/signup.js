const LocalStrategy   = require('passport-local').Strategy;
const  User = require('../models/userModel');
const bCrypt = require('bcryptjs');

module.exports = function(passport){

	passport.use('signup', new LocalStrategy({
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, username, password, done) {
            findOrCreateUser = function(){
                console.log("Test");
                // find a user in Mongo with provided username
                User.findOne({ 'username' :  username }, function(err, user) {
                    // In case of any error, return using the done method
                    if (err){
                        console.log('Error in SignUp: '+err);
                        return done(err);
                    }
                    // already exists
                    if (user) {
                        console.log('User already exists with username: '+username);
                        return done(null, false, req.flash('message','User Already Exists'));
                    } else {
                        // if there is no user with that email
                        // create the user
                        const user = new User({
                            firstName: req.body.firstName,
                            lastName: req.body.lastName,
                            emailId: req.body.emailId,
                            phoneNumber: req.body.phoneNumber,
                            userName: req.body.userName,
                            password: createHash.password,
                          });
                          // check required fields
                          if(!firstName, !lastName, !emailId, !phoneNumber, !userName, !password){
                            error.push({ msg: 'Required fields missing'});
                          }

                        // save the user
                        user.save(function(err) {
                            if (err){
                                console.log('Error in Saving user: '+err);  
                                throw err;  
                            }
                            console.log('User Registration succesfull');    
                            return done(null, user);
                        });
                    }
                });
            };
            // Delay the execution of findOrCreateUser and execute the method
            // in the next tick of the event loop
            process.nextTick(findOrCreateUser);
        })
    );
    
    // Generates hash using bCrypt
    var createHash = function(password){
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    }

};