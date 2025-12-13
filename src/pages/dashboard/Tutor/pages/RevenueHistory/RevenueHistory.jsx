const RevenueHistory = () => {
    const transactions = [
        { id: "TX-998", date: "01 Nov, 2023", desc: "Tuition Fee - Class 8 Math", amount: "+5000 BDT", status: "Paid" },
        { id: "TX-992", date: "01 Oct, 2023", desc: "Tuition Fee - Class 8 Math", amount: "+5000 BDT", status: "Paid" },
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Revenue History</h2>
                    <p className="text-gray-500 text-sm">Track your earnings and payouts.</p>
                </div>
                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-4 rounded-xl shadow-lg w-full sm:w-auto">
                    <p className="text-xs opacity-80 mb-1">Total Lifetime Earnings</p>
                    <div className="flex justify-between items-end gap-8">
                        <p className="text-2xl font-bold">10,000 BDT</p>
                        <button className="text-xs bg-white/20 hover:bg-white/30 px-3 py-1 rounded transition-colors">Request Withdraw</button>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-100 text-xs uppercase text-gray-500">
                        <tr>
                            <th className="p-4">Date</th>
                            <th className="p-4">Description</th>
                            <th className="p-4">Status</th>
                            <th className="p-4 text-right">Amount</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm">
                        {transactions.map((tx) => (
                            <tr key={tx.id}>
                                <td className="p-4 text-gray-600 whitespace-nowrap">{tx.date}</td>
                                <td className="p-4 text-gray-800 font-medium">
                                    {tx.desc} 
                                    <div className="text-gray-400 text-xs font-normal">{tx.id}</div>
                                </td>
                                <td className="p-4">
                                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">{tx.status}</span>
                                </td>
                                <td className="p-4 text-right font-bold text-emerald-600">{tx.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default RevenueHistory