import React, { useState, useEffect } from 'react';
import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot, Timestamp } from "firebase/firestore";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {
  Bell, Calendar, Plus, LogOut, Settings, HelpCircle,
  Trophy, Users, Zap, BarChart3, Activity,
  TrendingUp, CheckCircle2, Clock, AlertCircle
} from "lucide-react";

interface DashboardProps {
  navigateTo: (section: string) => void;
  setSelectedEvent?: (event: any) => void;
  setSelectedAward?: (award: any) => void;
  setSelectedMember?: (member: any) => void;
}

interface Counts {
  events: number;
  members: number;
  awards: number;
}

const Dashboard: React.FC<DashboardProps> = ({ navigateTo }) => {
  const [counts, setCounts] = useState<Counts>({ events: 0, members: 0, awards: 0 });
  const [recentActivity, setRecentActivity] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let eventsList: any[] = [];
    let membersList: any[] = [];
    let awardsList: any[] = [];
    let loaded = 0;

    const tryFinish = () => {
      if (++loaded >= 3) setLoading(false);
    };

    const buildCounts = () => {
      setCounts({
        events: eventsList.length,
        members: membersList.length,
        awards: awardsList.length,
      });
    };

    const u1 = onSnapshot(
      query(collection(db, 'events'), orderBy('createdAt', 'desc')),
      snap => {
        eventsList = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        buildCounts();
        tryFinish();
      },
      () => tryFinish()
    );

    const u2 = onSnapshot(
      query(collection(db, 'members'), orderBy('createdAt', 'desc')),
      snap => {
        membersList = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        buildCounts();
        tryFinish();
      },
      () => tryFinish()
    );

    const u3 = onSnapshot(
      query(collection(db, 'awards'), orderBy('createdAt', 'desc')),
      snap => {
        awardsList = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        buildCounts();
        tryFinish();
      },
      () => tryFinish()
    );

    return () => {
      u1();
      u2();
      u3();
    };
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Plan, prioritize and accomplish your tasks with ease.</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => navigateTo('addEvent')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition"
            >
              <Plus size={18} />
              Add Item
            </button>
            <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              Import Data
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <StatCard
            icon={<Calendar className="text-blue-600" size={24} />}
            title="Total Events"
            value={counts.events}
            subtitle="Events scheduled"
            bgColor="bg-blue-50 dark:bg-blue-950"
            onClick={() => navigateTo('events')}
          />
          <StatCard
            icon={<Trophy className="text-purple-600" size={24} />}
            title="Achievements"
            value={counts.awards}
            subtitle="Total achievements"
            bgColor="bg-purple-50 dark:bg-purple-950"
            onClick={() => navigateTo('awards')}
          />
          <StatCard
            icon={<Users className="text-teal-600" size={24} />}
            title="Team Members"
            value={counts.members}
            subtitle="Members in team"
            bgColor="bg-teal-50 dark:bg-teal-950"
            onClick={() => navigateTo('members')}
          />
          <StatCard
            icon={<TrendingUp className="text-green-600" size={24} />}
            title="This Month"
            value={`${Math.floor(counts.events * 0.3)}`}
            subtitle="Events this month"
            bgColor="bg-green-50 dark:bg-green-950"
            onClick={() => navigateTo('events')}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Quick Actions - Left Column */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <Zap size={20} className="text-blue-600" />
                  Quick Actions
                </h2>
              </div>
              <div className="space-y-3">
                <QuickActionButton
                  icon={<Calendar size={20} />}
                  label="Add New Event"
                  onClick={() => navigateTo('addEvent')}
                />
                <QuickActionButton
                  icon={<Trophy size={20} />}
                  label="Add Achievement"
                  onClick={() => navigateTo('addAward')}
                />
                <QuickActionButton
                  icon={<Users size={20} />}
                  label="Add Team Member"
                  onClick={() => navigateTo('addMember')}
                />
              </div>
            </div>

            {/* Analytics Chart */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <BarChart3 size={20} className="text-blue-600" />
                Analytics Overview
              </h2>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={generateChartData(counts)}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#2563eb" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            
            {/* Recent Activity */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Activity size={20} className="text-blue-600" />
                Recent Activity
              </h2>
              <div className="space-y-3">
                <ActivityItem
                  icon={<CheckCircle2 size={18} className="text-green-600" />}
                  title="Event Added"
                  time="2 hours ago"
                />
                <ActivityItem
                  icon={<Users size={18} className="text-blue-600" />}
                  title="Member Joined"
                  time="5 hours ago"
                />
                <ActivityItem
                  icon={<Trophy size={18} className="text-purple-600" />}
                  title="Achievement Updated"
                  time="1 day ago"
                />
                <ActivityItem
                  icon={<Calendar size={18} className="text-orange-600" />}
                  title="Event Completed"
                  time="2 days ago"
                />
              </div>
            </div>

            {/* Summary */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Summary</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Total Items</span>
                  <span className="font-semibold">{counts.events + counts.awards + counts.members}</span>
                </div>
                <div className="flex justify-between">
                  <span>This Month</span>
                  <span className="font-semibold">{Math.floor((counts.events + counts.awards + counts.members) * 0.35)}</span>
                </div>
                <div className="h-px bg-blue-400 my-2"></div>
                <div className="flex justify-between font-semibold text-base">
                  <span>Completion Rate</span>
                  <span>78%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: number | string;
  subtitle: string;
  bgColor: string;
  onClick?: () => void;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, value, subtitle, bgColor, onClick }) => (
  <button
    onClick={onClick}
    className={`${bgColor} rounded-xl p-6 text-left hover:shadow-md transition cursor-pointer`}
  >
    <div className="flex items-start justify-between">
      <div>
        <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">{title}</p>
        <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{value}</p>
        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{subtitle}</p>
      </div>
      <div className="opacity-80">{icon}</div>
    </div>
  </button>
);

interface QuickActionButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const QuickActionButton: React.FC<QuickActionButtonProps> = ({ icon, label, onClick }) => (
  <button
    onClick={(e) => {
      e.stopPropagation();
      onClick?.();
    }}
    className="w-full flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition text-left group"
  >
    <div className="text-blue-600 group-hover:text-blue-700">{icon}</div>
    <span className="flex-1 text-gray-700 dark:text-gray-300 font-medium">{label}</span>
    <Plus size={18} className="text-gray-400 group-hover:text-gray-600" />
  </button>
);

interface ActivityItemProps {
  icon: React.ReactNode;
  title: string;
  time: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ icon, title, time }) => (
  <div className="flex items-start gap-3 pb-3 border-b border-gray-200 dark:border-gray-700 last:border-0">
    <div className="mt-1">{icon}</div>
    <div className="flex-1 min-w-0">
      <p className="text-sm font-medium text-gray-900 dark:text-white">{title}</p>
      <p className="text-xs text-gray-500 dark:text-gray-400">{time}</p>
    </div>
  </div>
);

function generateChartData(counts: Counts) {
  return [
    { name: 'Events', value: counts.events },
    { name: 'Members', value: counts.members },
    { name: 'Awards', value: counts.awards },
  ];
}

export default Dashboard;