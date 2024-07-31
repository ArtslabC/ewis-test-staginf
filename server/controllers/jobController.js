const Job = require('../models/Job');

const getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find().sort({ createdAt: -1 });
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch jobs' });
    }
};

const createJob = async (req, res) => {
    try {
        const { jobTitle, jobSummary, jobDescription, skills, jobType, modality, recipientEmail } = req.body;

        const job = new Job({
            jobTitle,
            jobSummary,
            jobDescription,
            skills,
            jobType,
            modality,
            recipientEmail // Save recipient email
        });

        const createdJob = await job.save();
        res.status(201).json(createdJob);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create job' });
    }
};

const updateJob = async (req, res) => {
    try {
        const { id } = req.params;
        const { jobTitle, jobSummary, jobDescription, skills, jobType, modality, recipientEmail } = req.body;

        const job = await Job.findById(id);
        if (job) {
            job.jobTitle = jobTitle;
            job.jobSummary = jobSummary;
            job.jobDescription = jobDescription;
            job.skills = skills;
            job.jobType = jobType;
            job.modality = modality;
            job.recipientEmail = recipientEmail; // Update recipient email

            const updatedJob = await job.save();
            res.json(updatedJob);
        } else {
            res.status(404).json({ message: 'Job not found' });
        }
    } catch (error) {
        res.status500.json({ message: 'Failed to update job' });
    }
};

const deleteJob = async (req, res) => {
    try {
        const { id } = req.params;
        const job = await Job.findById(id);

        if (job) {
            await job.deleteOne();
            res.json({ message: 'Job removed' });
        } else {
            res.status(404).json({ message: 'Job not found' });
        }
    } catch (error) {
        console.error('Error deleting job:', error); // Log the error
        res.status(500).json({ message: 'Failed to delete job' });
    }
};

const getJobById = async (req, res) => {
    try {
        const { id } = req.params;
        const job = await Job.findById(id);
        if (job) {
            res.json(job);
        } else {
            res.status(404).json({ message: 'Job not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch job' });
    }
};

module.exports = { getAllJobs, createJob, updateJob, deleteJob, getJobById };
