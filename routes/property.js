const express = require("express");
//controllers
const listingProperty = require("../controllers/propertyController");

//Auth middleware
const checkAuth = require("../middlewares/check-auth");

const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

// const upload = multer({ dest: "uploads/" });

//createProperty
router.post(
  "/owner/listproperty",
  checkAuth,
  upload.array("propertyImage", 10),
  listingProperty.createProperty
);
router.get("/property/:propertyId", listingProperty.individualProperty);
router.patch(
  "/property/:propertyId",
  checkAuth,
  listingProperty.updateProperty
);
router.delete(
  "/property/:propertyId",
  checkAuth,
  listingProperty.deleteProperty
);

module.exports = router;
