import React, { useState } from "react";
import { 
  FileText, 
  Search, 
  Download, 
  ExternalLink, 
  TrendingUp, 
  ShieldCheck, 
  Users 
} from "lucide-react";

const FinancialReport2 = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const annual = [2024, 2023, 2022, 2021, 2020];
  const proxy = [2025, 2024, 2023, 2022, 2021];
  const management = ["Q3 2025", "Q2 2025", "Q1 2025", "Q4 2024"];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex font-sans text-slate-900">
      {/* Sleek Sidebar
      <aside className="w-64 bg-white border-r border-slate-200 hidden lg:flex flex-col p-6 sticky top-0 h-screen">
        <div className="mb-10 flex items-center gap-2 font-bold text-xl text-blue-600">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-xs">AI</div>
          <span>TechCorp</span>
        </div>
        
        <nav className="space-y-1 flex-1">
          <NavItem icon={<TrendingUp size={18}/>} label="Overview" />
          <NavItem icon={<Users size={18}/>} label="Leadership" />
          <NavItem icon={<ShieldCheck size={18}/>} label="Governance" />
          <div className="pt-6 pb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Financials</div>
          <NavItem icon={<FileText size={18}/>} label="Financial Reports" active />
          <NavItem icon={<Search size={18}/>} label="SEC Filings" />
        </nav>

        <div className="mt-auto p-4 bg-blue-50 rounded-xl">
          <p className="text-xs font-semibold text-blue-700">IR Support</p>
          <p className="text-[10px] text-blue-600 mt-1">ir@techcorp.io</p>
        </div>
      </aside> */}

      {/* Main Content - Full Width */}
      <main className="flex-1 p-8 lg:p-12 w-full">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Financial Reports</h1>
            <p className="text-slate-500 mt-2">Access our latest annual filings, proxy statements, and quarterly earnings.</p>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search reports..."
              className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-64 transition-all"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </header>

        {/* Featured Card (Latest Report) */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-blue-700 to-indigo-900 rounded-3xl p-8 text-white flex flex-col md:flex-row justify-between items-center gap-8 shadow-xl shadow-blue-100">
            <div>
              <span className="bg-blue-400/20 text-blue-100 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Latest Update</span>
              <h2 className="text-3xl font-bold mt-4">2024 Annual Impact Report</h2>
              <p className="text-blue-100 mt-2 max-w-md">A comprehensive review of our fiscal performance and strategic roadmap for 2025.</p>
              <div className="flex gap-4 mt-8">
                <button className="bg-white text-blue-900 px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-50 transition-colors">
                  <Download size={18} /> Download PDF
                </button>
                <button className="text-white border border-white/30 px-6 py-2.5 rounded-xl font-bold hover:bg-white/10 transition-colors">
                  Interactive View
                </button>
              </div>
            </div>
            <div className="hidden md:block w-48 h-64 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm shadow-inner overflow-hidden relative rotate-3">
               <div className="absolute inset-x-0 top-0 h-12 bg-white/20 flex items-center px-4 text-[10px] font-mono opacity-50">FINANCIALS_FY24.PDF</div>
               <div className="p-4 space-y-4 pt-16">
                  <div className="h-2 w-full bg-white/20 rounded"></div>
                  <div className="h-2 w-3/4 bg-white/20 rounded"></div>
                  <div className="h-2 w-1/2 bg-white/20 rounded"></div>
               </div>
            </div>
          </div>
        </section>

        {/* Report Sections - Full Width */}
        <div className="space-y-8">
          <ReportCard title="Annual Reports" data={annual} suffix="Annual Report" />
          <ReportCard title="Proxy Materials" data={proxy} suffix="Proxy Statement" />
          <ReportCard title="Earnings Reports" data={management} suffix="Management Report" />
        </div>
      </main>
    </div>
  );
}

// Sub-components for cleaner code
function NavItem({ icon, label, active = false }) {
  return (
    <div className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all ${
      active ? "bg-blue-50 text-blue-600 font-bold" : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
    }`}>
      {icon}
      <span className="text-sm">{label}</span>
    </div>
  );
}

function ReportCard({ title, data, suffix }) {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow w-full">
      <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center justify-between">
        {title}
        <ExternalLink size={16} className="text-slate-300" />
      </h3>
      {/* 2 Cards Per Row with Fixed Dimensions */}
      <div className="grid grid-cols-2 gap-4">
        {data.map((year, i) => (
          <a 
            key={i} 
            href="#" 
            className="group flex items-center justify-between rounded-2xl hover:bg-slate-50 border border-slate-200 hover:border-blue-200 transition-all"
            style={{ height: '50px', width: '200px' }}
          >
            <div className="flex items-center gap-2 px-3">
              <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500 group-hover:bg-red-50 group-hover:text-red-600 transition-colors flex-shrink-0">
                <FileText size={16} />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-xs font-bold text-slate-700 leading-tight">{year}</p>
                <p className="text-[9px] text-slate-400 uppercase tracking-tight leading-tight">{suffix}</p>
              </div>
            </div>
            <Download size={14} className="text-slate-300 group-hover:text-blue-600 transition-colors mr-3 flex-shrink-0" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default FinancialReport2;