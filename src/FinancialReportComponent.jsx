import React, { useState } from 'react';
import { ChevronDown, Download } from 'lucide-react';

const FinancialReportComponent = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredBtn, setHoveredBtn] = useState(null);
  const [activeBtn, setActiveBtn] = useState(null);
  const [hoveredCloseBtn, setHoveredCloseBtn] = useState(false);

  const financialData = [
    { year: 2026, pdfUrl: '/reports/financial-report-2026.pdf' },
    { year: 2025, pdfUrl: '/reports/financial-report-2025.pdf' },
    { year: 2023, pdfUrl: '/reports/financial-report-2023.pdf' },
    { year: 2024, pdfUrl: '/reports/financial-report-2024.pdf' },
    { year: 2022, pdfUrl: '/reports/financial-report-2022.pdf' },
    { year: 2021, pdfUrl: '/reports/financial-report-2021.pdf' },
  ];

  const handleDownload = (pdfUrl) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `financial-report-${new Date().getFullYear()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Inline styles
  const containerStyle = {
    maxWidth: '100%',
    margin: '0 auto',
    padding: '50px 10px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    background: 'linear-gradient(135deg, #ecf1a2 0%, #6d96d8 100%)',
    minHeight: '100vh',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '10px',
  };

  const h1Style = {
    fontSize: '2.5rem',
    color: '#000000',
    margin: '0 0 10px 0',
    fontWeight: '700',
  };

    const h22Style = {
    fontSize: '1.5rem',
    color: '#000000',
    margin: '0 0 10px 0',
    fontWeight: '700',
  };

  const headerPStyle = {
    fontSize: '1.2rem',
    color: '#4a5568',
    margin: '0',
  };

  const reportsGridStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '80px',
    marginBottom: '0px',
    marginTop: '0px',
  };

  const getReportCardStyle = (year) => ({
    background: selectedYear === year ? '#edf2f7' : 'white',
    borderRadius: '12px',
    padding: '0px',
    boxShadow: hoveredCard === year ? '0 25px 20px rgba(0, 0, 0, 0.15)' : '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    border: selectedYear === year ? '3px solid #2d3748' : hoveredCard === year ? '3px solid #f82323' : '3px solid transparent',
    transform: hoveredCard === year ? 'translateY(10px)' : 'translateY(0)',
    width: '400px',
    height: '70px',
  });

  const reportYearStyle = {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#1d3155',
    marginBottom: '10px',
  };

  const reportTextStyle = {
    fontSize: '.5rem',
    color: '#075bda',
    margin: '0 0 13px 0',
  };

  const getDownloadBtnStyle = (year) => ({
    width: '30%',
    padding: '0px 0px',
    background: 'linear-gradient(135deg, #8bea66 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    transform: activeBtn === year ? 'scale(0.98)' : hoveredBtn === year ? 'scale(1.02)' : 'scale(1)',
    boxShadow: hoveredBtn === year ? '0 8px 15px rgba(102, 126, 234, 0.4)' : 'none',
  });

  const reportDetailsStyle = {
    background: 'white',
    borderRadius: '12px',
    padding: '30px',
    marginTop: '0px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    animation: 'slideIn 0.3s ease',
  };

  const detailsH2Style = {
    color: '#1a202c',
    marginTop: '0',
    fontSize: '1.8rem',
  };

  const detailsPStyle = {
    color: '#4a5568',
    fontSize: '1rem',
    lineHeight: '1.6',
  };

  const getCloseBtnStyle = () => ({
    marginTop: '5px',
    padding: '10px 20px',
    background: hoveredCloseBtn ? '#cbd5e0' : '#e2e8f0',
    color: hoveredCloseBtn ? '#1a202c' : '#2d3748',
    border: 'none',
    borderRadius: '8px',
    fontSize: '0.95rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  });

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1 style={h1Style}>ABC Company Pvt. Ltd.</h1>
        <h3 style={h22Style}>Financial Statement</h3>
        <p style={{ ...headerPStyle, color: '#3b82f6' }}>Access our financial reports</p>
      </header>

      <div style={reportsGridStyle}>
        {financialData.map((report) => (
          <div
            key={report.year}
            style={getReportCardStyle(report.year)}
            // onClick={() => setSelectedYear(report.year)}
            onMouseEnter={() => setHoveredCard(report.year)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={reportYearStyle}>Financial Report {report.year}</div>
            <p style={reportTextStyle}></p>
            <button
              style={getDownloadBtnStyle(report.year)}
              onClick={(e) => {
                e.stopPropagation();
                handleDownload(report.pdfUrl);
              }}
              onMouseEnter={() => setHoveredBtn(report.year)}
              onMouseLeave={() => {
                setHoveredBtn(null);
                setActiveBtn(null);
              }}
              onMouseDown={() => setActiveBtn(report.year)}
              onMouseUp={() => setActiveBtn(null)}
            >
              Download PDF
            </button>
          </div>
        ))}
      </div>

      {selectedYear && (
        <div style={reportDetailsStyle}>
          <h2 style={detailsH2Style}>Report for {selectedYear}</h2>
          <p style={detailsPStyle}>You have selected the financial report for {selectedYear}.</p>
          <button
            style={getCloseBtnStyle()}
            onClick={() => setSelectedYear(null)}
            onMouseEnter={() => setHoveredCloseBtn(true)}
            onMouseLeave={() => setHoveredCloseBtn(false)}
          >
            Close Details
          </button>
        </div>
      )}

      {/* Add keyframe animation in a style tag since it can't be inline */}
      <style>
        {`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .financial-report-container {
              padding: 20px 15px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default FinancialReportComponent;















// import React, { useState } from 'react';
// import './FinancialReportComponent.css';
// import { ChevronDown, Download } from 'lucide-react';

// const FinancialReportComponent = () => {

  
//   const [selectedYear, setSelectedYear] = useState(null);

//   const financialData = [
//     { year: 2026, pdfUrl: '/reports/financial-report-2026.pdf' },
//     { year: 2025, pdfUrl: '/reports/financial-report-2025.pdf' },
//     { year: 2023, pdfUrl: '/reports/financial-report-2023.pdf' },
//     { year: 2024, pdfUrl: '/reports/financial-report-2024.pdf' },
//     { year: 2022, pdfUrl: '/reports/financial-report-2022.pdf' },
//     { year: 2021, pdfUrl: '/reports/financial-report-2021.pdf' },
//   ];

//   const handleDownload = (pdfUrl) => {
//     const link = document.createElement('a');
//     link.href = pdfUrl;
//     link.download = `financial-report-${new Date().getFullYear()}.pdf`;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div className="financial-report-container">
//       <header className="report-header mt-10px">
//         <h1>ABC Company Pvt. Ltd.</h1>
//         <h2>Financial Statement</h2>
//         <p className='text-red-500'>Access our financial reports</p>
//       </header>

//       <div className="reports-grid">
//         {financialData.map((report) => (
//           <div
//             key={report.year}
//             className={`report-card ${selectedYear === report.year ? 'active' : ''}`}
//             onClick={() => setSelectedYear(report.year)}
//           >
//             <div className="report-year">Financial Report {report.year}</div>
//             <p className="report-text"></p>
//             <button
//               className="download-btn"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 handleDownload(report.pdfUrl);
//               }}
//             >
//               Download PDF
//             </button>
//           </div>
//         ))}
//       </div>

//       {selectedYear && (
//         <div className="report-details">
//           <h2>Report for {selectedYear}</h2>
//           <p>You have selected the financial report for {selectedYear}.</p>
//           <button
//             className="close-btn"
//             onClick={() => setSelectedYear(null)}
//           >
//             Close Details
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FinancialReportComponent;