// import { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router';
// import { Activity, Mail, Lock, User, Calendar, Users } from 'lucide-react';

// const Signup = () =>{
//       useEffect(() => {
//       window.scrollTo(0, 0);
//     }, []);
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     age: '',
//     gender: '',
//     medicalConditions: '',
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     navigate('/app');
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center p-4">
//       <div className="w-full max-w-2xl">
//         {/* Logo and Header */}
//         <div className="text-center mb-8">
//           <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-4">
//             <Activity className="w-8 h-8 text-white" />
//           </div>
//           <h1 className="text-3xl text-slate-900 mb-2">SmartMed AI</h1>
//           <p className="text-slate-600">Create your health tracking account</p>
//         </div>

//         {/* Signup Card */}
//         <div className="bg-white rounded-2xl shadow-lg border border-slate-200 md:p-8 p-4">
//           <h2 className="text-2xl text-slate-900 mb-6">Create Account</h2>

//           <form onSubmit={handleSubmit} className="md:space-y-5 space-y-3">
//             <div className="grid md:grid-cols-2 md:gap-5 gap-3">
//               <div>
//                 <label className="block text-slate-700 mb-2">Full Name</label>
//                 <div className="relative">
//                   <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     placeholder="John Doe"
//                     required
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-slate-700 mb-2">Email</label>
//                 <div className="relative">
//                   <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     placeholder="john@example.com"
//                     required
//                   />
//                 </div>
//               </div>
//             </div>

//             <div>
//               <label className="block text-slate-700 mb-2">Password</label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
//                 <input
//                   type="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   placeholder="••••••••"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="grid md:grid-cols-2 md:gap-5 gap-3">
//               <div>
//                 <label className="block text-slate-700 mb-2">Age</label>
//                 <div className="relative">
//                   <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
//                   <input
//                     type="number"
//                     name="age"
//                     value={formData.age}
//                     onChange={handleChange}
//                     className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     placeholder="25"
//                     required
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-slate-700 mb-2">Gender</label>
//                 <div className="relative">
//                   <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
//                   <select
//                     name="gender"
//                     value={formData.gender}
//                     onChange={handleChange}
//                     className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
//                     required
//                   >
//                     <option value="">Select gender</option>
//                     <option value="male">Male</option>
//                     <option value="female">Female</option>
//                     <option value="other">Other</option>
//                   </select>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <label className="block text-slate-700 mb-2">Medical Conditions (Optional)</label>
//               <textarea
//                 name="medicalConditions"
//                 value={formData.medicalConditions}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
//                 placeholder="e.g., Diabetes, Hypertension, Allergies..."
//                 rows={3}
//               />
//             </div>

//             <div className="flex items-start gap-2">
//               <input type="checkbox" className="mt-1 rounded border-slate-300 text-blue-600 focus:ring-blue-500" required />
//               <span className="text-sm text-slate-600">
//                 I agree to the Terms of Service and Privacy Policy
//               </span>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all shadow-md"
//             >
//               Create Account
//             </button>
//           </form>

//           <div className="mt-6 text-center">
//             <p className="text-slate-600">
//               Already have an account?{' '}
//               <Link to="/login" className="text-blue-600 hover:text-blue-700">
//                 Sign in
//               </Link>
//             </p>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="text-center mt-6">
//           <Link to="/" className="text-sm text-slate-500 hover:text-slate-700">
//             ← Back to Home
//           </Link>
//         </div>
//         <p className="text-center text-sm text-slate-500 mt-2">
//           © 2026 SmartMed AI. All rights reserved.
//         </p>
//       </div>
//     </div>
//   );
// }
// export default Signup

import { SignIn, SignUp, useUser } from "@clerk/react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../Components/Loader";

const Signup = () => {
  const { isLoaded, isSignedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      navigate("/dashboard");
    }
  }, [isLoaded, isSignedIn, navigate]);

  if (!isLoaded) {
    return <Loader/>;
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      {!isSignedIn && <SignUp />}
    </div>
  );
};

export default Signup;
