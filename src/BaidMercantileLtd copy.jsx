import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, FileText, Download } from 'lucide-react';
import investorDataJson from './investorData.json';


const BaidMercantileLtd = () => {
const [expandedSections, setExpandedSections] = useState({});
  // const [activeDropdown, setActiveDropdown] = useState(null);
  // const [hoveredLink, setHoveredLink] = useState(null);
  // const [viewSection, setViewSection] = useState(null);
  const [activeSection, setActiveSection] = useState("about");

  const investorData = investorDataJson.sections.filter(section => section.enabled);

  // CUSTOMIZE THIS SECTION FOR YOUR CLIENT
  const clientInfo = {
    companyName: "BAID MERCANTILES LIMITED.",
    logoUrl: "/images/company-logo.jpg",
    bannerUrl: "/images/investor-banner.jpg",
    cin: "L70109WB1988PLC044591",
    copyright: "© 2025 BAID MERCANTILES LIMITED. All rights reserved."
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };


     useEffect(() => {
     const initialExpandedState = {};
     investorData.forEach(section => {
       initialExpandedState[section.id] = true; // All expanded
     });
     setExpandedSections(initialExpandedState);
   }, []);

  // Styles
  const styles = {
    table: {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "20px"
    },
    container: {
      fontFamily: "'Arial', 'Helvetica', sans-serif",
      backgroundColor: '#f8f8f8',
      minHeight: '100vh',
      minWidth: '100vw',
    },
    header: {
      backgroundColor: '#fff',
      borderBottom: '1px solid #e0e0e0',
      padding: '0px 0',
    },
    headerInner: {
      maxWidth: '1450px',
      margin: '0 auto',
      padding: '0 5px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      height: '30px',
    },
    nav: {
      display: 'flex',
      gap: '10px',
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
    navItem: {
      position: 'relative',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '500',
      color: '#333',
      padding: '10px 0',
    },
    dropdown: {
      position: 'absolute',
      top: '100%',
      left: '0',
      backgroundColor: '#fff',
      border: '1px solid #e0e0e0',
      minWidth: '200px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      zIndex: 1000,
      marginTop: '5px',
    },
    dropdownItem: {
      padding: '10px 15px',
      fontSize: '13px',
      color: '#555',
      borderBottom: '1px solid #f0f0f0',
      cursor: 'pointer',
      display: 'block',
      textDecoration: 'none',
    },
    banner: {
      width: '100%',
      height: '300px',
      objectFit: 'cover',
    },
    breadcrumb: {
      backgroundColor: '#f5f5f5',
      padding: '12px 0',
      borderBottom: '1px solid #e0e0e0',
    },
    breadcrumbInner: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
      display: 'flex',
      gap: '10px',
      fontSize: '13px',
      color: '#666',
    },
    mainContent: {
      maxWidth: '1200px',
      margin: '40px auto',
      padding: '0 20px',
    },
    pageTitle: {
      fontSize: '32px',
      fontWeight: '700',
      color: '#070707d7',
      marginBottom: '40px',
      borderBottom: '3px solid #0066cc',
      paddingBottom: '15px',
    },
        pageContent: {
      fontSize: '12px',
      fontWeight: '700',
      color: '#070707d7',
      marginBottom: '2px',
      paddingBottom: '14px',
    },
    section: {
      marginBottom: '30px',
      backgroundColor: '#fff',
      border: '1px solid #e0e0e0',
      borderRadius: '4px',
    },
    sectionHeader: {
      backgroundColor: '#f8f8f8',
      padding: '5px 20px',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #e0e0e0',
    },
    sectionTitle: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#333',
      margin: 0,
    },
    sectionContent: {
      padding: '0px',
    },
    linkItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0px',
      padding: '4px 5px',
      marginBottom: '0px',
      backgroundColor: '#f9f9f9',
      border: '1px solid #e8e8e8',
      borderRadius: '4px',
      textDecoration: 'none',
      color: '#0066cc',
      fontSize: '13px',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    linkItemHover: {
      backgroundColor: '#ecee73',
      borderColor: '#fa139a',
    },
  
    footer: {
      backgroundColor: '#2c3e50',
      color: '#fff',
      padding: '40px 0 20px',
      marginTop: '60px',
    },
    footerInner: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
    },
    footerLinks: {
      display: 'flex',
      gap: '30px',
      listStyle: 'none',
      margin: '0 0 30px 0',
      padding: 0,
      justifyContent: 'center',
    },
    footerLink: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '14px',
    },
    copyright: {
      textAlign: 'center',
      fontSize: '13px',
      color: '#bdc3c7',
      paddingTop: '20px',
      borderTop: '1px solid #34495e',
    }
    
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerInner  }>
          <img 
            src={clientInfo.logoUrl} 
            alt={clientInfo.companyName}
            style={styles.logo}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
 <p style={{
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: '700',
    color: '#0066cc',
    margin: 0,
  }}
>
  {clientInfo.companyName}
</p>

          
          <nav>
            <ul style={styles.nav}>
    

<li>
  <span
    onClick={() => setActiveSection("about")}
    style={{
      ...styles.navItem,
      color: activeSection === "about" ? "#01a725" : "#000",
      fontWeight: "600",
      cursor: "pointer"
    }}
  >
    About Us
  </span>
</li>

<li>
  <span
    onClick={() => setActiveSection("investors")}
    style={{
      ...styles.navItem,
      color: activeSection === "investors" ? "#5d72ee" : "#000",
      fontWeight: "600",
      cursor: "pointer"
    }}
  >
    Investors Info
  </span>
</li>

<li>
  <span
    onClick={() => setActiveSection("contact")}
    style={{
      ...styles.navItem,
      fontWeight: "600",
      cursor: "pointer"
    }}
  >
    Contact
  </span>
</li>
            </ul>
          </nav>
        </div>
        <div>
         <p style={{ textAlignLast: 'center', fontSize: '14px', marginTop: '0px', marginBottom: '0px', color: '#0066cc', fontWeight: '600', textAlign: 'left', paddingLeft: '30px' }}>CIN: L70109WB1988PLC044591</p>
        </div>
      </header>

<main style={styles.mainContent}>

  {/* ABOUT SECTION */}
  {activeSection === "about" && (
    <>
      <h1 style={styles.pageTitle}>About</h1>

      <p style={styles.pageContent}><strong>BAID MERCANTILES LIMITED</strong></p>
      <p style={styles.pageContent}>CIN: L70109WB1988PLC044591</p>

      <p style={styles.pageContent}>
        BAID MERCANTILES LTD (“Company”) is a Non-Banking Financial Company 
        incorporated under the Companies Act, 1956 and listed on 
        The Calcutta Stock Exchange Ltd.
      </p>

      <h2 style={styles.pageContent} >Composition of Board of Directors</h2>

      <table style={styles.table}>
        <thead style={styles.pageContent}>
          <tr>
            <th>Sl No.</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody style={styles.pageContent}>
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
            <td>Non-executive Non-Independent Director</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Ashwani Agarwal</td>
            <td>Director</td>
            <td>Non-executive Independent Director</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Ashish Kumar Upadhyay</td>
            <td>Director</td>
            <td>Non-executive Independent Director</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Sabita Khandelwal</td>
            <td>Whole-time Director & CFO</td>
            <td>Executive Director</td>
          </tr>
        </tbody>
      </table>
    </>
  )}

  {/* INVESTOR SECTION */}
  {activeSection === "investors" && (
    <>
      <h1 style={styles.pageTitle}>Investors Info</h1>

      {investorData.map((section) => (
        <div key={section.id} style={styles.section}>
          <div
            style={styles.sectionHeader}
            onClick={() => toggleSection(section.id)}
          >
            <h2 style={styles.sectionTitle}>{section.title}</h2>
            {expandedSections[section.id] ?
              <ChevronDown size={20} /> :
              <ChevronRight size={20} />
            }
          </div>

          {expandedSections[section.id] && (
            <div style={styles.sectionContent}>
              {section.links.map((link, index) => (
                <a
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={link.url}
                  style={styles.linkItem}
                >
                  <FileText size={18} />
                  <span style={{ flex: 1 }}>{link.year}</span>
                  <Download size={20} />
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  )}

  {/* CONTACT SECTION */}
  {activeSection === "contact" && (
    <>
      <h1 style={{color: '#030507', fontSize: '24px', fontWeight: 'bold'}}>Contact</h1>

      <h3 style={styles.pageContent}>Investor Grievance:</h3>
      <p style={styles.pageContent}>
        <strong >Niche Technologies Private Limited</strong><br />
        3A Auckland Place, 7th Floor, Kolkata – 700017<br />
        nichetechpl@nichetechpl.com<br />
        033-22806616 / 17 / 18
      </p>

      <p style={styles.pageContent}>
        <strong>Ms. Uma Agrawal</strong><br />
        Company Secretary & Compliance Officer<br />
        58 Elliot Road, 2nd Floor, Kolkata – 700016<br />
        baidmercantiles1988@gmail.com<br />
        +91-8336989140
      </p>

      <h3 style={{color: '#030507', fontSize: '20px', fontWeight: 'bold'}}>Contact Us:</h3>
      <p style={styles.pageContent}>
        Baid Mercantiles Ltd.<br />
        58 Elliot Road, 2nd Floor, Kolkata – 700016<br />
        baidmercantiles1988@gmail.com<br />
        +91-8336989140
      </p>
    </>
  )}

</main>




      {/* Footer */}
      {/* <footer style={styles.footer}> */}
        {/* <div style={styles.footerInner}> */}
          {/* <ul style={styles.footerLinks}>
            <li><a href="/" style={styles.footerLink}>Home</a></li>
            <li><a href="/about" style={styles.footerLink}>About Us</a></li>
            <li><a href="/investors" style={styles.footerLink}>Investors Info</a></li>
            <li><a href="/contact" style={styles.footerLink}>Contact</a></li>
          </ul> */}
          
          <div style={styles.footer}>
            {clientInfo.copyright}
          </div>
        {/* </div>   */}
      {/* </footer> */}
    </div>
  );
};

export default BaidMercantileLtd;