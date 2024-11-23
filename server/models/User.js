import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['jobseeker', 'employer'],
    required: true
  },
  profile: {
    title: String,
    bio: String,
    skills: [String],
    experience: [{
      title: String,
      company: String,
      location: String,
      startDate: Date,
      endDate: Date,
      description: String
    }],
    education: [{
      degree: String,
      institution: String,
      field: String,
      graduationYear: Number
    }]
  },
  savedJobs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job'
  }]
}, {
  timestamps: true
});

export default mongoose.model('User', userSchema);