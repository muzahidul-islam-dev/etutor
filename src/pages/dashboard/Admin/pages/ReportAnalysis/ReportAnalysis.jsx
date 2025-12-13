const ReportAnalysis = () => {
    const transactions = [
        { id: "TX-1001", user: "Muzahidul Islam", type: "Post Fee", amount: "+500 BDT", date: "Today, 10:00 AM" },
        { id: "TX-1002", user: "Rahim Ahmed", type: "Subscription", amount: "+2000 BDT", date: "Yesterday" },
        { id: "TX-1003", user: "Karim", type: "Post Fee", amount: "+500 BDT", date: "12 Oct, 2023" },
    ];

    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-800">Financial Reports</h2>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-6 rounded-xl shadow-lg">
                    <p className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">Total Platform Earnings</p>
                    <h3 className="text-3xl font-bold">15,000 BDT</h3>
                    <p className="text-emerald-400 text-xs mt-2 flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                        +12% this month
                    </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-1">Total Transactions</p>
                    <h3 className="text-3xl font-bold text-gray-800">124</h3>
                    <p className="text-gray-400 text-xs mt-2">Successful payments</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-1">Pending Payouts</p>
                    <h3 className="text-3xl font-bold text-gray-800">2,500 BDT</h3>
                    <p className="text-gray-400 text-xs mt-2">To be cleared</p>
                </div>
            </div>

            {/* Transaction History Table */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="font-bold text-gray-800">Recent Transactions</h3>
                </div>
                <table className="w-full text-left">
                    <thead className="bg-slate-50 text-xs uppercase text-slate-500 font-semibold">
                        <tr>
                            <th className="p-4">Transaction ID</th>
                            <th className="p-4">User</th>
                            <th className="p-4">Type</th>
                            <th className="p-4">Date</th>
                            <th className="p-4 text-right">Amount</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm">
                        {transactions.map((tx) => (
                            <tr key={tx.id} className="hover:bg-slate-50 transition-colors">
                                <td className="p-4 font-mono text-slate-600">{tx.id}</td>
                                <td className="p-4 font-medium text-gray-800">{tx.user}</td>
                                <td className="p-4 text-gray-600">{tx.type}</td>
                                <td className="p-4 text-gray-500">{tx.date}</td>
                                <td className="p-4 text-right font-bold text-emerald-600">{tx.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default ReportAnalysis;