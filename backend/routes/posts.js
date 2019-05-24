const express = require("express");

const PostController = require('../controllers/post')

const router = express.Router();
const checkAuth = require("../middleware/check-auth");
const extractFile = require('../middleware/file')

router.post("", checkAuth, extractFile, PostController.createPost);

router.put( "/:id", checkAuth, extractFile, PostController.updatePost );

router.get("", PostController.getPost);

router.get("/:id", checkAuth, PostController.getPostById);

router.delete("/:id", checkAuth, PostController.deletePost);

module.exports = router;
