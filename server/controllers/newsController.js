const News = require("../models/News");
const slugify = require("slugify");

const getAllNews = async (req, res) => {
  try {
    const news = await News.find()
      .sort({ createdAt: -1 })
      .populate("author", "username fullname");
    res.json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all blogs with pagination
const getAllRecentNews = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 6; // Default limit to 6
    const skip = (page - 1) * limit;

    const blogs = await Post.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .populate("author", "username");
    const totalBlogs = await Post.countDocuments();

    res.json({
      blogs,
      totalPages: Math.ceil(totalBlogs / limit),
      currentPage: page,
    });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getNewsById = async (req, res) => {
  try {
    const news = await News.findById(req.params.id).populate(
      "author",
      "username fullname"
    );
    if (news) {
      res.json(news);
    } else {
      res.status(404).json({ message: "News not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a post by slug
const getNewsBySlug = async (req, res) => {
  try {
    const post = await News.findOne({ slug: req.params.slug }).populate(
      "author",
      "username"
    );
    console.log(post);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const createNews = async (req, res) => {
  try {
    const { newsTitle, description, source } = req.body;
    const imageFile = req.file ? req.file.path : "";

    const slug = slugify(title, { lower: true });

    // Check if the slug already exists
    let existingPost = await Post.findOne({ slug });

    // If the slug exists, add a random string to the end
    if (existingPost) {
      const randomString = Math.random().toString(36).substring(2, 8);
      slug = `${slug}-${randomString}`;
    }

    const news = await News.create({
      newsTitle,
      description,
      source,
      imageFile,
      author: req.user._id,
      slug,
    });

    res.status(201).json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateNews = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) {
      return res.status(404).json({ message: "News not found" });
    }

    // Update news fields
    news.newsTitle = req.body.newsTitle || news.newsTitle;
    news.description = req.body.description || news.description;
    news.source = req.body.source || news.source;
    if (req.file) {
      news.imageFile = req.file.path;
    }

    const updatedNews = await news.save();
    res.json(updatedNews);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const deleteNews = async (req, res) => {
  try {
    const { id } = req.params;

    const news = await News.findById(id);
    if (news) {
      await news.deleteOne();
      res.json({ message: "News removed" });
    } else {
      res.status(404).json({ message: "News not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllNews,
  getNewsById,
  createNews,
  updateNews,
  deleteNews,
  getNewsBySlug,
  getAllRecentNews,
};
