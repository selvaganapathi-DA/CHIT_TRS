import React, { useState } from "react";

const ADMIN_PASSWORD = "admin123"; // change this

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [planName, setPlanName] = useState("");
  const [rows, setRows] = useState([]);

  const checkLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setLoggedIn(true);
    } else {
      alert("❌ Wrong password!");
    }
  };

  const addRow = () => {
    setRows([...rows, { month: "", user: "", nonUser: "", chit: "" }]);
  };

  const updateRow = (i, field, value) => {
    const newRows = [...rows];
    newRows[i][field] = value;
    setRows(newRows);
  };

  const savePlan = () => {
    if (!planName) return alert("Enter plan name");

    const newPlan = { name: planName, rows };
    const stored = localStorage.getItem("chitPlans");
    const plans = stored ? JSON.parse(stored) : [];
    plans.push(newPlan);
    localStorage.setItem("chitPlans", JSON.stringify(plans));

    alert("✅ Plan added!");
    setPlanName("");
    setRows([]);
  };

  if (!loggedIn) {
    return (
      <div className="flex flex-col items-center mt-10">
        <input
          type="password"
          className="border px-3 py-2 rounded mb-2"
          placeholder="Enter Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={checkLogin}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Admin - Add New Plan</h2>

      <input
        type="text"
        className="border px-3 py-2 rounded mb-3 w-full"
        placeholder="Plan Name (e.g., ₹1 Lakh Plan)"
        value={planName}
        onChange={(e) => setPlanName(e.target.value)}
      />

      <h3 className="mb-2">Plan Rows</h3>
      {rows.map((row, i) => (
        <div key={i} className="grid grid-cols-4 gap-2 mb-2">
          <input
            type="number"
            placeholder="Month"
            className="border px-2 py-1 rounded"
            value={row.month}
            onChange={(e) => updateRow(i, "month", e.target.value)}
          />
          <input
            type="text"
            placeholder="User Payable"
            className="border px-2 py-1 rounded"
            value={row.user}
            onChange={(e) => updateRow(i, "user", e.target.value)}
          />
          <input
            type="text"
            placeholder="Non-User"
            className="border px-2 py-1 rounded"
            value={row.nonUser}
            onChange={(e) => updateRow(i, "nonUser", e.target.value)}
          />
          <input
            type="text"
            placeholder="Chit Amount"
            className="border px-2 py-1 rounded"
            value={row.chit}
            onChange={(e) => updateRow(i, "chit", e.target.value)}
          />
        </div>
      ))}

      <button
        onClick={addRow}
        className="bg-gray-500 text-white px-3 py-1 rounded mb-3"
      >
        + Add Row
      </button>
      <br />
      <button
        onClick={savePlan}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Save Plan
      </button>
    </div>
  );
}
