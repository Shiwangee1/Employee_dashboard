import React, { useState, useEffect } from "react";
import "./dashboard.css";
import { FaUser, FaFileAlt, FaMoneyBill, FaAngleLeft, FaAngleRight } from "react-icons/fa";

function App() {

  const [tab, setTab] = useState("details");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const images = [
  "https://images.unsplash.com/photo-1557804506-669a67965ba0",
  "https://images.unsplash.com/photo-1497366216548-37526070297c",
  "https://images.unsplash.com/photo-1552664730-d307ca884978",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
];

const [currentImage, setCurrentImage] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  }, 4000);

  return () => clearInterval(interval);
}, [images.length]);

  return (
    <div className="layout">

      {/* HEADER */}
      <div className="topHeader">

        <div className="leftHeader">

          {sidebarOpen ? (
            <FaAngleLeft
              className="menuIcon"
              onClick={() => setSidebarOpen(false)}
            />
          ) : (
            <FaAngleRight
              className="menuIcon"
              onClick={() => setSidebarOpen(true)}
            />
          )}

          <h2>Employee Portal</h2>

        </div>

        <div className="userProfile">
          <img src="https://i.pravatar.cc/40" alt="user" />
          <span>Rahul Sharma</span>
        </div>

      </div>

      <div className="main">

        {/* SIDEBAR */}
        <div className={sidebarOpen ? "sidebar open" : "sidebar"}>

          <div
            className={tab === "details" ? "menu active" : "menu"}
            onClick={() => setTab("details")}
          >
            <FaUser />
            {sidebarOpen && <span>Employee Details</span>}
          </div>

          <div
            className={tab === "documents" ? "menu active" : "menu"}
            onClick={() => setTab("documents")}
          >
            <FaFileAlt />
            {sidebarOpen && <span>Documents</span>}
          </div>

          <div
            className={tab === "ctc" ? "menu active" : "menu"}
            onClick={() => setTab("ctc")}
          >
            <FaMoneyBill />
            {sidebarOpen && <span>Salary Structure</span>}
          </div>

        </div>

        {/* CONTENT */}
        <div className="content">

         <div
  className="hero"
  style={{ backgroundImage: `url(${images[currentImage]})` }}
>
  <h1>Employee Dashboard</h1>
  <p>Manage employee information easily</p>
</div>

         {tab === "details" && (
  <div className="cards">

    <div className="card">
      <h4>Employee Code</h4>
      <p>EMP001</p>
    </div>

    <div className="card">
      <h4>Name</h4>
      <p>Rahul Sharma</p>
    </div>

    <div className="card">
      <h4>Designation</h4>
      <p>Software Engineer</p>
    </div>

    <div className="card">
      <h4>Department</h4>
      <p>IT Development</p>
    </div>

    <div className="card">
      <h4>Email</h4>
      <p>rahul@company.com</p>
    </div>

    <div className="card">
      <h4>Mobile</h4>
      <p>9876543210</p>
    </div>

    <div className="card">
      <h4>Date of Birth</h4>
      <p>10 May 1998</p>
    </div>

    <div className="card">
      <h4>Gender</h4>
      <p>Male</p>
    </div>

    <div className="card">
      <h4>Address</h4>
      <p>Mumbai, Maharashtra, India</p>
    </div>

    <div className="card">
      <h4>Joining Date</h4>
      <p>01 Feb 2024</p>
    </div>

    <div className="card">
      <h4>Experience</h4>
      <p>3 Years</p>
    </div>

    <div className="card">
      <h4>Emergency Contact</h4>
      <p>9876541111</p>
    </div>

  </div>
)} 

          {tab === "documents" && (
            <div className="cards">

              <div className="card">
                <h4>Aadhar</h4>
                <p>1234 5678 9876</p>
              </div>

              <div className="card">
                <h4>PAN</h4>
                <p>ABCDE1234F</p>
              </div>

              <div className="card">
                <h4>Bank</h4>
                <p>HDFC Bank</p>
              </div>

              <div className="card">
                <h4>Account</h4>
                <p>1234567890</p>
              </div>

            </div>
          )}

         {tab === "ctc" && (
  <div className="cards">

    <div className="card">
      <h4>Basic Salary</h4>
      <p>₹30,000</p>
    </div>

    <div className="card">
      <h4>HRA</h4>
      <p>₹12,000</p>
    </div>

    <div className="card">
      <h4>Transport Allowance</h4>
      <p>₹2,000</p>
    </div>

    <div className="card">
      <h4>Medical Allowance</h4>
      <p>₹1,500</p>
    </div>

    <div className="card">
      <h4>Bonus</h4>
      <p>₹3,000</p>
    </div>

    <div className="card">
      <h4>Provident Fund (PF)</h4>
      <p>₹3,600</p>
    </div>

    <div className="card">
      <h4>Professional Tax (PT)</h4>
      <p>₹200</p>
    </div>

    <div className="card highlight">
      <h4>Total CTC</h4>
      <p>₹52,300</p>
    </div>

  </div>
)}

        </div>
      </div>
    </div>
  );
}

export default App;