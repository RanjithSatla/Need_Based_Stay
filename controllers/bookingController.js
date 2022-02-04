const Booking = require("../models/bookingModel");
 function bookingController () {
     return {
         store(req,res) {
             //validate req
             const { phone, address, stripeToken, paymentType } = req.body
            if(!phone || !address) {
                return res.status(422).json({ message : 'All fields are required' });
            }

            const booking = new Booking({
                customerId: req.user._id,
                property: req.property, 
                phone,
                address
            })
            booking.save().then (result)
         }
     }

 }