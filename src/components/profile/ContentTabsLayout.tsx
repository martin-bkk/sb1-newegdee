import React, { useState } from 'react';
import { Home, Bell, MessageCircle, Settings, Image, Video } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ContentTabsLayoutProps {
  children: React.ReactNode;
  activeView: 'pics' | 'videos';
  setActiveView: (view: 'pics' | 'videos') => void;
}

export default function ContentTabsLayout({ children, activeView, setActiveView }: ContentTabsLayoutProps) {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="flex">
      {/* Left Sidebar */}
      <div className="w-fit border-r border-white/10 p-2 h-auto">
        <nav className="flex flex-col justify-between h-auto">
          {/* Navigation Items */}
          <div className="space-y-2">
            <button 
              onClick={() => handleNavigation('/profiles')}
              className="p-2 text-white hover:bg-white/10 rounded-xl transition-colors flex items-center gap-2 w-full"
            >
              <Home className="w-6 h-6" />
              <span className="hidden md:inline">Home</span>
            </button>
            <button 
              onClick={() => handleNavigation('/notifications')}
              className="p-2 text-white hover:bg-white/10 rounded-xl transition-colors flex items-center gap-2 w-full"
            >
              <Bell className="w-6 h-6" />
              <span className="hidden md:inline">Notifications</span>
            </button>
            <button 
              onClick={() => handleNavigation('/chats')}
              className="p-2 text-white hover:bg-white/10 rounded-xl transition-colors flex items-center gap-2 w-full"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="hidden md:inline">Messages</span>
            </button>
            <button 
              onClick={() => handleNavigation('/settings')}
              className="p-2 text-white hover:bg-white/10 rounded-xl transition-colors flex items-center gap-2 w-full"
            >
              <Settings className="w-6 h-6" />
              <span className="hidden md:inline">Settings</span>
            </button>
          </div>

          {/* Content Type Toggle */}
          <div className="mt-8 mb-2">
            <div className="flex flex-col gap-2">
              <button
                onClick={() => setActiveView('pics')}
                className={`p-2 rounded-xl transition-colors flex items-center gap-2 ${
                  activeView === 'pics' ? 'bg-pink-500 text-white' : 'text-white hover:bg-white/10'
                }`}
              >
                <Image className="w-6 h-6" />
                <span className="hidden md:inline">Pictures</span>
              </button>
              <button
                onClick={() => setActiveView('videos')}
                className={`p-2 rounded-xl transition-colors flex items-center gap-2 ${
                  activeView === 'videos' ? 'bg-pink-500 text-white' : 'text-white hover:bg-white/10'
                }`}
              >
                <Video className="w-6 h-6" />
                <span className="hidden md:inline">Videos</span>
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 ml-12">
        {children}
      </div>
    </div>
  );
}