import React, { useEffect, useState } from "react";

export default function PublicPage() {
  const [plans, setPlans] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem("chitPlans");
    setPlans(stored ? JSON.parse(stored) : []);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-center text-2xl font-bold mb-4">Available Chit Plans</h2>

      {/* Tabs */}
      <div className="flex justify-center mb-4 space-x-2">
        {plans.map((p, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`px-4 py-2 rounded ${active === i ? "bg-blue-600 text-white" : "bg-gray-300"}`}
          >
            {p.name}
          </button>
        ))}
      </div>

      {/* Table */}
      {plans.length > 0 && (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border text-center">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="border px-2 py-1">Month</th>
                <th className="border px-2 py-1">User</th>
                <th className="border px-2 py-1">Non-User</th>
                <th className="border px-2 py-1">Chit</th>
              </tr>
            </thead>
            <tbody>
              {plans[active]?.rows.map((row, idx) => (
                <tr key={idx} className="odd:bg-gray-100">
                  <td className="border px-2 py-1">{row.month}</td>
                  <td className="border px-2 py-1">{row.user}</td>
                  <td className="border px-2 py-1">{row.nonUser}</td>
                  <td className="border px-2 py-1">{row.chit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {plans.length === 0 && <p className="text-center mt-4">No plans available yet.</p>}
    </div>
  );
}
