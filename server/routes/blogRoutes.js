const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
  createPost,
  getPostBySlug,
  updatePostById,
  deletePost,
  getAllBlogs,
  getPostById,
  getAllBlogsLazy,
} = require("../controllers/blogController");
const protect = require("../middleware/authMiddleware"); // Ensure this path is correct
const upload = require("../middleware/multerConfig");

// Route for creating a new post
router.post("/", protect, upload.single("file"), createPost);

// Route for getting a post by slug
router.get("/slug/:slug", getPostBySlug);

// Route for updating a post
router.put("/:id", protect, upload.single("file"), updatePostById);

// Route for deleting a post
router.delete("/:id", protect, deletePost);

// Route for getting all blogs
router.get("/", getAllBlogs);

// Route for getting all blogs
router.get("/lazy", getAllBlogsLazy);

// Route for getting a post by ID
router.get("/:id", getPostById);

module.exports = router;
