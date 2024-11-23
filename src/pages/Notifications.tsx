import React from 'react';
import { Bell, Briefcase, Users, MessageSquare, Star } from 'lucide-react';

const Notifications = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold text-gray-900">Notifications</h2>
        </div>

        <div className="divide-y">
          {/* Job Application Updates */}
          <div className="p-4 hover:bg-gray-50">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <Briefcase className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-gray-900">
                  Your application for <span className="font-semibold">Senior Developer</span> at{' '}
                  <span className="font-semibold">Google</span> has been reviewed
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  The hiring team will contact you soon for the next steps
                </p>
                <span className="text-xs text-gray-500 mt-2 block">2 hours ago</span>
              </div>
            </div>
          </div>

          {/* New Connection */}
          <div className="p-4 hover:bg-gray-50">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-2 rounded-full">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-gray-900">
                  <span className="font-semibold">John Doe</span> accepted your connection request
                </p>
                <div className="mt-2">
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Send Message
                  </button>
                </div>
                <span className="text-xs text-gray-500 mt-2 block">5 hours ago</span>
              </div>
            </div>
          </div>

          {/* New Message */}
          <div className="p-4 hover:bg-gray-50">
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-2 rounded-full">
                <MessageSquare className="h-6 w-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <p className="text-gray-900">
                  New message from <span className="font-semibold">Sarah Wilson</span>
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  "Thanks for your application! We'd love to schedule an interview..."
                </p>
                <span className="text-xs text-gray-500 mt-2 block">1 day ago</span>
              </div>
            </div>
          </div>

          {/* Job Recommendation */}
          <div className="p-4 hover:bg-gray-50">
            <div className="flex items-start gap-4">
              <div className="bg-yellow-100 p-2 rounded-full">
                <Star className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="flex-1">
                <p className="text-gray-900">New job recommendation based on your profile</p>
                <p className="text-sm text-gray-600 mt-1">
                  Senior Frontend Developer at Microsoft
                </p>
                <div className="mt-2">
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    View Job
                  </button>
                </div>
                <span className="text-xs text-gray-500 mt-2 block">2 days ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;