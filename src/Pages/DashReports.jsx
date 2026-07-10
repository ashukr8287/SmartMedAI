import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Calendar, Pill, Activity, Download } from 'lucide-react';

const weeklyHealthData = [
  { week: 'Week 1', avgBP: 118, avgSugar: 102, avgHeart: 70 },
  { week: 'Week 2', avgBP: 120, avgSugar: 105, avgHeart: 72 },
  { week: 'Week 3', avgBP: 119, avgSugar: 108, avgHeart: 71 },
  { week: 'Week 4', avgBP: 121, avgSugar: 106, avgHeart: 73 },
];

const medicineAdherenceData = [
  { name: 'Taken on Time', value: 85, color: '#10b981' },
  { name: 'Taken Late', value: 10, color: '#f59e0b' },
  { name: 'Missed', value: 5, color: '#ef4444' },
];

const monthlyActivityData = [
  { month: 'Jan', steps: 245000 },
  { month: 'Feb', steps: 268000 },
  { month: 'Mar', steps: 89000 },
];


const DashReports = () => {
  return (
    <div className="p-4 lg:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl text-slate-900 mb-2">Health Reports</h1>
          <p className="text-slate-600">Comprehensive analysis of your health data</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 shadow-md">
          <Download className="w-5 h-5" />
          Export Report
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
              <Activity className="w-5 h-5" />
            </div>
            <span className="text-sm opacity-90">Avg Blood Pressure</span>
          </div>
          <p className="text-3xl mb-1">120/80</p>
          <p className="text-sm opacity-75">mmHg • Last 30 days</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            <span className="text-sm opacity-90">Avg Blood Sugar</span>
          </div>
          <p className="text-3xl mb-1">105</p>
          <p className="text-sm opacity-75">mg/dL • Last 30 days</p>
        </div>

        <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
              <Activity className="w-5 h-5" />
            </div>
            <span className="text-sm opacity-90">Avg Heart Rate</span>
          </div>
          <p className="text-3xl mb-1">72</p>
          <p className="text-sm opacity-75">bpm • Last 30 days</p>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
              <Pill className="w-5 h-5" />
            </div>
            <span className="text-sm opacity-90">Medication Adherence</span>
          </div>
          <p className="text-3xl mb-1">85%</p>
          <p className="text-sm opacity-75">Last 30 days</p>
        </div>
      </div>

 

      {/* Monthly Activity */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 mb-6">
          <Activity className="w-5 h-5 text-green-600" />
          <h2 className="text-xl text-slate-900">Monthly Steps Activity</h2>
        </div>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyActivityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Bar dataKey="steps" fill="#10b981" name="Total Steps" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Statistics Summary */}
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <h3 className="text-slate-900 mb-4">Health Metrics Status</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600">Blood Pressure</span>
              <span className="text-xs text-green-600 bg-green-50 px-3 py-1 rounded-full">Normal</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600">Blood Sugar</span>
              <span className="text-xs text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full">Monitor</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600">Heart Rate</span>
              <span className="text-xs text-green-600 bg-green-50 px-3 py-1 rounded-full">Normal</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600">Activity Level</span>
              <span className="text-xs text-green-600 bg-green-50 px-3 py-1 rounded-full">Good</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <h3 className="text-slate-900 mb-4">This Month Summary</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600">Total Readings</span>
              <span className="text-slate-900">124</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600">Medicines Taken</span>
              <span className="text-slate-900">85/90</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600">Total Steps</span>
              <span className="text-slate-900">89,000</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600">Active Days</span>
              <span className="text-slate-900">9/10</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <h3 className="text-slate-900 mb-4">AI Recommendations</h3>
          <div className="space-y-3 text-sm">
            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-blue-900">Keep up the good work with your medication adherence!</p>
            </div>
            <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-yellow-900">Blood sugar levels trending slightly high. Consult your doctor.</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg border border-green-200">
              <p className="text-green-900">Your activity level is excellent this week!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DashReports;