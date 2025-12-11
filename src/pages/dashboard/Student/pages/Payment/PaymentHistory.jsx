const PaymentHistory = () => {
    const history = [
        { id: "TXN-8821", date: "12 Oct, 2023", amount: "500 BDT", purpose: "Premium Post Upgrade", status: "Success" },
        { id: "TXN-7734", date: "05 Sep, 2023", amount: "200 BDT", purpose: "Tutor Contact Unlock", status: "Success" },
    ];

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Payment History</h2>
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-100">
                            <th className="p-4 font-semibold">Transaction ID</th>
                            <th className="p-4 font-semibold">Date</th>
                            <th className="p-4 font-semibold">Purpose</th>
                            <th className="p-4 font-semibold">Amount</th>
                            <th className="p-4 font-semibold text-right">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm">
                        {history.map((item) => (
                            <tr key={item.id}>
                                <td className="p-4 font-mono text-gray-600">{item.id}</td>
                                <td className="p-4 text-gray-600">{item.date}</td>
                                <td className="p-4 text-gray-800 font-medium">{item.purpose}</td>
                                <td className="p-4 font-bold text-emerald-600">{item.amount}</td>
                                <td className="p-4 text-right"><span className="bg-emerald-50 text-emerald-600 px-2 py-1 rounded text-xs font-bold">{item.status}</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;