import { Section } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Pill,
  Activity,
  FileText,
  User,
  Menu,
  X,
  LogOut,
  Bell,
} from "lucide-react";
import { SignOutButton, useUser } from "@clerk/react";
import Loader from "./Loader";

function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const { user, isLoaded } = useUser();

  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { path: "/dashboard/medicines", label: "Medicines", icon: Pill },
    { path: "/dashboard/reports", label: "Reports", icon: FileText },
    { path: "/dashboard/profile", label: "Profile", icon: User },
  ];

  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);
  if (!isLoaded) return <Loader />;
  return (
    <>
      <div className="min-h-screen">
        <div className="flex">
          {/* right */}
          <section className="lg:flex flex-col w-64 h-screen  fixed border border-stone-200 hidden">
            <header className="flex items-center py-4.5 border-b border-stone-200 px-6 gap-2 cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Activity className="w-6 h-8 text-white" />
              </div>
              <div>
                <span className="text-md block text-black font-semibold ">
                  SmartMed AI
                </span>
                <span className=" block text-xs text-slate-500  ">
                  Health Tracker
                </span>
              </div>
            </header>
            <div className="flex-1 p-4 overflow-y-auto">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className={` flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${location.pathname === item.path ? "bg-blue-50 text-blue-600" : "text-slate-600 hover:bg-slate-50"}`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
            {/* hello */}
            <div className="p-4 py-2 border-t border-slate-200 hover:bg-slate-100">
              <SignOutButton>
                <button className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-slate-600 transition-colors">
                  <LogOut className="w-5 h-5" />
                  <span>Sign Out</span>
                </button>
              </SignOutButton>
            </div>
          </section>

          {/* Sidebar - Mobile */}
          {sidebarOpen && (
            <>
              <div
                className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                onClick={() => setSidebarOpen(false)}
              />
              <aside className="fixed inset-y-0 left-0 w-64 bg-white z-50 lg:hidden flex flex-col">
                <div className="p-4 border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Activity className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h1 className="text-lg text-slate-900">SmartMed AI</h1>
                      <p className="text-xs text-slate-500">Health Tracker</p>
                    </div>
                  </div>
                  <button onClick={() => setSidebarOpen(false)}>
                    <X className="w-6 h-6 text-slate-600" />
                  </button>
                </div>

                <nav className="flex-1 p-4 space-y-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.path}
                      className={` flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${location.pathname.startsWith(item.path) ? "bg-blue-50 text-blue-600" : "text-slate-600 hover:bg-slate-50"}`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </nav>

                <div className="p-4 py-2 border-t border-slate-200 hover:bg-slate-100">
                  <SignOutButton>
                    <button className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-slate-600 transition-colors">
                      <LogOut className="w-5 h-5" />
                      <span>Sign Out</span>
                    </button>
                  </SignOutButton>
                </div>
              </aside>
            </>
          )}

          {/* left */}
          <section className=" min-h-screen flex-1 lg:pl-64 ">
            <header className="bg-white border-b border-slate-200 px-4 lg:px-8 py-4 fixed top-0 right-0 left-0 lg:left-64">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setSidebarOpen(true)}
                    className="lg:hidden p-2 hover:bg-slate-100 rounded-lg"
                  >
                    <Menu className="w-6 h-6 text-slate-600" />
                  </button>
                  <div className="hidden lg:block">
                    <p className="text-sm text-slate-500">Welcome back,</p>
                    <h2 className="text-slate-900">
                      {user?.fullName || "Guest"}
                    </h2>{" "}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button className="relative p-2 hover:bg-slate-100 rounded-lg">
                    <Bell className="w-5 h-5 text-slate-600" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                  </button>
                  <div className="hidden sm:flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white">
                      <img
                        src={user.imageUrl}
                        alt=""
                        className="rounded-full w-full "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <section className="h-full pt-20 px-4 md:px-6">
              <Outlet />
            </section>
          </section>
        </div>
      </div>
    </>
  );
}

export default DashboardLayout;
