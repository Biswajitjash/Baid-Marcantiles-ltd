import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronRight, FileText, Download } from "lucide-react";
import investorDataJson from "./investorData.json";

const BaidMercantileLtd = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [activeSection, setActiveSection] = useState("about");

  const investorData = investorDataJson.sections.filter(
    (section) => section.enabled
  );

  const clientInfo = {
    companyName: "BAID MERCANTILES LIMITED",
    logoUrl: "/images/company-logo.jpg",
    cin: "L70109WB1988PLC044591",
    copyright:
      "© 2025 BAID MERCANTILES LIMITED. All rights reserved.",
  };

  const toggleSection = (id) => {
    setExpandedSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useEffect(() => {
    const initialState = {};
    investorData.forEach((section) => {
      initialState[section.id] = true;
    });
    setExpandedSections(initialState);
  }, [investorData]);

  return (
    <div className="container">
      {/* HEADER */}
      <header className="header">
        <div className="header-inner">
          <div className="company-wrapper">
            <h1 className="company-name">{clientInfo.companyName}</h1>
            <p style={{ marginTop: "0px" }} className="cin">CIN: {clientInfo.cin}</p>
          </div>

          <nav>
            <ul className="nav-links">
              <li>
                <button
                  className={activeSection === "about" ? "active" : ""}
                  onClick={() => setActiveSection("about")}
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  className={activeSection === "investors" ? "active" : ""}
                  onClick={() => setActiveSection("investors")}
                >
                  Investors Info
                </button>
              </li>
              <li>
                <button
                  className={activeSection === "contact" ? "active" : ""}
                  onClick={() => setActiveSection("contact")}
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* MAIN */}
      <main className="main">

        {/* ABOUT */}
        {activeSection === "about" && (
          <>
            <h3 className="page-title">About</h3>

            <p style={{ marginTop: "-15px" }}>
              <strong>BAID MERCANTILES LIMITED</strong>
            </p>
            <p style={{ marginTop: "-15px", fontSize: "12px" }}>CIN: L70109WB1988PLC044591</p>

            <p style={{ marginTop: "-5px", fontSize: "12px", lineHeight: "1.2" }}>
              BAID MERCANTILES LTD is a Non-Banking Financial Company
              incorporated under the Companies Act, 1956 and listed on
              The Calcutta Stock Exchange Ltd. The Company is engaged in the business of making long-term and short-term investments, without accepting public deposits.
            </p>

            <h3 className="sub-title" style={{ marginTop: "0px", marginBottom: "5px" }}>Board of Directors</h3>

            <div className="table-wrapper" style={{ marginTop: "-15px" }}>
              <table>
                <thead>
                  <tr>
                    <th>Sl No.</th>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Category</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Binod Kumar Khandelwal</td>
                    <td>Managing Director</td>
                    <td>Executive Director</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jayesh Maitra Majumder</td>
                    <td>Director</td>
                    <td>Non-executive Non-Independent</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Ashwani Agarwal</td>
                    <td>Director</td>
                    <td>Independent Director</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Ashish Kumar Upadhyay</td>
                    <td>Director</td>
                    <td>Independent Director</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Sabita Khandelwal</td>
                    <td>Whole-time Director & CFO</td>
                    <td>Executive Director</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 style={{ marginTop: "10px", marginBottom: "-8px" }} className="sub-title">Audit Committee</h3>

            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Sl No.</th>
                    <th>Name of the Member(s)</th>
                    <th>Category</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Ashwani Agarwal</td>
                    <td>Chairman</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Ashish Kumar Upadhyay</td>
                    <td>Member</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Jayesh Maitra Majumder</td>
                    <td>Member</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 style={{ marginTop: "10px", marginBottom: "-8px" }} className="sub-title">Nomination & Remuneration Committee</h3>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Sl No.</th>
                    <th>Name of the Member(s)</th>
                    <th>Category</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Ashwani Agarwal</td>
                    <td>Chairman</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Ashish Kumar Upadhyay</td>
                    <td>Member</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Jayesh Maitra Majumder</td>
                    <td>Member</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 style={{ marginTop: "10px", marginBottom: "-8px" }} className="sub-title">Stakeholders’ Relationship Committee</h3>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Sl No.</th>
                    <th>Name of the Member(s)</th>
                    <th>Category</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Ashwani Agarwal</td>
                    <td>Chairman</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Ashish Kumar Upadhyay</td>
                    <td>Member</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Jayesh Maitra Majumder</td>
                    <td>Member</td>
                  </tr>
                </tbody>
              </table>
            </div>
          <div>
            <br />
              
          </div>

          </>
        )}

        {/* INVESTORS */}
        {activeSection === "investors" && (
          <>
            <h3 className="page-title">Investors Info</h3>

            {investorData.map((section) => (
              <div key={section.id} className="section">
                <div
                  className="section-header"
                  onClick={() => toggleSection(section.id)}
                >
                  <h4 style={{ marginTop: "0px", marginBottom: "-5px" }}>{section.title}</h4>
                  {/* {expandedSections[section.id] ? (
                    <ChevronDown size={25} />
                  ) : (
                    <ChevronRight size={18} />
                  )} */}
                </div>

                {expandedSections[section.id] && (
                  <div  style={{ marginTop: "0px", marginBottom: "0px" }} className="section-content">
                    {section.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-item"
                      >
                        <FileText size={25} />
                        <span style={{ marginTop: "0px", marginBottom: "-0px" }} >{link.year}</span>
                        <Download size={25} />
                      </a>
                    ))}
                  </div>
                )}

                <div style={{ height: "10px" }}>

                </div>
                
              </div>
            ))}
          
            <h5 style={{ marginTop: "20px", marginBottom: "-5px" }} className="page-title"> Contact Information of Designated Officials for handling Investor Grievance:</h5>
            <div  className="contact-box">
              <p style={{ marginTop: "5px" }}><strong>Niche Technologies Pvt. Ltd.</strong></p>
              <p style={{ marginTop: "-20px" }}>Registrar and Share Transfer Agents of the Company</p>
              <p style={{ marginTop: "-20px" }}>Address: 3A Auckland Place, 7th Floor, Kolkata – 700017</p>
              <p style={{ marginTop: "-20px" }}>E-mail Id: nichetechpl@nichetechpl.com</p>
              <p style={{ marginTop: "-20px" }}>Phone No.: 033-22806616 / 17 / 18</p>
            </div>

            <div className="contact-box">
              <p style={{ marginTop: "5px" }}><strong>Ms. Uma Agrawal</strong></p>
              <p style={{ marginTop: "-20px" }}>Company Secretary & Compliance Officer</p>
              <p style={{ marginTop: "-20px" }}>Baid Mercantiles Limited</p>
              <p style={{ marginTop: "-20px" }}>Address: 58 Elliot Road, 2nd Floor, Kolkata – 700016</p>
              <p style={{ marginTop: "-20px" }}>E-mail Id: baidmercantiles1988@gmail.com</p>
              <p style={{ marginTop: "-20px" }}>Phone No.: +91-8336989140</p>
            </div>
          <div>
            <br/> 
          </div>
          </>
        )}

        {/* CONTACT */}
        {activeSection === "contact" && (
          <>
            <h3 className="page-title">CONTACT US</h3>

            <div className="contact-box">
              <p style={{ marginTop: "5px" }}><strong>Baid Mercantiles Limited</strong></p>
              <p style={{ marginTop: "-20px" }}>Address: 58 Elliot Road, 2nd Floor, Kolkata – 700016 </p>
              <p style={{ marginTop: "-20px" }}>E-mail Id: baidmercantiles1988@gmail.com</p>
              <p style={{ marginTop: "-20px" }}>Phone No.: +91-8336989140</p>
            </div>

          </>
        )}
      </main>

      {/* FOOTER */}
      <footer className="footer">
        {clientInfo.copyright}
      </footer>

      {/* RESPONSIVE CSS */}
      <style>{`
        * { box-sizing: border-box; }

        body { margin: 0; font-family: Arial, sans-serif; }

        .container {
          min-height: 100vh;
          background: #f5f6fa;
          color: #0066cc;
          display: flex;
          flex-direction: column;
        }

        .header {
          background: white;
          padding: 1px;
          border-bottom: 1px solid #ddd;
        }

        .header-inner {
          max-width: 1600px;
          margin: auto;
          text-align: center;
        }

        .company-name {
          font-size: 25px;
          color: #0066cc;
          margin: 0;
        }

        .cin {
          font-size: 14px;
          color: #555;
        }

        .nav-links {
          list-style: none;
          padding: 0;
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 15px;
          flex-wrap: wrap;
        }

        .nav-links button {
          background: #d6cdcd;
          border: none;
          font-weight: 600;
          cursor: pointer;
          padding: 5px 20px;
        }

        .nav-links button.active {
          color: #0066cc;
          border-bottom: 2px solid #0066cc;
        }

        .main {
          flex: 1;
          max-width: 100%;
          min-height: 100vh;
          margin: -15px auto;
          padding: 0 100px;
        }

        .page-title {
          margin-top: px;
          border-bottom: 2px solid #0066cc;
          padding-bottom: 0px;
        }

        .sub-title {
          margin-top: 1px;
        }

        .table-wrapper {
          overflow-x: auto;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 5px;
        }

        th, td {
          border: 1px solid #ddd;
          padding: 4px;
          font-size: 12px;
        }

        th {
          background: #f0f0f0;
        }

        .section {
          background: white;
          margin-bottom: 15px;
          border: 1px solid #409e4d;
          border-radius: 5px;
        }

        .section-header {
          padding: 10px 15px;
          display: flex;
          justify-content: space-between;
          cursor: pointer;
          background: #f7f7f7;
        }

        .section-content {
          padding: 10px 15px;
        }

        .link-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 8px;
          margin-bottom: 6px;
          background: #f9f9f9;
          border-radius: 4px;
          text-decoration: none;
          color: #0066cc;
        }

        .link-item:hover {
          background: #e6f0ff;
        }

        .contact-box {
          background: ;
          padding: 0px;
          margin-bottom: 0px;
          border-radius: 5px;
          border: 1px solid #ddd;
        }

        .footer {
          background: #2c3e50;
          color: white;
          text-align: center;
          padding: 15px;
          font-size: 13px;
        }

        /* Mobile */
        @media (max-width: 768px) {
          .company-name { font-size: 18px; }
          .nav-links { gap: 10px; }
          th, td { font-size: 12px; }
        }

        @media (max-width: 480px) {
          .company-name { font-size: 16px; }
          .nav-links { flex-direction: column; }
        }
      `}</style>
    </div>
  );
};

export default BaidMercantileLtd;
