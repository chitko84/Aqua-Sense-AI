/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Bell, Search, User, Database } from 'lucide-react';
import { isFirebaseConfigured } from '../lib/firebase';
import { useAuth } from '../contexts/AuthContext';

export default function Navbar() {
  const { profile } = useAuth();
  return (
    <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-100 fixed top-0 right-0 left-64 z-30 flex items-center justify-between px-10 shrink-0">
      <div className="flex items-center gap-4">
        {!isFirebaseConfigured && (
          <div className="flex items-center gap-2 px-3 py-1 bg-amber-50 text-amber-600 rounded-lg border border-amber-200 text-[10px] font-black uppercase tracking-widest animate-pulse">
            <Database className="w-3 h-3" />
            Sample Data Mode
          </div>
        )}
        <span className="px-4 py-1.5 bg-red-600 text-white rounded-lg text-[10px] font-black border border-red-500 flex items-center gap-3 tracking-[0.2em] shadow-xl shadow-red-100">
          <span className="w-2 h-2 bg-white rounded-full animate-ping"></span> PHASE 2 ALERT: ALOR SETAR CLUSTER
        </span>
      </div>

      <div className="flex items-center gap-8">
        <div className="hidden lg:flex items-center gap-2">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-cyan-500 transition-colors" />
            <input
              type="text"
              placeholder="Query sentinel network..."
              className="w-72 pl-12 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold focus:outline-none focus:ring-2 focus:ring-cyan-500/10 focus:border-cyan-500/50 transition-all placeholder:text-slate-300 tracking-tight"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <button className="p-2.5 text-slate-400 hover:bg-slate-900 hover:text-cyan-400 rounded-xl relative transition-all shadow-sm border border-transparent hover:border-slate-800">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-600 rounded-full border-2 border-white animate-pulse"></span>
          </button>
          <div className="h-8 w-px bg-slate-100"></div>
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="text-right">
              <p className="text-[11px] font-black text-slate-900 leading-none uppercase tracking-tighter group-hover:text-cyan-600 transition-colors">
                {profile?.name || 'Guest User'}
              </p>
              <p className="text-[9px] text-slate-400 font-bold mt-1 uppercase tracking-widest">
                {profile?.role === 'admin' ? 'Root Access: ACTIVE' : 'Portal Node: ONLINE'}
              </p>
            </div>
            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-cyan-400 border border-slate-800 shadow-xl group-hover:scale-105 transition-transform">
              <User className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
