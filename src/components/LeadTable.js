import React from 'react';

export default function LeadTable() {
  const leads = [
    { name: 'Winford Asher', topic: 'Cafe A100 for commercial use', status: 'New', created: '4/2/2024' },
    { name: 'Josia Love', topic: 'Upgrading service plan', status: 'New', created: '3/30/2024' },
    { name: 'Amy Stone', topic: 'New product launch', status: 'New', created: '3/25/2024' },
    { name: 'Sophie Green', topic: 'New feature launch', status: 'New', created: '3/20/2024' },
    { name: 'Dorothy Williams', topic: 'New product launch', status: 'New', created: '3/15/2024' },
    { name: 'Jane Reyes', topic: 'Expand business', status: 'New', created: '3/10/2024' },
    { name: 'Allan Munger', topic: 'High buying intent', status: 'New', created: '3/5/2024' },
    { name: 'Chris Hartley', topic: 'New product launch', status: 'New', created: '3/2/2024' },
  ];

  return (
    <div className='bg-white shadow rounded'>
    {/* generate an input search */}
     <div className='py-4 px-3'>
        <input type="text" placeholder="Sort filter and search with Copilot" className="border-2 border-gray-300 text-sm rounded-md px-3 py-3 min-w-[450px]" />
     </div>


     <table className="w-full mt-4">
      <thead>
        <tr className="text-left border-b border-gray-100">
          <th className="p-4 text-sm">Name</th>
          <th className="p-4 text-sm">Topic</th>
          <th className="p-4 text-sm">Status reason</th>
          <th className="p-4 text-sm">Created On</th>
        </tr>
      </thead>
      <tbody>
        {leads.map((lead, index) => (
          <tr key={index} className="hover:bg-gray-100 cursor-pointer">
            <td className="p-4 text-sm">{lead.name}</td>
            <td className="p-4 text-sm">{lead.topic}</td>
            <td className="p-4 text-sm">{lead.status}</td>
            <td className="p-4 text-sm">{lead.created}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}
