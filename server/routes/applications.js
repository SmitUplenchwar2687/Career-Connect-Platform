import express from 'express';
import Application from '../models/Application.js';

const router = express.Router();

// Get all applications for a job
router.get('/job/:jobId', async (req, res) => {
  try {
    const applications = await Application.find({ job: req.params.jobId })
      .populate('applicant', 'name email profile')
      .sort({ createdAt: -1 });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all applications by a user
router.get('/user/:userId', async (req, res) => {
  try {
    const applications = await Application.find({ applicant: req.params.userId })
      .populate('job')
      .sort({ createdAt: -1 });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Submit application
router.post('/', async (req, res) => {
  try {
    const application = new Application(req.body);
    const savedApplication = await application.save();
    res.status(201).json(savedApplication);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update application status
router.patch('/:id', async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);
    
    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }
    
    Object.assign(application, req.body);
    const updatedApplication = await application.save();
    res.json(updatedApplication);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;