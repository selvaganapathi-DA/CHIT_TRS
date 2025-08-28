// src/Pages/ChitSchemes.jsx
import React, { useState } from "react";
import "./ChitSchemes.css"; // 👉 custom styles
import { Breadcrumb } from "react-bootstrap"; // ✅ Bootstrap breadcrumb

// ✅ Your chitPlans data
const chitPlans = [
  {
    name: "₹1 Lakh Plan",
    amount: "₹1,00,000",
    rows: [
      { month: 1, user: "₹5000", nonUser: "₹5000", chit: "₹96,000" },
      { month: 2, user: "₹6000", nonUser: "₹4950", chit: "₹96,000" },
      { month: 3, user: "₹6000", nonUser: "₹4890", chit: "₹96,000" },
      { month: 4, user: "₹6000", nonUser: "₹4825", chit: "₹96,000" },
      { month: 5, user: "₹6000", nonUser: "₹4750", chit: "₹96,000" },
      { month: 6, user: "₹6000", nonUser: "₹4665", chit: "₹96,000" },
      { month: 7, user: "₹6000", nonUser: "₹4575", chit: "₹96,000" },
      { month: 8, user: "₹6000", nonUser: "₹4460", chit: "₹96,000" },
      { month: 9, user: "₹6000", nonUser: "₹4335", chit: "₹96,000" },
      { month: 10, user: "₹6000", nonUser: "₹4180", chit: "₹96,000" },
      { month: 11, user: "₹6000", nonUser: "₹4000", chit: "₹96,000" },
      { month: 12, user: "₹6000", nonUser: "₹3780", chit: "₹96,000" },
      { month: 13, user: "₹6000", nonUser: "₹3500", chit: "₹96,000" },
      { month: 14, user: "₹6000", nonUser: "₹3140", chit: "₹96,000" },
      { month: 15, user: "₹6000", nonUser: "₹2660", chit: "₹96,000" },
      { month: 16, user: "₹5850", nonUser: "₹2450", chit: "₹96,000" },
      { month: 17, user: "₹5750", nonUser: "₹2000", chit: "₹96,000" },
      { month: 18, user: "₹5600", nonUser: "₹1600", chit: "₹96,000" },
      { month: 19, user: "₹5450", nonUser: "₹950", chit: "₹96,000" },
      { month: 20, user: "₹5225", nonUser: "₹725", chit: "₹96,000" },
      { month: "Total Payable", user:"₹1,16,875",nonUser:"₹71,435",chit:"₹96,000" }
    ]
  },
  {
    name: "₹2 Lakh Plan",
    amount: "₹2,00,000",
    rows: [
      { month: 1, user: "₹10,000", nonUser: "₹10,000", chit: "₹1,92,000" },
      { month: 2, user: "₹12,000", nonUser: "₹9,900", chit: "₹1,92,000" },
      { month: 3, user: "₹12,000", nonUser: "₹9,780", chit: "₹1,92,000" },
      { month: 4, user: "₹12,000", nonUser: "₹9,650", chit: "₹1,92,000" },
      { month: 5, user: "₹12,000", nonUser: "₹9,500", chit: "₹1,92,000" },
      { month: 6, user: "₹12,000", nonUser: "₹9,330", chit: "₹1,92,000" },
      { month: 7, user: "₹12,000", nonUser: "₹9,140", chit: "₹1,92,000" },
      { month: 8, user: "₹12,000", nonUser: "₹8,920", chit: "₹1,92,000" },
      { month: 9, user: "₹12,000", nonUser: "₹8,670", chit: "₹1,92,000" },
      { month: 10, user: "₹12,000", nonUser: "₹8,360", chit: "₹1,92,000" },
      { month: 11, user: "₹12,000", nonUser: "₹8,000", chit: "₹1,92,000" },
      { month: 12, user: "₹12,000", nonUser: "₹7,555", chit: "₹1,92,000" },
      { month: 13, user: "₹12,000", nonUser: "₹7,000", chit: "₹1,92,000" },
      { month: 14, user: "₹12,000", nonUser: "₹6,285", chit: "₹1,92,000" },
      { month: 15, user: "₹12,000", nonUser: "₹5,330", chit: "₹1,92,000" },
      { month: 16, user: "₹11,700", nonUser: "₹4,900", chit: "₹1,92,000" },
      { month: 17, user: "₹11,500", nonUser: "₹4,000", chit: "₹1,92,000" },
      { month: 18, user: "₹11,200", nonUser: "₹3,200", chit: "₹1,92,000" },
      { month: 19, user: "₹10,900", nonUser: "₹1,900", chit: "₹1,92,000" },
      { month: 20, user: "₹10,450", nonUser: "₹1,450", chit: "₹1,92,000" },
      { month: "Total Payable", user:"₹2,33,750",nonUser:"₹1,42,870",chit:"₹1,92,000" }
    ]
  },
  {
    name: "₹5 Lakh Plan",
    amount: "₹5,00,000",
    rows: [
      { month: 1, user: "₹20,000", nonUser: "₹20,000", chit: "₹4,80,000" },
      { month: 2, user: "₹21,000", nonUser: "₹19,950", chit: "₹4,80,000" },
 { month: 2, user: "₹21,000", nonUser: "₹19,950", chit: "₹4,80,000" },
      { month: 3, user: "₹22,000", nonUser: "₹19,850", chit: "₹4,80,000" },
      { month: 4, user: "₹23,000", nonUser: "₹19,600", chit: "₹4,80,000" },
      { month: 5, user: "₹24,000", nonUser: "₹19,250", chit: "₹4,80,000" },
      { month: 6, user: "₹25,000", nonUser: "₹18,750", chit: "₹4,80,000" },
      { month: 7, user: "₹25,000", nonUser: "₹18,420", chit: "₹4,80,000" },
      { month: 8, user: "₹25,000", nonUser: "₹18,055", chit: "₹4,80,000" },
      { month: 9, user: "₹25,000", nonUser: "₹17,650", chit: "₹4,80,000" },
      { month: 10, user: "₹25,000", nonUser: "₹17,190", chit: "₹4,80,000" },
      { month: 11, user: "₹25,000", nonUser: "₹16,660", chit: "₹4,80,000" },
      { month: 12, user: "₹25,000", nonUser: "₹16,070", chit: "₹4,80,000" },
      { month: 13, user: "₹25,000", nonUser: "₹15,380", chit: "₹4,80,000" },
      { month: 14, user: "₹25,000", nonUser: "₹14,580", chit: "₹4,80,000" },
      { month: 15, user: "₹25,000", nonUser: "₹13,630", chit: "₹4,80,000" },
      { month: 16, user: "₹25,000", nonUser: "₹12,500", chit: "₹4,80,000" },
      { month: 17, user: "₹25,000", nonUser: "₹11,110", chit: "₹4,80,000" },
      { month: 18, user: "₹25,000", nonUser: "₹9,370", chit: "₹4,80,000" },
      { month: 19, user: "₹25,000", nonUser: "₹7,140", chit: "₹4,80,000" },
      { month: 20, user: "₹25,000", nonUser: "₹4,160", chit: "₹4,80,000" },
      { month: 21, user: "₹24,100", nonUser: "₹4,000", chit: "₹4,80,000" },
      { month: 22, user: "₹23,100", nonUser: "₹3,725", chit: "₹4,80,000" },
      { month: 23, user: "₹22,250", nonUser: "₹3,500", chit: "₹4,80,000" },
      { month: 24, user: "₹21,480", nonUser: "₹3,000", chit: "₹4,80,000" },
      { month: 25, user: "₹20,750", nonUser: "₹2,000", chit: "₹4,80,000" },      
      { month:"Total Payable", user:"₹5,96,580",nonUser:"₹3,25,560",chit:"₹4,80,000" }
    ]
  }
];

const ChitSchemes = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  return (
    <div className="container my-5 chit-container">
      <h1 className="fw-bold text-center mb-4">Chit Fund Plans</h1>

      <div className="row justify-content-center">
        {/* Show all cards when none selected */}
        {!selectedPlan &&
          chitPlans.map((scheme, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-4 mb-4">
              <div
                className="chit-card h-100 shadow-sm"
                onClick={() => setSelectedPlan(scheme)}
              >
                <div className="chit-card-body text-center p-4">
                  <h5 className="chit-title">{scheme.name}</h5>
                  <p className="chit-amount text-muted">
                    Total Amount: {scheme.amount}
                  </p>
                  <p className="chit-text small">
                    Per Group 20 Members...<br />
                    <strong>Click to view details ➡️</strong>
                  </p>
                </div>
              </div>
            </div>
          ))}

        {/* Show expanded view when selected */}
        {selectedPlan && (
          <div className="col-12">
            <div className="chit-card expanded shadow-lg p-3 p-md-4">
              
              {/* ✅ Breadcrumb */}
              <Breadcrumb>
                <Breadcrumb.Item onClick={() => setSelectedPlan(null)}>
                  Home
                </Breadcrumb.Item>
                <Breadcrumb.Item onClick={() => setSelectedPlan(null)}>
                  Chits
                </Breadcrumb.Item>
                <Breadcrumb.Item active>{selectedPlan.name}</Breadcrumb.Item>
              </Breadcrumb>

              <div className="chit-card-body text-center">
                <h3 className="chit-title">{selectedPlan.name}</h3>
                <p className="chit-amount">
                  Duration:20 Months
                </p>
              </div>

              {/* Responsive Table */}
              <div className="table-responsive px-2 px-md-4">
                <table className="table table-bordered table-hover align-middle">
                  <thead className="table-light">
                    <tr>
                      <th>Month</th>
                      <th>User</th>
                      <th>Non-User</th>
                      <th>Chit Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedPlan.rows.map((row, idx) => (
                      <tr
                        key={idx}
                        className={
                          row.month === "Total Payable"
                            ? "table-success fw-bold"
                            : ""
                        }
                      >
                        <td>{row.month}</td>
                        <td>{row.user}</td>
                        <td>{row.nonUser}</td>
                        <td>{row.chit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Close Button */}
              <div className="text-center">
                <button
                  className="btn btn-outline-danger mt-3"
                  onClick={() => setSelectedPlan(null)}
                >
                  ❌ Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};




export default ChitSchemes;
