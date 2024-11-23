import React, { useState } from 'react';
import { Search, MapPin, Filter, Building2 } from 'lucide-react';

const Jobs = () => {
  const [filters, setFilters] = useState({
    jobType: [],
    experience: [],
    salary: [],
  });

  return (
    <div className="flex gap-6">
      {/* Filters Sidebar */}
      <div className="w-64 flex-shrink-0">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Job Type</h3>
            {['Full-time', 'Part-time', 'Contract', 'Remote'].map((type) => (
              <label key={type} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-700">{type}</span>
              </label>
            ))}
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Experience Level</h3>
            {['Entry Level', 'Mid Level', 'Senior Level', 'Director'].map((level) => (
              <label key={level} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-700">{level}</span>
              </label>
            ))}
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Salary Range</h3>
            {['$0-$50k', '$50k-$100k', '$100k-$150k', '$150k+'].map((range) => (
              <label key={range} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-700">{range}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Search Bar */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search job titles or keywords"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Location"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Search
            </button>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((job) => (
            <div key={job} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <Building2 className="h-10 w-10 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Senior Frontend Developer
                      </h3>
                      <p className="text-gray-600 mb-2">Microsoft • San Francisco, CA</p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700">
                      Save
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      Full-time
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      Remote
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      $120k-$150k
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    We're looking for a Senior Frontend Developer to join our team and help build the next generation of our products...
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Posted 2 days ago</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;