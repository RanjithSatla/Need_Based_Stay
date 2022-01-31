// Filter controller

// Gender Filter
const genderFilter = async (req, res) => {
    //   const { gender } = req.body
    const gender = 'male'; // Remove this line at the end and uncomment above line
    const genderFirst = gender.charAt(0).toUpperCase();
  
    if (genderFirst === 'M') {
      console.log('Showing male collection');
      res.send('Showing male collection');
    } else if (genderFirst === 'F') {
      console.log('Showing female collection');
      res.send('Showing female collection');
    } else {
      console.log('Showing Unisex Collection');
      res.send('Showing unisex collection');
    }
  };
  
  // Prefered for
  const preferedForFilter = async (req, res) => {
    //   const { gender } = req.body
    const preference = 'Professional'; // Remove this line at the end and uncomment above line
    const genderFirst = preference.charAt(0).toUpperCase();
  
    if (genderFirst === 'M') {
      console.log('Showing professional collection');
      res.send('Showing professional collection');
    } else {
      console.log('Showing Student Collection');
      res.send('Showing Student collection');
    }
  };
  
  // Room Type Filter
  const roomTypeFilter = async (req, res) => {
    let roomType = 'Four';
    roomType = roomType.charAt(0).toUpperCase();
    if (roomType === 'S') {
      console.log('Showing Single Room collection');
      res.send('Showing Single Room collection');
    } else if (roomType === 'T') {
      console.log('Showing Two Share ROom collection');
      res.send('Showing Two Share ROom collection');
    } else if (roomType === 'F') {
      console.log('Showing Four Share ROom collection');
      res.send('Showing Four Share ROom collection');
    } else {
      console.log('Showing Six Share ROom collection');
      res.send('Showing Six Share ROom  collection');
    }
  };
  module.exports = { genderFilter, preferedForFilter, roomTypeFilter };