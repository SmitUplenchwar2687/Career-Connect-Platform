import React, { useState } from 'react';
import { Search, Send, Phone, Video, MoreHorizontal } from 'lucide-react';

const Messaging = () => {
  const [selectedChat, setSelectedChat] = useState(1);

  return (
    <div className="flex h-[calc(100vh-7rem)] bg-white rounded-lg shadow-md">
      {/* Sidebar */}
      <div className="w-80 border-r">
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search messages"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="overflow-y-auto h-[calc(100%-4rem)]">
          {[1, 2, 3, 4, 5].map((chat) => (
            <div
              key={chat}
              className={`p-4 hover:bg-gray-50 cursor-pointer ${
                selectedChat === chat ? 'bg-blue-50' : ''
              }`}
              onClick={() => setSelectedChat(chat)}
            >
              <div className="flex items-start gap-3">
                <img
                  src={`https://i.pravatar.cc/150?img=${chat}`}
                  alt="Profile"
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-gray-900">Sarah Wilson</h3>
                    <span className="text-xs text-gray-500">2m ago</span>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    Thanks for your application! We'd love to schedule an interview...
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/150?img=1"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="font-semibold text-gray-900">Sarah Wilson</h3>
              <p className="text-sm text-gray-600">HR Manager at Google</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Phone className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Video className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <MoreHorizontal className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <div className="flex gap-3">
            <img
              src="https://i.pravatar.cc/150?img=1"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <div className="bg-gray-100 rounded-lg p-3 max-w-[70%]">
              <p className="text-gray-900">
                Hi! Thanks for applying to the Senior Developer position at Google.
              </p>
              <span className="text-xs text-gray-500 mt-1">10:30 AM</span>
            </div>
          </div>

          <div className="flex gap-3 justify-end">
            <div className="bg-blue-600 text-white rounded-lg p-3 max-w-[70%]">
              <p>
                Thank you for considering my application! I'm very excited about the opportunity.
              </p>
              <span className="text-xs text-blue-100 mt-1">10:32 AM</span>
            </div>
            <img
              src="https://i.pravatar.cc/150?img=2"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>

        {/* Message Input */}
        <div className="p-4 border-t">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messaging;