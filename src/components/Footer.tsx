import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Briefcase className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">JobBoard</span>
            </div>
            <p className="mt-4 text-gray-600">
              Connecting talented professionals with amazing opportunities.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">For Job Seekers</h3>
            <ul className="space-y-2">
              <li><Link to="/jobs" className="text-gray-600 hover:text-blue-600">Browse Jobs</Link></li>
              <li><Link to="/profile" className="text-gray-600 hover:text-blue-600">Create Profile</Link></li>
              <li><Link to="/jobs/saved" className="text-gray-600 hover:text-blue-600">Saved Jobs</Link></li>
              <li><Link to="/jobs/applied" className="text-gray-600 hover:text-blue-600">Applied Jobs</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">For Employers</h3>
            <ul className="space-y-2">
              <li><Link to="/post-job" className="text-gray-600 hover:text-blue-600">Post a Job</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-blue-600">Pricing</Link></li>
              <li><Link to="/resources" className="text-gray-600 hover:text-blue-600">Resources</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact Sales</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} JobBoard. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;