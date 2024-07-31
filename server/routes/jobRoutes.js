const express = require('express');
const { getAllJobs, createJob, updateJob, deleteJob, getJobById } = require('../controllers/jobController');
const protect = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/')
    .get(getAllJobs)
    .post(protect, createJob);

router.route('/:id')
    .get(getJobById)
    .put(protect, updateJob)
    .delete(protect, deleteJob);

module.exports = router;
