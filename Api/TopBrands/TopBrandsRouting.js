const TopBrandsController = require("./TopBrandsController");
const upload=require('../Multer')
const router = require("express").Router();
const cors = require("cors");
router.use(cors({ origin: true }));
// const checkauth= require('../../Midileware/checkauth')
router.post("/add_brands",upload.array('image',10),TopBrandsController.create);
router.post("/brands_by_id",TopBrandsController.find_by_id)
router.get("/all_brands",TopBrandsController.find_all)
router.put("/update_brands_by_id",upload.array('image'),TopBrandsController.find_and_update)
router.delete("/delete_brands_by_id",TopBrandsController.find_and_delete)

module.exports = router;
