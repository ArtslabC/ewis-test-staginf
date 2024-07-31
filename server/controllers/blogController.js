const Post = require("../models/Blog");
const slugify = require("slugify");

// Create a new post
const createPost = async (req, res) => {
  try {
    const { title, summary, content } = req.body;
    const file = req.file;
    const slug = slugify(title, { lower: true });

    // Check if the slug already exists
    let existingPost = await Post.findOne({ slug });

    // If the slug exists, add a random string to the end
    if (existingPost) {
      const randomString = Math.random().toString(36).substring(2, 8);
      slug = `${slug}-${randomString}`;
    }

    const newPost = await Post.create({
      title,
      slug,
      summary,
      content,
      cover: file ? file.path : "",
      author: req.user._id,
    });

    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get a post by slug
const getPostBySlug = async (req, res) => {
  try {
    const post = await Post.findOne({ slug: req.params.slug }).populate(
      "author",
      "username"
    );
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Update post by ID
const updatePostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Update post fields
    post.title = req.body.title || post.title;
    post.slug = slugify(req.body.title || post.title, { lower: true });
    post.summary = req.body.summary || post.summary;
    post.content = req.body.content || post.content;
    if (req.file) {
      post.cover = req.file.path;
    }

    const updatedPost = await post.save();
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Delete a post
const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    await Post.deleteOne({ _id: req.params.id });
    res.json({ message: "Post removed" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get all blogs with pagination
const getAllBlogs = async (req, res) => {
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

// Get post by ID
const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
const getAllBlogsLazy = async (req, res) => {
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
module.exports = {
  createPost,
  getPostBySlug,
  updatePostById,
  deletePost,
  getAllBlogs,
  getPostById,
  getAllBlogsLazy,
};
