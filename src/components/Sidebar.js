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
import ModalComponent from './Modals/Modal';


export default function Sidebar() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname()

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleModal = () =>{
    setIsOpen(!isOpen)
}

  return (
    <>
     <ModalComponent isOpen={isOpen} onClose={toggleModal} >
     <div className=" mx-auto bg-white shadow-lg rounded-lg p-6 mt-5">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold">
          Agent Skill
        </h2>
        <p className="text-sm text-gray-600">
          Check if on-hand inventory will allow all sales orders to ship without
          delay.
        </p>
      </div>

      {/* Expandable Section */}
      <div
        className={`border p-4 rounded-lg bg-white shadow `}
      >
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <p className="text-sm font-medium">
            Check if on-hand inventory will allow all sales orders to ship
            without delay
          </p>
          <button className="text-blue-600">
            {isExpanded ? 
               <KeyboardArrowUp className={` text-[#4B4E68] `} style={{ fontSize: "20px" }} />
               : 
                <KeyboardArrowDown className={` text-[#4B4E68] `} style={{ fontSize: "20px" }} />
            }
          </button>
        </div>

        {isExpanded && (
          <div className="mt-4 text-sm text-gray-700">
            <p>
              When <span className="text-blue-600 underline">any vendor</span>{" "}
              sends an email with changes to{" "}
              <span className="text-blue-600 underline">
                confirmed purchase orders
              </span>
              , check if the resulting{" "}
              <span className="text-blue-600 underline">on-hand inventory</span>{" "}
              will allow <span className="text-blue-600 underline">all sales orders</span>{" "}
              to <span className="text-blue-600 underline">ship without delay</span>. 
              If so, <span className="text-blue-600 underline">update the purchase order </span> 
              to reflect the change.
            </p>
          </div>
        )}
      </div>

      {/* Email Access Section */}
      <div className="mt-6 ">
        <h3 className="text-sm font-medium mb-1">Enable email access</h3>
        <p className="text-sm text-gray-600">
          Allow the agent to access email inboxes to read mail from known vendors.
        </p>
      
      </div>

      <div className="flex items-center space-x-2 mt-2">
          <input
            type="email"
            value="purchasing@contoso.com"
            readOnly
            className="border p-2 rounded-md w-full text-sm"
          />
          <button className="bg-blue-600 text-white px-4 py-2 whitespace-nowrap rounded-md text-sm">
            Allow access
          </button>
        </div>

      {/* Footer Buttons */}
      <div className="mt-20 flex justify-end space-x-2">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
          Activate
        </button>
        <button className="bg-gray-200 px-4 py-2 rounded-md text-sm">
          Close
        </button>
      </div>
    </div>
      </ModalComponent>

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
              {/* Agent Skill Link */}
              <li onClick={() =>setIsOpen(true)} className="p-2 flex gap-2 items-center hover:bg-[#FFFFFF] text-sm cursor-pointer">
              <HomeOutlined className={` text-[#4B4E68] `} style={{ fontSize: "20px" }} />
              Agent Skill
            </li>
             {/* Opportunities Link */}
             <li className="p-2 flex gap-2 items-center hover:bg-[#FFFFFF] text-sm cursor-pointer">
              <HomeOutlined className={` text-[#4B4E68] `} style={{ fontSize: "20px" }} />
              Opportunities
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
    </>
  );
}
