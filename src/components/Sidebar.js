"use client"
import React,{useState} from 'react';
import {
 HomeOutlined,
 Menu,
 KeyboardArrowDown,
 KeyboardArrowUp,
 Schedule,
 PushPinOutlined,
 UnfoldMore,
 PhoneCallback
} from '@mui/icons-material';
import { usePathname } from 'next/navigation'


export default function Sidebar() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname()

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="w-48 flex-shrink-0 bg-[#E8E8E8] border-r py-2 border-[#D8D8D8] flex flex-col">
      <div className='px-2'>
        <Menu className={` text-[#4B4E68] `} style={{ fontSize: "20px" }} />
      </div>
      <nav className="flex-1 mt-2">
        <ul>
          {/* Home Link */}
          <li className="p-2 flex gap-2 items-center hover:bg-[#FFFFFF] text-sm cursor-pointer">
            <HomeOutlined className={` text-[#4B4E68] `} style={{ fontSize: "20px" }} />
            Home
          </li>
          
          {/* Recent Link */}
          <li className="p-2 flex items-center justify-between hover:bg-[#FFFFFF] cursor-pointer" onClick={toggleDropdown}>
            <div className="flex gap-2 items-center text-sm">
              <Schedule className={` text-[#4B4E68] `} style={{ fontSize: "20px" }} />
              Recent
            </div>
            <span>
              {isDropdownOpen ? 
               <KeyboardArrowUp className={` text-[#4B4E68] `} style={{ fontSize: "20px" }} />
                            : 
              <KeyboardArrowDown className={` text-[#4B4E68] `} style={{ fontSize: "20px" }} />
              }
              </span>
          </li>

          {/* Pinned */}
          <li className="p-2 flex items-center justify-between hover:bg-[#FFFFFF] cursor-pointer" onClick={toggleDropdown}>
            <div className="flex gap-2 items-center text-sm">
              <PushPinOutlined className={` text-[#4B4E68] `} style={{ fontSize: "20px" }} />
              Pinned
            </div>
            <span>
             {isDropdownOpen ? 
               <KeyboardArrowUp className={` text-[#4B4E68] `} style={{ fontSize: "20px" }} />
                            : 
              <KeyboardArrowDown className={` text-[#4B4E68] `} style={{ fontSize: "20px" }} />
              }
            </span>
          </li>
        </ul>

        <div className='mt-4'>
            <h6 className='font-medium text-sm px-3'>My work</h6>
            <ul className='mt-2'>
            {/* Sales accelerator Link */}
            <li className="p-2 flex gap-2 items-center hover:bg-[#FFFFFF] text-sm cursor-pointer">
              <HomeOutlined className={` text-[#4B4E68] `} style={{ fontSize: "20px" }} />
              Sales accelerator
            </li>
             {/* Dashbaords Link */}
             <li className="p-2 flex gap-2 items-center hover:bg-[#FFFFFF] text-sm cursor-pointer">
              <HomeOutlined className={` text-[#4B4E68] `} style={{ fontSize: "20px" }} />
              Dashbaords
            </li>
             {/* Activities Link */}
             <li className="p-2 flex gap-2 items-center hover:bg-[#FFFFFF] text-sm cursor-pointer">
              <HomeOutlined className={` text-[#4B4E68] `} style={{ fontSize: "20px" }} />
              Activities
            </li>
          </ul>
        </div>

        <div className='mt-4'>
            <h6 className='font-medium text-sm px-3'>Customers</h6>
            <ul className='mt-2'>
            {/* Accounts Link */}
            <li className="p-2 flex gap-2 items-center hover:bg-[#FFFFFF] text-sm cursor-pointer">
              <HomeOutlined className={` text-[#4B4E68] `} style={{ fontSize: "20px" }} />
              Accounts
            </li>
             {/* Contacts Link */}
             <li className="p-2 flex gap-2 items-center hover:bg-[#FFFFFF] text-sm cursor-pointer">
              <HomeOutlined className={` text-[#4B4E68] `} style={{ fontSize: "20px" }} />
              Contacts
            </li>
             
          </ul>
        </div>

        <div className='mt-4'>
            <h6 className='font-medium text-sm px-3'>Sales</h6>
            <ul className='mt-2'>
            {/* Leads Link */}
            <li className={`py-2 px-1 ${pathname.includes('/')? 'bg-[#FFFFFF]': ''} flex gap-2 items-center hover:bg-[#FFFFFF] text-sm cursor-pointer`}>
              <div className='flex gap-1 items-center'>
                <div className='bg-[#5663d7] w-[3px] h-4 rounded-sm'></div>
                <PhoneCallback className={` text-[#4B4E68] `} style={{ fontSize: "20px" }} />
              </div>
             
              Leads
            </li>
             {/* Competitors Link */}
             <li className="p-2 flex gap-2 items-center hover:bg-[#FFFFFF] text-sm cursor-pointer">
              <HomeOutlined className={` text-[#4B4E68] `} style={{ fontSize: "20px" }} />
              Competitors
            </li>
             {/* Competitors Link */}
             <li className="p-2 flex gap-2 items-center hover:bg-[#FFFFFF] text-sm cursor-pointer">
              <HomeOutlined className={` text-[#4B4E68] `} style={{ fontSize: "20px" }} />
              Competitors
            </li>
          </ul>
        </div>

        <div className='mt-4'>
            <h6 className='font-medium text-sm px-3'>Collateral</h6>
            <ul className='mt-2'>
            {/* Quotes Link */}
            <li className="p-2 flex gap-2 items-center hover:bg-[#FFFFFF] text-sm cursor-pointer">
              <HomeOutlined className={` text-[#4B4E68] `} style={{ fontSize: "20px" }} />
              Quotes
            </li>
             {/* Orders Link */}
             <li className="p-2 flex gap-2 items-center hover:bg-[#FFFFFF] text-sm cursor-pointer">
              <HomeOutlined className={` text-[#4B4E68] `} style={{ fontSize: "20px" }} />
              Orders
            </li>
             {/* Invoices Link */}
             <li className="p-2 flex gap-2 items-center hover:bg-[#FFFFFF] text-sm cursor-pointer">
              <HomeOutlined className={` text-[#4B4E68] `} style={{ fontSize: "20px" }} />
              Invoices
            </li>
              {/* Products Link */}
              <li className="p-2 flex gap-2 items-center hover:bg-[#FFFFFF] text-sm cursor-pointer">
              <HomeOutlined className={` text-[#4B4E68] `} style={{ fontSize: "20px" }} />
              Products
            </li>
             {/* Sales Literature Link */}
             <li className="p-2 flex gap-2 items-center hover:bg-[#FFFFFF] text-sm cursor-pointer">
              <HomeOutlined className={` text-[#4B4E68] `} style={{ fontSize: "20px" }} />
              Sales Literature
            </li>
          </ul>
        </div>


        <div className='mt-4'>
            <h6 className='font-medium text-sm px-3'>Marketing</h6>
            <ul className='mt-2'>
            {/* Marketing Link */}
            <li className="p-2 flex gap-2 items-center hover:bg-[#FFFFFF] text-sm cursor-pointer">
              <HomeOutlined className={` text-[#4B4E68] `} style={{ fontSize: "20px" }} />
              Marketing lists
            </li>
             {/* Quick Link */}
             <li className="p-2 flex gap-2 items-center hover:bg-[#FFFFFF] text-sm cursor-pointer">
              <HomeOutlined className={` text-[#4B4E68] `} style={{ fontSize: "20px" }} />
              Quick Campaigns
            </li>
             
          </ul>
        </div>

        <div className='mt-4'>
            <h6 className='font-medium text-sm px-3'>Performance</h6>
            <ul className='mt-2'>
           
            <li className="p-2 flex items-center justify-between hover:bg-[#FFFFFF] cursor-pointer">
            <div className="flex gap-2 items-center text-sm">
              <div className='bg-[#5d32ba] w-[30px] h-[30px] flex justify-center items-center text-white rounded-[4px]'>S</div>
              Sales
            </div>
            <span>
             <UnfoldMore className={` text-[#4B4E68] `} style={{ fontSize: "20px" }} />

              </span>
          </li>
            
             
          </ul>
        </div>

      </nav>
      <div className="px-2 py-4 border-t mt-8 border-gray-700">
        <button className="w-full bg-[#5d32ba] text-white text-sm py-3 rounded">Logout</button>
      </div>
    </div>
  );
}
