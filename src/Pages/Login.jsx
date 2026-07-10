// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Activity, Mail, Lock } from "lucide-react";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center p-4">
//       <div className="w-full max-w-md">
//         {/* Logo and Header */}
//         <div className="text-center mb-8">
//           <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-4">
//             <Activity className="w-8 h-8 text-white" />
//           </div>
//           <h1 className="text-3xl text-slate-900 mb-2">SmartMed AI</h1>
//           <p className="text-slate-600">Medicine Reminder & Health Tracker</p>
//         </div>

//         {/* Login Card */}
//         <div className="bg-white rounded-2xl shadow-lg border border-slate-200 md:p-8 p-4">
//           <h2 className="text-2xl text-slate-900 mb-6">Welcome Back</h2>

//           <form onSubmit={handleSubmit} className="space-y-5">
//             <div>
//               <label className="block text-slate-700 mb-2">Email</label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   placeholder="john@example.com"
//                   required
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-slate-700 mb-2">Password</label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
//                 <input
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   placeholder="••••••••"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="flex items-center justify-between">
//               <label className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
//                 />
//                 <span className="text-sm text-slate-600">Remember me</span>
//               </label>
//               <a href="#" className="text-sm text-blue-600 hover:text-blue-700">
//                 Forgot password?
//               </a>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all shadow-md"
//             >
//               Sign In
//             </button>
//           </form>

//           <div className="mt-6 text-center">
//             <p className="text-slate-600">
//               Don't have an account?{" "}
//               <Link to="/signup" className="text-blue-600 hover:text-blue-700">
//                 Sign up
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
// };

// export default Login;




import { SignIn, useUser } from "@clerk/react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../Components/Loader";

const Login = () => {
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
      {!isSignedIn && <SignIn  forceRedirectUrl="/dashboard" />}
    </div>
  );
};

export default Login;