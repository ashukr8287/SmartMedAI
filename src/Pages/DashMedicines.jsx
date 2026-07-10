import { useState } from "react";
import {
  Plus,
  Pill,
  Clock,
  Calendar,
  Edit2,
  Trash2,
  X,
  Loader,
} from "lucide-react";
import { useUser } from "@clerk/react";
import { useEffect } from "react";

// const mockMedicines = [
//   {
//     id: 1,
//     name: "Aspirin",
//     dosage: "100mg",
//     frequency: "Once daily",
//     times: ["8:00 AM"],
//     startDate: "2026-01-01",
//     duration: "Ongoing",
//     notes: "Take with food",
//   },
//   {
//     id: 2,
//     name: "Metformin",
//     dosage: "500mg",
//     frequency: "Twice daily",
//     times: ["8:00 AM", "8:00 PM"],
//     startDate: "2026-01-15",
//     duration: "Ongoing",
//     notes: "For diabetes management",
//   },
//   {
//     id: 3,
//     name: "Lisinopril",
//     dosage: "10mg",
//     frequency: "Once daily",
//     times: ["4:00 PM"],
//     startDate: "2026-02-01",
//     duration: "Ongoing",
//     notes: "Blood pressure medication",
//   },
//   {
//     id: 4,
//     name: "Vitamin D",
//     dosage: "1000 IU",
//     frequency: "Once daily",
//     times: ["8:00 PM"],
//     startDate: "2026-01-01",
//     duration: "90 days",
//     notes: "Supplement",
//   },
// ];

const DashMedicines = () => {
  const [medicines, setMedicines] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingMedicine, setEditingMedicine] = useState(null);

  const { user, isLoaded } = useUser();
  if (!isLoaded) return <Loader />;
  console.log(user.id)
  const userId = user.id;

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const res = await fetch(
          `http://localhost:8000/user/medicine/${userId}`,
        );
        const data = await res.json();
        // console.log(data);
        setMedicines(data.medicines); // array of medicines
      } catch (err) {
        console.error(err);
      }
    };
    fetchMedicines();
  }, [userId]);

  const handleDelete = async (medicineId) => {
    if (!confirm("Are you sure you want to delete this medicine?")) return;

    try {
      const res = await fetch(
        `http://localhost:8000/user/delete/medicine/${medicineId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId }), // send userId in body
        },
      );

      const data = await res.json();
      if (res.ok) {
        console.log("Deleted:", data.message);
        // update UI immediately by removing the deleted medicine
        setMedicines((prevMedicines) =>
          prevMedicines.filter((med) => med.id !== medicineId),
        );
      } else {
        console.error("Error:", data.message);
      }
    } catch (err) {
      console.error("Request failed:", err);
    }
  };

  const handleEdit = (medicine) => {
    setEditingMedicine(medicine);
    setShowAddModal(true);
  };

  const AddMedicineModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl text-slate-900">
            {editingMedicine ? "Edit Medicine" : "Add New Medicine"}
          </h2>
          <button
            onClick={() => {
              setShowAddModal(false);
              setEditingMedicine(null);
            }}
            className="p-2 hover:bg-slate-100 rounded-lg"
          >
            <X className="w-6 h-6 text-slate-600" />
          </button>
        </div>

        <form className="space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-slate-700 mb-2">Medicine Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., Aspirin"
                defaultValue={editingMedicine?.name}
              />
            </div>

            <div>
              <label className="block text-slate-700 mb-2">Dosage</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., 100mg"
                defaultValue={editingMedicine?.dosage}
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-700 mb-2">Frequency</label>
            <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Once daily</option>
              <option>Twice daily</option>
              <option>Three times daily</option>
              <option>Four times daily</option>
              <option>As needed</option>
            </select>
          </div>

          <div>
            <label className="block text-slate-700 mb-2">Times</label>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="time"
                className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="time"
                className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-slate-700 mb-2">Start Date</label>
              <input
                type="date"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue={editingMedicine?.startDate}
              />
            </div>

            <div>
              <label className="block text-slate-700 mb-2">Duration</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., 30 days or Ongoing"
                defaultValue={editingMedicine?.duration}
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-700 mb-2">
              Notes (Optional)
            </label>
            <textarea
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              rows={3}
              placeholder="Additional instructions..."
              defaultValue={editingMedicine?.notes}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={() => {
                setShowAddModal(false);
                setEditingMedicine(null);
              }}
              className="flex-1 px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600"
            >
              {editingMedicine ? "Update Medicine" : "Add Medicine"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div className="p-4 lg:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl text-slate-900 mb-2">Medicine Manager</h1>
          <p className="text-slate-600">
            Manage your medications and schedules
          </p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 shadow-md"
        >
          <Plus className="w-5 h-5" />
          Add Medicine
        </button>
      </div>

      {/* Medicine Cards - Mobile View */}
      <div className="grid gap-4 md:hidden">
        {medicines.map((medicine) => (
          <div
            key={medicine.id}
            className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Pill className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-slate-900">{medicine.name}</h3>
                  <p className="text-sm text-slate-600">{medicine.dosage}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(medicine)}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(medicine.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-slate-600">
                <Clock className="w-4 h-4" />
                <span>
                  {medicine.frequency} - {medicine.times.join(", ")}
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Calendar className="w-4 h-4" />
                <span>
                  Since {medicine.startDate} • {medicine.duration}
                </span>
              </div>
              {medicine.notes && (
                <p className="text-slate-600 mt-2 pt-2 border-t border-slate-200">
                  {medicine.notes}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Medicine Table - Desktop View */}
      <div className="hidden md:block bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left px-6 py-4 text-slate-700">Medicine</th>
                <th className="text-left px-6 py-4 text-slate-700">Dosage</th>
                <th className="text-left px-6 py-4 text-slate-700">
                  Frequency
                </th>
                <th className="text-left px-6 py-4 text-slate-700">Times</th>
                <th className="text-left px-6 py-4 text-slate-700">Duration</th>
                <th className="text-left px-6 py-4 text-slate-700">Notes</th>
                <th className="text-right px-6 py-4 text-slate-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              
              {medicines.map((medicine) => (
                <tr key={medicine.id} className="hover:bg-slate-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                        <Pill className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="text-slate-900">{medicine.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600">
                    {medicine.dosage}
                  </td>
                  <td className="px-6 py-4 text-slate-600">
                    {medicine.frequency}
                  </td>
                  <td className="px-6 py-4 text-slate-600">
                    {medicine.times.join(", ")}
                  </td>
                  <td className="px-6 py-4 text-slate-600">
                    {medicine.duration}
                  </td>
                  <td className="px-6 py-4 text-slate-600 max-w-xs truncate">
                    {medicine.notes}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleEdit(medicine)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(medicine.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showAddModal && <AddMedicineModal />}
    </div>
  );
};

export default DashMedicines;
