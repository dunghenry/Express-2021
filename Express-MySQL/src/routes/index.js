const express = require("express");
const multer = require("multer");
const path = require("path");
const appRoot = require("app-root-path");
const homeController = require("../controller/homeController.js");
const aboutController = require("../controller/aboutController.js");
const contactController = require("../controller/contactController.js");
const loginController = require("../controller/loginController.js");

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, appRoot + "/src/public/images/");
  },

  // By default, multer removes file extensions so let's add them back
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const imageFilter = function (req, file, cb) {
  // Accept images only
  if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
    req.fileValidationError = "Only image files are allowed!";
    return cb(new Error("Only image files are allowed!"), false);
  }
  cb(null, true);
};

let upload = multer({
  storage: storage,
  fileFilter: imageFilter,
});

let uploadMultiple = multer({
  storage: storage,
  fileFilter: imageFilter,
}).array('multiple_images', 3);

const route = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/detail/user/:id", homeController.getDetailPage);
  router.post("/create-new-user", homeController.createNewUser);
  router.post("/delete-user", homeController.deleteUser);
  router.get("/edit-user/:id", homeController.editUser);
  router.post("/update-user", homeController.updateUser);
  router.get("/upload", homeController.uploadFile);
  router.post(
    "/upload-profile-pic",
    upload.single("upload-file"),
    homeController.File
  );
  router.post('/upload-multiple-images', (req, res, next) => {
    uploadMultiple(req, res, (err) => {
      if (err instanceof multer.MulterError && err.code === "LIMIT_UNEXPECTED_FILE") {
        // handle multer file limit error here
        res.send('LIMIT_UNEXPECTED_FILE')
      } else if (err) {
        res.send(err)
      } else {
        // make sure to call next() if all was well
        next();
      }
    })

  }, homeController.uploadMultiple);
  
  router.get("/about", aboutController.getAboutpage);
  router.get("/contact", contactController.getContactpage);
  router.get("/login", loginController.getLoginpage);

  return app.use("/", router);
};

module.exports = route;