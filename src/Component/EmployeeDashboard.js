import React, { useState } from "react";
import "";

function EmployeeDashboard() {
  const [tab, setTab] = useState("details");

  return (
    <div className="layout">

      {/* Top Header */}
      <div className="topHeader">
        <h2>Company HR Portal</h2>
        <div className="userProfile">
          <img src="https://i.pravatar.cc/40" alt="user"/>
          <span>Rahul Sharma</span>
        </div>
      </div>

      <div className="main">

        {/* Sidebar */}
        <div className="sidebar">

          <div
            className={tab === "details" ? "menu active" : "menu"}
            onClick={() => setTab("details")}
          >
            Employee Details
          </div>

          <div
            className={tab === "documents" ? "menu active" : "menu"}
            onClick={() => setTab("documents")}
          >
            Documents
          </div>

          <div
            className={tab === "ctc" ? "menu active" : "menu"}
            onClick={() => setTab("ctc")}
          >
            Salary Structure
          </div>

        </div>

        {/* Content */}
        <div className="content">

          {/* Hero Section */}
          <div className="hero">
            <div className="heroText">
              <h1>Employee Dashboard</h1>
              <p>Manage employee profile, documents and salary details</p>
            </div>
          </div>

          {/* DETAILS */}
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
                <h4>Mobile</h4>
                <p>9876543210</p>
              </div>

              <div className="card">
                <h4>Date Of Birth</h4>
                <p>10 May 1998</p>
              </div>

              <div className="card">
                <h4>Joining Date</h4>
                <p>01 Feb 2024</p>
              </div>

            </div>
          )}

          {/* DOCUMENTS */}
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

              <div className="card">
                <h4>IFSC</h4>
                <p>HDFC000123</p>
              </div>

            </div>
          )}

          {/* CTC */}
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
                <h4>TA</h4>
                <p>₹2,000</p>
              </div>

              <div className="card">
                <h4>PF</h4>
                <p>₹3,600</p>
              </div>

              <div className="card highlight">
                <h4>Total CTC</h4>
                <p>₹47,800</p>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default EmployeeDashboard;