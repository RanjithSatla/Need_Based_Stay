const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema(
    {
      userId: 
            { 
                type:String, 
                ref: 'User',
                required:true 
            },
      properties: 
          {
              propertyId: { type: Object, required:true },
          },
      
      amount: { type: Number, required:true},
      paymentType: { type: String, default: "online_payment"},

      status: { type: String, default: "order_placed"},

}),
module.exports = mongoose.model("Booking", bookingSchema);