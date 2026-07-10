import { useUser } from '@clerk/react';
import { 
  Activity, 
  Heart, 
  Droplet, 
  Footprints, 
  Pill, 
  AlertCircle,
  TrendingUp,
  Clock,
  Loader
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const activityData = [
  { day: 'Mon', steps: 6500 },
  { day: 'Tue', steps: 8200 },
  { day: 'Wed', steps: 7300 },
  { day: 'Thu', steps: 9100 },
  { day: 'Fri', steps: 7800 },
  { day: 'Sat', steps: 10500 },
  { day: 'Sun', steps: 8900 },
];

const todayMedicines = [
  { id: 1, name: 'Aspirin', time: '8:00 AM', dosage: '100mg', taken: true },
  { id: 2, name: 'Metformin', time: '12:00 PM', dosage: '500mg', taken: true },
  { id: 3, name: 'Lisinopril', time: '4:00 PM', dosage: '10mg', taken: false },
  { id: 4, name: 'Vitamin D', time: '8:00 PM', dosage: '1000 IU', taken: false },
];

const Dashboard=()=> {
  function capitalizeFirst(name) {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}


  const { user, isLoaded } = useUser();
  if (!isLoaded) return <Loader />;
  console.log(user)
  const userId = user.id;

  return (
    <div className="p-4 lg:p-8 space-y-6">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl text-slate-900 mb-2">Good Morning, Ashu👋</h1>
        <p className="text-slate-600">Here's your health summary for today</p>
      </div>

      {/* Health Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center">
              <Heart className="w-6 h-6 text-red-600" />
            </div>
            <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">Normal</span>
          </div>
          <p className="text-sm text-slate-600 mb-1">Heart Rate</p>
          <p className="text-2xl text-slate-900">72 <span className="text-sm text-slate-500">bpm</span></p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
              <Activity className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">Normal</span>
          </div>
          <p className="text-sm text-slate-600 mb-1">Blood Pressure</p>
          <p className="text-2xl text-slate-900">120/80 <span className="text-sm text-slate-500">mmHg</span></p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
              <Droplet className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-xs text-yellow-600 bg-yellow-50 px-2 py-1 rounded-full">Monitor</span>
          </div>
          <p className="text-sm text-slate-600 mb-1">Blood Sugar</p>
          <p className="text-2xl text-slate-900">105 <span className="text-sm text-slate-500">mg/dL</span></p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
              <Footprints className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
              <TrendingUp className="w-3 h-3 inline mr-1" />89%
            </span>
          </div>
          <p className="text-sm text-slate-600 mb-1">Steps Today</p>
          <p className="text-2xl text-slate-900">8,900 <span className="text-sm text-slate-500">/ 10,000</span></p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Today's Medicines */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Pill className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl text-slate-900">Today's Medicines</h2>
            </div>
            <span className="text-sm text-slate-500">2 of 4 taken</span>
          </div>

          <div className="space-y-3">
            {todayMedicines.map((med) => (
              <div
                key={med.id}
                className={`flex items-center gap-4 p-4 rounded-lg border ${
                  med.taken
                    ? 'bg-green-50 border-green-200'
                    : 'bg-slate-50 border-slate-200'
                }`}
              >
                <input
                  type="checkbox"
                  checked={med.taken}
                  readOnly
                  className="w-5 h-5 rounded border-slate-300 text-green-600 focus:ring-green-500"
                />
                <div className="flex-1">
                  <p className="text-slate-900">{med.name}</p>
                  <p className="text-sm text-slate-600">{med.dosage}</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Clock className="w-4 h-4" />
                  {med.time}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Suggestions & Alerts */}
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <AlertCircle className="w-5 h-5 text-orange-600" />
            <h2 className="text-xl text-slate-900">AI Insights</h2>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-900 mb-1">💧 Hydration Reminder</p>
              <p className="text-xs text-blue-700">You've only had 4 glasses of water today. Try to drink 2 more!</p>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <p className="text-sm text-purple-900 mb-1">📊 Blood Sugar Trend</p>
              <p className="text-xs text-purple-700">Your fasting glucose has been slightly elevated this week. Consider reviewing your diet.</p>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-sm text-green-900 mb-1">✅ Great Job!</p>
              <p className="text-xs text-green-700">You've taken all morning medications on time for 7 days straight!</p>
            </div>

            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <p className="text-sm text-orange-900 mb-1">⏰ Upcoming Dose</p>
              <p className="text-xs text-orange-700">Lisinopril due at 4:00 PM (in 2 hours)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Chart */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 mb-6">
          <Footprints className="w-5 h-5 text-green-600" />
          <h2 className="text-xl text-slate-900">Weekly Activity</h2>
        </div>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={activityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="day" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="steps" 
                stroke="#10b981" 
                strokeWidth={3}
                dot={{ fill: '#10b981', r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}



export default Dashboard