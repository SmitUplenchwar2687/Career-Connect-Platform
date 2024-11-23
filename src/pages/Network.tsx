import React from 'react';
import { Users, UserPlus, MessageSquare } from 'lucide-react';

const Network = () => {
  return (
    <div className="space-y-6">
      {/* Connections Overview */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Network</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <Users className="h-6 w-6 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">Connections</h3>
            </div>
            <p className="text-3xl font-bold text-blue-600">1,234</p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <UserPlus className="h-6 w-6 text-green-600" />
              <h3 className="text-lg font-semibold text-gray-900">Growing Network</h3>
            </div>
            <p className="text-3xl font-bold text-green-600">+48</p>
            <p className="text-sm text-gray-600">this week</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <MessageSquare className="h-6 w-6 text-purple-600" />
              <h3 className="text-lg font-semibold text-gray-900">Messages</h3>
            </div>
            <p className="text-3xl font-bold text-purple-600">28</p>
            <p className="text-sm text-gray-600">unread</p>
          </div>
        </div>
      </div>

      {/* Connection Suggestions */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">People You May Know</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((person) => (
            <div key={person} className="flex items-start gap-4">
              <img
                src={`https://i.pravatar.cc/150?img=${person}`}
                alt="Profile"
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">John Doe</h3>
                <p className="text-sm text-gray-600 mb-2">Senior Developer at Google</p>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Connect
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Industry News */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Industry News</h2>
        <div className="space-y-6">
          {[1, 2, 3].map((news) => (
            <div key={news} className="flex gap-4">
              <img
                src={`https://source.unsplash.com/400x300?technology=${news}`}
                alt="News"
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Latest Trends in Tech Industry
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  Discover the emerging technologies and skills that are shaping the future of work...
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500">2 hours ago</span>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Network;