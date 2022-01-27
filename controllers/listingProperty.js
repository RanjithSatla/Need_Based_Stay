const Property = require('../models/PropertyModel');

//createProperty
const createProperty = async (req, res, next) => {
    const property = new Property ({
        propertyName: req.body.propertyName,
        propertyLocation: req.body.propertyLocation,
        propertyType: req.body.propertyType,
        locationType: req.body.locationType,
        phoneNumber: req.body.phoneNumber,
        priceRange: req.body.priceRange,
        uploadImages: req.body.uploadImages,
        description: req.body.description,
    });
    try{
        const propertyData = await property.save();
        console.log(propertyData);
        res.json(propertyData);

    }catch(error){
        res.json({message: 'an error occurred'});

    };
};
// updateProperty
// const updateProperty = async (req, res, next) =>{
   
// }

// const property = await Property



//get all properties


// deleteProperty
// const deleteProperty = async (req, res, next) =>{

// }


module.exports = {createProperty};
