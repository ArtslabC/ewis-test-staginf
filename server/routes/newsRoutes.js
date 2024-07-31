const express = require("express");
const {
  getAllNews,
  getNewsById,
  createNews,
  updateNews,
  deleteNews,
  getNewsBySlug,
} = require("../controllers/newsController");
const protect = require("../middleware/authMiddleware");
const upload = require("../middleware/multerConfig");
const router = express.Router();

// Route to get all news
router.get("/", getAllNews);

// Route to get a specific news item by ID
router.get("/:id", getNewsById);

// Route for getting a news by slug
router.get("/view/:slug", getNewsBySlug);

// Route to create a new news item
router.post("/", protect, upload.single("imageFile"), createNews);

// Route to update a news item by ID
router.put("/:id", protect, upload.single("imageFile"), updateNews);

// Route to delete a news item by ID
router.delete("/:id", protect, deleteNews);

module.exports = router;
