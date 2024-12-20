"use client"
import React,{useState} from 'react';
import Image from 'next/image';
import copilot_icon from '../app/assets/copilot.svg'
import {
    KeyboardArrowDown,
    ArrowDownward,
    ArrowUpward
   } from '@mui/icons-material';

export default function LeadTable() {

 const [sortOrder, setSortOrder] = useState("asc");
 const [searchQuery, setSearchQuery] = useState("");

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };


  const mockData = [
    { name: 'Winford Asher', topic: 'Cafe A100 for commercial use', status: 'New', created: '4/2/2024' },
    { name: 'Josia Love', topic: 'Upgrading service plan', status: 'New', created: '3/30/2024' },
    { name: 'Amy Stone', topic: 'New product launch', status: 'New', created: '3/25/2024' },
    { name: 'Sophie Green', topic: 'New feature launch', status: 'New', created: '3/20/2024' },
    { name: 'Dorothy Williams', topic: 'New product launch', status: 'New', created: '3/15/2024' },
    { name: 'Jane Reyes', topic: 'Expand business', status: 'New', created: '3/10/2024' },
    { name: 'Allan Munger', topic: 'High buying intent', status: 'New', created: '3/5/2024' },
    { name: 'Chris Hartley', topic: 'New product launch', status: 'New', created: '3/2/2024' },
  ];

    // Filter the data based on the search query
    const filteredData = mockData.filter((item) =>
        Object.values(item).some((value) =>
          value.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )

  return (
    <div className='bg-white shadow rounded'>
    {/* generate an input search */}
     <div className='py-4 px-3'>
        <div className='relative w-[450px]'>
         <input type="text" 
           value={searchQuery}
           onChange={(e) => setSearchQuery(e.target.value)}
         placeholder="Sort filter and search with Copilot" className="border-2 placeholder:text-gray-500 border-gray-300 text-sm w-full rounded-md px-3 py-3" />
            <div className='absolute top-1/2 transform -translate-y-1/2 right-4'>
            <Image
                src={copilot_icon}
                alt="search_icon"
                className="w-[18px] h-[18px] "
            />
            </div>
        </div>
       
     </div>


     <table className="w-full mt-4">
      <thead>
        <tr className="text-left border-b border-gray-100">
             {/* Checkbox Header */}
            <th className="p-4">
            </th>

          <th className="p-4 text-sm">
          <div className='flex gap-1 items-center'>
            Name <KeyboardArrowDown  className={` text-gray-500] `} style={{ fontSize: "18px" }} />
            </div>
          </th>
          <th className="p-4 text-sm">
            <div className='flex gap-1 items-center'>
            Topic <KeyboardArrowDown  className={` text-gray-500 `} style={{ fontSize: "18px" }} />
            </div>
          </th>
          <th className="p-4 text-sm">
            <div className='flex gap-1 items-center'>
            Status reason <KeyboardArrowDown  className={` text-gray-500 `} style={{ fontSize: "18px" }} />
            </div>
          </th>
          <th
            className="p-4 text-sm cursor-pointer"
            onClick={toggleSortOrder}
          >
            <div className='flex gap-1 items-center'>
             Created on{" "}
                {sortOrder === "asc"? (
                <ArrowUpward className={` text-gray-500 `} style={{ fontSize: "16px" }} />
                ) : (
                <ArrowDownward className={` text-gray-500 `} style={{ fontSize: "16px" }} />
                )}
            </div>           
          </th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((lead, index) => (
          <tr key={index} className="hover:bg-gray-100 cursor-pointer">
              {/* Checkbox Column */}
          <td className="p-4">
            <input type="checkbox" className="cursor-pointer" />
          </td>
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
