const User = require("./models/User");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

async function seedAdminUser() {
  try {
    // Check if an admin user already exists
    const existingAdmin = await User.findOne({
      username: process.env.ADMIN_USERNAME,
    });

    if (existingAdmin) {
      console.log("Admin user already exists.");
    } else {
      // Hash the admin password
      const hashedPassword = bcrypt.hash(process.env.ADMIN_PASSWORD, 10);

      // Create the admin user
      const adminUser = new User({
        username: process.env.ADMIN_USERNAME,
        email: process.env.ADMIN_EMAIL,
        password: hashedPassword,
        fullname: process.env.ADMIN_FULLNAME, // Assuming the full name is provided in .env
        role: "admin",
        status: "active",
      });

      // Save the admin user to the database
      await adminUser.save();
      console.log("Admin user created successfully.");
    }
  } catch (error) {
    console.error("Error seeding admin user:", error);
    process.exit(1);
  }
}

module.exports = { seedAdminUser };
