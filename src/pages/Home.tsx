import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Briefcase, Building2, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Your Dream Job Today
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Connect with top companies and opportunities that match your skills and aspirations
          </p>
          
          <div className="bg-white rounded-lg p-4 shadow-lg max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-6 w-6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Job title, keywords, or company"
                  className="w-full pl-12 pr-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors">
                Search Jobs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Featured Jobs</h2>
          <Link to="/jobs" className="text-blue-600 hover:text-blue-700">
            View all jobs →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((job) => (
            <div key={job} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <Building2 className="h-8 w-8 text-blue-600" />
                </div>
                <span className="text-green-600 text-sm font-medium">New</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Senior Software Engineer
              </h3>
              <p className="text-gray-600 mb-4">
                Google • San Francisco, CA
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  Full-time
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  Remote
                </span>
              </div>
              <Link
                to="/jobs/1"
                className="block text-center w-full py-2 px-4 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 rounded-2xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Briefcase className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">10k+</h3>
            <p className="text-gray-600">Active Jobs</p>
          </div>
          <div>
            <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Building2 className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">5k+</h3>
            <p className="text-gray-600">Companies</p>
          </div>
          <div>
            <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">1M+</h3>
            <p className="text-gray-600">Job Seekers</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;