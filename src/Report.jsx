import React, { useState } from 'react';
import { TrendingUp, FileText, Download, DollarSign, PieChart as PieChartIcon } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Report = () => {
  const [selectedYear, setSelectedYear] = useState('2023');

  const financialData = {
    2021: { revenue: 450, profit: 85, eps: 12.5, dividend: 5 },
    2022: { revenue: 580, profit: 115, eps: 16.8, dividend: 6.5 },
    2023: { revenue: 720, profit: 155, eps: 22.4, dividend: 8 },
  };

  const revenueData = [
    { year: '2019', revenue: 320, profit: 55 },
    { year: '2020', revenue: 380, profit: 68 },
    { year: '2021', revenue: 450, profit: 85 },
    { year: '2022', revenue: 580, profit: 115 },
    { year: '2023', revenue: 720, profit: 155 },
  ];

  const quarterlyData = [
    { quarter: 'Q1', revenue: 165, profit: 32 },
    { quarter: 'Q2', revenue: 178, profit: 38 },
    { quarter: 'Q3', revenue: 192, profit: 42 },
    { quarter: 'Q4', revenue: 185, profit: 43 },
  ];

  const segmentData = [
    { name: 'Product Sales', value: 45 },
    { name: 'Services', value: 35 },
    { name: 'Licensing', value: 20 },
  ];

  const reports = [
    { year: 2023, type: 'Annual Report', file: 'annual_report_2023.pdf' },
    { year: 2023, type: 'Q4 Earnings', file: 'q4_2023_earnings.pdf' },
    { year: 2022, type: 'Annual Report', file: 'annual_report_2022.pdf' },
    { year: 2022, type: 'Q4 Earnings', file: 'q4_2022_earnings.pdf' },
    { year: 2021, type: 'Annual Report', file: 'annual_report_2021.pdf' },
  ];

  const colors = ['#3b82f6', '#10b981', '#f59e0b'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header & Navigation */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">ABC Corporation Pvt Ltd</h1>
          </div>
<div className="hidden md:flex gap-[30px] text-gray-700">
  <a href="#home" className="hover:text-blue-600 transition">Home</a>
  <a href="#about" className="hover:text-blue-600 transition">About</a>
  <a href="#highlights" className="hover:text-blue-600 transition">Reports</a>
  <a href="#investor" className="hover:text-blue-600 transition">Investors</a>
  <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
</div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Transparent Financial Insights</h2>
        <p className="text-lg mb-8 text-blue-100">Committed to transparency and stakeholder trust</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Latest Report</button>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Quarterly Results</button>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Investor Info</button>
        </div>
      </section>

      {/* Key Financial Highlights */}
      <section id="highlights" className="max-w-7xl mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Key Financial Highlights</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-blue-500">
            <p className="text-gray-600 text-sm font-semibold">Revenue</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">${financialData[selectedYear].revenue}M</p>
            <p className="text-green-600 text-sm mt-1">↑ 24% YoY</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-green-500">
            <p className="text-gray-600 text-sm font-semibold">Net Profit</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">${financialData[selectedYear].profit}M</p>
            <p className="text-green-600 text-sm mt-1">↑ 35% YoY</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-purple-500">
            <p className="text-gray-600 text-sm font-semibold">EPS</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">${financialData[selectedYear].eps}</p>
            <p className="text-green-600 text-sm mt-1">↑ 33% YoY</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-orange-500">
            <p className="text-gray-600 text-sm font-semibold">Dividend</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">${financialData[selectedYear].dividend}</p>
            <p className="text-green-600 text-sm mt-1">↑ 23% YoY</p>
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-12">
          {Object.keys(financialData).map(year => (
            <button key={year} onClick={() => setSelectedYear(year)} className={`px-6 py-2 rounded-lg font-semibold transition ${selectedYear === year ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-300'}`}>
              {year}
            </button>
          ))}
        </div>
      </section>

      {/* Interactive Charts */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Financial Performance</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="bg-blue-50 p-8 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">Revenue & Profit Trends</h4>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="revenue" stroke="#3b82f6" />
                  <Line type="monotone" dataKey="profit" stroke="#10b981" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-green-50 p-8 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">Revenue by Segment</h4>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie data={segmentData} cx="50%" cy="50%" outerRadius={100} dataKey="value">
                    {segmentData.map((entry, index) => <Cell key={index} fill={colors[index]} />)}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="bg-purple-50 p-8 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-gray-900 mb-6">Quarterly Performance</h4>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={quarterlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="quarter" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" fill="#3b82f6" />
                <Bar dataKey="profit" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Downloadable Reports */}
      <section id="reports" className="max-w-7xl mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Download Reports</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reports.map((report, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <p className="text-sm text-gray-600">Year {report.year}</p>
              <p className="text-lg font-bold text-gray-900 mt-2">{report.type}</p>
              <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold">Download PDF</button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 FinanceHub Corp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Report;