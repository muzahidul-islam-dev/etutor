import { useState } from "react";

const MyApplication = () => {
    const [applications, setApplications] = useState([
        { id: 1, jobTitle: "Class 5 Math Tutor", date: "2 days ago", salary: "4000 BDT", status: "Pending" },
        { id: 2, jobTitle: "HSC Physics", date: "1 week ago", salary: "7000 BDT", status: "Rejected" },
    ]);
    const onDelete = () => {}
    const onUpdate = () => {}
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">My Applications</h2>
                <div className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">
                    {applications.length} Active Requests
                </div>
            </div>
            
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                {applications.length === 0 ? (
                    <div className="p-12 text-center text-gray-500">
                        <svg className="w-12 h-12 mx-auto text-gray-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        <p>No applications found.</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-100">
                                    <th className="p-4 font-semibold">Job Title</th>
                                    <th className="p-4 font-semibold">Applied Date</th>
                                    <th className="p-4 font-semibold">Salary Quote</th>
                                    <th className="p-4 font-semibold">Status</th>
                                    <th className="p-4 font-semibold text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 text-sm">
                                {applications.map((app) => (
                                    <tr key={app.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="p-4 font-medium text-gray-800">{app.jobTitle}</td>
                                        <td className="p-4 text-gray-600">{app.date}</td>
                                        <td className="p-4 text-emerald-600 font-bold">{app.salary}</td>
                                        <td className="p-4">
                                            <span className={`px-2 py-1 rounded text-xs font-bold ${
                                                app.status === 'Approved' ? 'bg-emerald-100 text-emerald-700' :
                                                app.status === 'Rejected' ? 'bg-red-100 text-red-700' :
                                                'bg-yellow-100 text-yellow-700'
                                            }`}>
                                                {app.status}
                                            </span>
                                        </td>
                                        <td className="p-4 text-right">
                                            {app.status === 'Pending' ? (
                                                <div className="flex justify-end gap-2">
                                                    <button onClick={() => onUpdate(app)} className="text-blue-600 hover:text-blue-800 font-medium text-xs bg-blue-50 px-3 py-1 rounded hover:bg-blue-100 transition-colors">
                                                        Update
                                                    </button>
                                                    <button onClick={() => onDelete(app.id)} className="text-red-600 hover:text-red-800 font-medium text-xs bg-red-50 px-3 py-1 rounded hover:bg-red-100 transition-colors">
                                                        Delete
                                                    </button>
                                                </div>
                                            ) : (
                                                <span className="text-gray-400 text-xs italic">No actions available</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyApplication;