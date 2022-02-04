const Booking = require("../models/bookingModel");
 function bookProperty() {
     return {
         store(req,res) {
             //validate req
             const { phone,address, stripeToken, paymentType } = req.body
            if(!phone || !address) {
                return res.status(422).json({ message : 'All fields are required' });
            }

            const booking = new Booking({
                customerId: req.user._id,
                property: req.property,
                phone,
                address
            })
            booking.save().then (result =>{
                Booking.populate(result, { path:'customerId'}, (err, placeedBooking) => {
                    if(paymentType === 'card') {
                        stripe.charges.create({ 
                            source: stripeToken,
                            currency: 'inr',
                            description: `Property order: ${placedBooking._id}`
                        }).then(() => {
                            placedBooking.paymentStatus = true
                            placedBooking.paymentType = paymentType
                            placedBooking.save().then
                        
                    
                    });
                 };

                });

            
            });
         };
     };

 };
 module.exports = { bookProperty};