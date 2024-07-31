const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

router.get('/media', (req, res) => {
  const uploadsDir = path.join(__dirname, '..', 'uploads');

  fs.readdir(uploadsDir, (err, files) => {
    if (err) {
      return res.status(500).json({ message: 'Unable to scan files', error: err });
    }

    // Get file information
    const fileInfos = files.map(file => {
      const filePath = path.join(uploadsDir, file);
      const stat = fs.statSync(filePath);
      return {
        name: file,
        url: `http://localhost:5000/uploads/${file}`, // Adjust the URL based on your setup
        mtime: stat.mtime // Modification time
      };
    });

    // Sort files by modification time in descending order
    fileInfos.sort((a, b) => b.mtime - a.mtime);

    // Remove modification time from the response
    const fileUrls = fileInfos.map(fileInfo => ({
      name: fileInfo.name,
      url: fileInfo.url
    }));

    res.json(fileUrls);
  });
});

module.exports = router;
