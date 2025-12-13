import { useState } from 'react';
import { motion } from "motion/react"
const EditUserModal = ({ isOpen, onClose, user, onSave }) => {
    if (!isOpen || !user) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        onSave(user.id, {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            role: formData.get('role'),
            status: formData.get('status')
        });
    };

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden"
            >
                <div className="bg-slate-800 px-6 py-4 flex justify-between items-center">
                    <h3 className="text-white font-bold text-lg">Edit User Profile</h3>
                    <button onClick={onClose} className="text-white/70 hover:text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input name="name" defaultValue={user.name} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 outline-none" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input name="email" defaultValue={user.email} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 outline-none" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <input name="phone" defaultValue={user.phone} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 outline-none" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                            <select name="role" defaultValue={user.role} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 outline-none">
                                <option value="Student">Student</option>
                                <option value="Tutor">Tutor</option>
                                <option value="Admin">Admin</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                            <select name="status" defaultValue={user.status} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 outline-none">
                                <option value="Active">Active</option>
                                <option value="Suspended">Suspended</option>
                                <option value="Pending">Pending</option>
                            </select>
                        </div>
                    </div>
                    <div className="pt-4 flex justify-end gap-3">
                        <button type="button" onClick={onClose} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Cancel</button>
                        <button type="submit" className="px-6 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700">Save Changes</button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

const UserManagement = () => {
    const [users, setUsers] = useState([
        { id: 1, name: "Muzahidul Islam", email: "muzahidul@example.com", phone: "+88017...", role: "Student", status: "Active", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Muzahidul" },
        { id: 2, name: "Tanvir Hasan", email: "tanvir@example.com", phone: "+88018...", role: "Tutor", status: "Active", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tanvir" },
        { id: 3, name: "Suspended User", email: "bad@example.com", phone: "+88019...", role: "Tutor", status: "Suspended", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bad" },
    ]);

    const [isEditOpen, setIsEditOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleEditClick = (user) => {
        setSelectedUser(user);
        setIsEditOpen(true);
    };

    const handleSaveUser = (id, updatedData) => {
        setUsers(users.map(u => u.id === id ? { ...u, ...updatedData } : u));
        setIsEditOpen(false);
    };

    const handleDeleteUser = (id) => {
        if(window.confirm("Are you sure you want to delete this user? This action cannot be undone.")) {
            setUsers(users.filter(u => u.id !== id));
        }
    };

    const handleQuickRoleChange = (id, newRole) => {
        setUsers(users.map(u => u.id === id ? { ...u, role: newRole } : u));
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">User Management</h2>
                <div className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-medium">
                    Total Users: {users.length}
                </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b border-gray-200 text-xs uppercase text-slate-500 font-semibold">
                        <tr>
                            <th className="p-4">User</th>
                            <th className="p-4">Role</th>
                            <th className="p-4">Status</th>
                            <th className="p-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm">
                        {users.map(user => (
                            <tr key={user.id} className="hover:bg-slate-50 transition-colors">
                                <td className="p-4">
                                    <div className="flex items-center gap-3">
                                        <img src={user.img} alt="" className="w-10 h-10 rounded-full bg-gray-200 border border-gray-300" />
                                        <div>
                                            <p className="font-bold text-gray-800">{user.name}</p>
                                            <p className="text-gray-500 text-xs">{user.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4">
                                    {/* Quick Role Changer */}
                                    <select 
                                        value={user.role} 
                                        onChange={(e) => handleQuickRoleChange(user.id, e.target.value)}
                                        className="bg-white border border-gray-200 text-gray-700 text-xs rounded-lg px-2 py-1 focus:ring-2 focus:ring-slate-500 outline-none cursor-pointer"
                                    >
                                        <option value="Student">Student</option>
                                        <option value="Tutor">Tutor</option>
                                        <option value="Admin">Admin</option>
                                    </select>
                                </td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                                        user.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                    }`}>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="p-4 text-right">
                                    <div className="flex justify-end gap-2">
                                        <button onClick={() => handleEditClick(user)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Edit">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                                        </button>
                                        <button onClick={() => handleDeleteUser(user.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <EditUserModal 
                isOpen={isEditOpen} 
                onClose={() => setIsEditOpen(false)} 
                user={selectedUser} 
                onSave={handleSaveUser} 
            />
        </div>
    );
};

export default UserManagement;