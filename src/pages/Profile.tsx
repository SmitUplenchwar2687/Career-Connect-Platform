import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Briefcase, 
  MapPin, 
  Calendar,
  Edit3,
  Plus,
  School,
  Award
} from 'lucide-react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="h-32 bg-gradient-to-r from-blue-600 to-blue-800 rounded-t-lg"></div>
        <div className="px-6 pb-6">
          <div className="relative flex items-end -mt-16 mb-4">
            <img
              src="https://i.pravatar.cc/150?img=1"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white"
            />
            <button
              className="ml-4 mb-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? 'Save Changes' : 'Edit Profile'}
            </button>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-gray-900">John Doe</h1>
            <p className="text-gray-600">Senior Software Engineer</p>
            <div className="flex items-center gap-4 text-gray-600">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                <span>john.doe@example.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">About</h2>
          {isEditing && (
            <button className="text-blue-600 hover:text-blue-700">
              <Edit3 className="h-5 w-5" />
            </button>
          )}
        </div>
        <p className="text-gray-600">
          Passionate software engineer with 8+ years of experience in full-stack development.
          Specialized in React, Node.js, and cloud technologies. Strong focus on creating
          scalable and maintainable solutions.
        </p>
      </div>

      {/* Experience */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">Experience</h2>
          {isEditing && (
            <button className="text-blue-600 hover:text-blue-700">
              <Plus className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="space-y-6">
          {[1, 2].map((exp) => (
            <div key={exp} className="flex gap-4">
              <div className="bg-gray-100 p-2 rounded">
                <Briefcase className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Senior Software Engineer</h3>
                <p className="text-gray-600">Google</p>
                <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                  <Calendar className="h-4 w-4" />
                  <span>Jan 2020 - Present</span>
                </div>
                <p className="mt-2 text-gray-600">
                  Led development of key features for Google Cloud Platform...
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">Education</h2>
          {isEditing && (
            <button className="text-blue-600 hover:text-blue-700">
              <Plus className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="flex gap-4">
          <div className="bg-gray-100 p-2 rounded">
            <School className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">
              Master of Science in Computer Science
            </h3>
            <p className="text-gray-600">Stanford University</p>
            <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
              <Calendar className="h-4 w-4" />
              <span>2015 - 2017</span>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">Skills</h2>
          {isEditing && (
            <button className="text-blue-600 hover:text-blue-700">
              <Plus className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS', 'Docker'].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;