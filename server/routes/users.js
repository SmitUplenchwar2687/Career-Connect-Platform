import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// Get user profile
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .select('-password')
      .populate('savedJobs');
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update user profile
router.patch('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    Object.assign(user, req.body);
    const updatedUser = await user.save();
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Save job
router.post('/:id/save-job/:jobId', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    if (!user.savedJobs.includes(req.params.jobId)) {
      user.savedJobs.push(req.params.jobId);
      await user.save();
    }
    
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Unsave job
router.delete('/:id/save-job/:jobId', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    user.savedJobs = user.savedJobs.filter(
      jobId => jobId.toString() !== req.params.jobId
    );
    await user.save();
    
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export <boltAction type="file" filePath="server/routes/users.js">
default router;