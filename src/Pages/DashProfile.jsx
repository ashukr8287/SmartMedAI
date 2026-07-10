import { useState } from "react";
import {
  User,
  Mail,
  Calendar,
  Users,
  Heart,
  Bell,
  Shield,
  Edit2,
  Loader,
} from "lucide-react";
import { useUser } from "@clerk/react";

const DashProfile = () => {
  const { user, isLoaded } = useUser();
  const [editing, setEditing] = useState(false);

  if (!isLoaded) return <Loader />;
  console.log(user);
  return (
    <div className="p-4 lg:p-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl text-slate-900 mb-2">Profile & Settings</h1>
        <p className="text-slate-600">
          Manage your personal information and preferences
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
            <div className="text-center mb-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-3xl mx-auto mb-4">
                JD
              </div>
              <h2 className="text-xl text-slate-900 mb-1">
                {user?.fullName || "user"}
              </h2>
              <p className="text-slate-600">
                {user?.primaryEmailAddress.emailAddress || "Null"}
              </p>
            </div>

            <div className="space-y-3 pt-6 border-t border-slate-200">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Member since</span>
                <span className="text-slate-900">Jan 2026</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Total Medications</span>
                <span className="text-slate-900">4</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Health Records</span>
                <span className="text-slate-900">124</span>
              </div>
            </div>

            <button
              onClick={() => setEditing(!editing)}
              className="w-full mt-6 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600"
            >
              <Edit2 className="w-4 h-4" />
              {editing ? "Cancel Edit" : "Edit Profile"}
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information */}
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <User className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl text-slate-900">Personal Information</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-slate-700 mb-2">Full Name</label>
                <input
                  type="text"
                  defaultValue={user?.fullName || "user"}
                  disabled={!editing}
                  className={`w-full px-4 py-3 border border-slate-300 rounded-lg ${
                    editing
                      ? "focus:outline-none focus:ring-2 focus:ring-blue-500"
                      : "bg-slate-50 cursor-not-allowed"
                  }`}
                />
              </div>

              <div>
                <label className="block text-slate-700 mb-2">Email</label>
                <input
                  type="email"
                  defaultValue={
                    user?.primaryEmailAddress.emailAddress || "Null"
                  }
                  disabled={!editing}
                  className={`w-full px-4 py-3 border border-slate-300 rounded-lg ${
                    editing
                      ? "focus:outline-none focus:ring-2 focus:ring-blue-500"
                      : "bg-slate-50 cursor-not-allowed"
                  }`}
                />
              </div>

              <div>
                <label className="block text-slate-700 mb-2">Age</label>
                <input
                  type="number"
                  defaultValue="35"
                  disabled={!editing}
                  className={`w-full px-4 py-3 border border-slate-300 rounded-lg ${
                    editing
                      ? "focus:outline-none focus:ring-2 focus:ring-blue-500"
                      : "bg-slate-50 cursor-not-allowed"
                  }`}
                />
              </div>

              <div>
                <label className="block text-slate-700 mb-2">Gender</label>
                <select
                  defaultValue="male"
                  disabled={!editing}
                  className={`w-full px-4 py-3 border border-slate-300 rounded-lg ${
                    editing
                      ? "focus:outline-none focus:ring-2 focus:ring-blue-500"
                      : "bg-slate-50 cursor-not-allowed"
                  }`}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  defaultValue="+1 (555) 123-4567"
                  disabled={!editing}
                  className={`w-full px-4 py-3 border border-slate-300 rounded-lg ${
                    editing
                      ? "focus:outline-none focus:ring-2 focus:ring-blue-500"
                      : "bg-slate-50 cursor-not-allowed"
                  }`}
                />
              </div>

              <div>
                <label className="block text-slate-700 mb-2">Blood Type</label>
                <select
                  defaultValue="o+"
                  disabled={!editing}
                  className={`w-full px-4 py-3 border border-slate-300 rounded-lg ${
                    editing
                      ? "focus:outline-none focus:ring-2 focus:ring-blue-500"
                      : "bg-slate-50 cursor-not-allowed"
                  }`}
                >
                  <option value="a+">A+</option>
                  <option value="a-">A-</option>
                  <option value="b+">B+</option>
                  <option value="b-">B-</option>
                  <option value="ab+">AB+</option>
                  <option value="ab-">AB-</option>
                  <option value="o+">O+</option>
                  <option value="o-">O-</option>
                </select>
              </div>
            </div>

            {editing && (
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setEditing(false)}
                  className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600">
                  Save Changes
                </button>
              </div>
            )}
          </div>

          {/* Notification Settings */}
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <Bell className="w-5 h-5 text-yellow-600" />
              <h2 className="text-xl text-slate-900">
                Notification Preferences
              </h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-slate-200">
                <div>
                  <p className="text-slate-900">Medicine Reminders</p>
                  <p className="text-sm text-slate-600">
                    Get notified when it's time to take your medicine
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-slate-200">
                <div>
                  <p className="text-slate-900">Health Metrics Alerts</p>
                  <p className="text-sm text-slate-600">
                    Alert me when health metrics are abnormal
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-slate-200">
                <div>
                  <p className="text-slate-900">Weekly Reports</p>
                  <p className="text-sm text-slate-600">
                    Receive weekly health summary via email
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="text-slate-900">AI Suggestions</p>
                  <p className="text-sm text-slate-600">
                    Get AI-powered health insights and tips
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashProfile;
