const TeaPrice = require("../models/teaprice.model");

// Get the tea price details
exports.getTeaPriceDetails = async (req, res) => {
  const { TeaRegion, SubDistrict } = req.body;

  try {
    // Log the input data to verify the request body
    console.log('Request Body:', req.body);

    // Query the database to find all records that match TeaRegion and SubDistrict
    const teaData = await TeaPrice.find({
      TeaRegion, 
      SubDistrict
    }).sort({ Year: 1 }); // Sort by Year in ascending order

    // If no data found, return a 404 error
    if (!teaData || teaData.length === 0) {
      return res.status(404).json({ message: 'Data not found' });
    }

    // Return the matching tea price details
    res.json(teaData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get the first 10 tea price records
exports.getFirstTenRecords = async (req, res) => {
  try {
    // Fetch the first 10 records from the database
    const teaData = await TeaPrice.find().limit(10);

    if (!teaData || teaData.length === 0) {
      return res.status(404).json({ message: "No records found" });
    }

    // Return the details of the first 10 records
    res.json(teaData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
