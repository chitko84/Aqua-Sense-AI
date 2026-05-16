/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  if (isLandingPage) {
    return <Outlet />;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />
      <Navbar />
      <main className="pl-64 pt-16 relative min-h-screen">
        <div className="p-8 pb-32">
          <Outlet />
        </div>

        {/* Prototype Demo Badges - Fixed Position */}
        <div className="fixed bottom-6 right-6 flex flex-col gap-2 z-50 pointer-events-none">
           {[
             { label: "Sample Data Mode", color: "bg-cyan-500/10 text-cyan-600 border-cyan-200" },
             { label: "External ML Simulation", color: "bg-indigo-500/10 text-indigo-600 border-indigo-200" },
             { label: "Gemini Explain Layer", color: "bg-violet-500/10 text-violet-600 border-violet-200" },
             { label: "Firebase Ready", color: "bg-orange-500/10 text-orange-600 border-orange-200" }
           ].map((badge, i) => (
             <div key={i} className={`px-4 py-2 rounded-lg ${badge.color} border backdrop-blur-md text-[9px] font-black uppercase tracking-[0.2em] shadow-xl shadow-slate-200/50 flex items-center justify-between min-w-[220px]`}>
                <span>{badge.label}</span>
                <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${badge.label === "Firebase Ready" ? 'bg-orange-500' : 'bg-current'}`}></div>
             </div>
           ))}
        </div>
      </main>
    </div>
  );
}
