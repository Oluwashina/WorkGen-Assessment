"use client"
import Layout from '@/components/Layout';
import React,{useState} from 'react';
import Image from 'next/image';
import user4 from '../app/assets/user4.png'
import {
  MessageTwoTone,
  ExpandMore,
  Add,
  Refresh,
  Delete,
  Assessment,
  Toc,
  Microsoft,
  PieChart,
  ViewColumnOutlined,
  MoreVert
 } from '@mui/icons-material';
 import copilot_icon from '../app/assets/copilot.svg'
import LeadTable from '@/components/LeadTable';
import ModalComponent from '@/components/Modals/Modal';

export default function Home() {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("research");

  const toggleModal = () =>{
    setIsOpen(!isOpen)
}



  return (
    <>
       {/* Engage Modal */}
       <ModalComponent title='Engage with Jane Reyes' isOpen={isOpen} onClose={toggleModal} >
            <div className="mt-5">
            {/* Header */}
            <div className=" bg-white shadow-lg rounded-lg p-4">
              <div className="flex items-center space-x-4">
                <div className="relative">
                      <Image src={user4} alt="avatar" width={30} height={30} className="rounded-full" />
                      <div className="bg-[#559b4e] w-[8px] h-[8px] rounded-full absolute right-0 bottom-0 border border-[#F7F8FC] p-1"></div>
                  </div>
                <div>
                  <h3 className="text-sm font-semibold">Jane Reyes</h3>
                  <p className="text-xs text-gray-500">COO, Northwind Traders</p>
                </div>
              </div>
             
            </div>

               {/* Content */}
               <div className="mt-4 bg-gray-100 p-3 rounded-md flex justify-between items-center">
                <p className="text-sm">
                  Jane may be interested in upgrading espresso machines for her in-store
                  coffee shops.
              </p>
             
             <div className="flex space-x-2">
                <button className="px-4 py-2 text-xs bg-gray-200 rounded-md">
                  Edit
                </button>
                <button className="px-4 py-2 text-xs bg-blue-600 text-white rounded-md">
                  Approve and Send
                </button>
              </div>
              </div>

            {/* Tabs */}
            <div className="mt-5 border-b">
              <nav className="flex space-x-6">
                <button
                  className={`pb-2 ${
                    activeTab === "engage"
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-500"
                  } border-b-2 font-medium text-sm`}
                  onClick={() => setActiveTab("engage")}
                >
                  Engage
                </button>
                <button
                  className={`pb-2 ${
                    activeTab === "research"
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-500"
                  } border-b-2 font-medium text-sm`}
                  onClick={() => setActiveTab("research")}
                >
                  Research
                </button>
              </nav>
            </div>

               {/* Why I picked this lead */}
               <div className="mt-6 p-4 bg-gray-50 border rounded-lg">
                <h4 className="font-semibold">Why I picked this lead</h4>
                <ul className="mt-2 list-disc pl-4 text-sm text-gray-700 space-y-2">
                  <li>
                    Jane is a <strong>key decision maker</strong> and was browsing{" "}
                    <em>‘espresso machines’</em> on First Coffee’s website.
                  </li>
                  <li>
                    Multiple people at her company have reported <strong>‘slowness’</strong>{" "}
                    during service requests.
                  </li>
                  <li>
                    Northwind Traders currently see <strong>$200M in revenue</strong> from
                    their in-store coffee shops.
                  </li>
                </ul>

                {/* Metrics */}
                <div className="mt-4 grid grid-cols-3 gap-4">
                  <div className="shadow rounded-lg bg-white py-3 px-2">
                  <p className="text-gray-500 text-sm">Decision Maker</p>
                    <p className="text-sm font-semibold">Yes</p>
                  </div>
                  <div className="shadow rounded-lg bg-white py-3 px-2">
                     <p className="text-gray-500 text-sm">Potential Deal Value</p>
                    <p className="text-sm font-semibold">$1M</p>
                  </div>
                  <div className="shadow rounded-lg bg-white py-3 px-2">
                    <p className="text-gray-500 text-sm">Intent</p>
                    <p className="text-sm font-semibold">High</p>
                  </div>
                </div>
              </div>

         

            {/* About Section */}
            <div className="mt-6 p-4 bg-white shadow border rounded-lg">
              <h4 className="font-semibold">About Jane</h4>
              <p className="mt-2 text-sm text-gray-700">
                Jane Reyes, the Chief Operating Officer of Northwind Traders, is a
                dynamic leader with a proven track record in optimizing operations and
                enhancing customer experiences. Under her guidance, Northwind Traders’
                in-store coffee shops have flourished, becoming a hallmark of quality
                and innovation. Jane’s commitment to excellence makes her an ideal
                partner for First Coffee. She’s always seeking top-tier equipment to
                elevate her coffee shops’ offerings, ensuring consistent, high-quality
                service.
              </p>
            </div>
          </div>

        </ModalComponent>

        <Layout>     
            <div className="flex items-center justify-between bg-white px-3 py-2 shadow-sm border-b">
              {/* Dropdown */}
              <div className="relative">
                <button
                  className="flex items-center space-x-1 text-gray-700 text-sm font-medium hover:text-gray-900"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <span>My open leads</span>
                  <ExpandMore className={` text-[#4B4E68] `} style={{ fontSize: "18px" }} />
                </button>
                {dropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md border z-10">
                    <ul className="text-sm text-gray-700">
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</li>
                    </ul>
                  </div>
                )}
              </div>

                {/* Icons and Buttons */}
                <div className="flex items-center space-x-4">
                  <button className="flex items-center text-gray-600 hover:text-gray-900">
                   <Assessment className={` text-[#4B4E68] `} style={{ fontSize: "18px" }} />
                    <span className="ml-1 text-xs">Show chart</span>
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-gray-900">
                    <Toc className={` text-[#4B4E68] `} style={{ fontSize: "18px" }} />
                    <span className="ml-1 text-xs">Focused view</span>
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-gray-900">
                   <Add className={` text-[#4B4E68] `} style={{ fontSize: "18px" }} />
                    <span className="ml-1 text-xs">New</span>
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-gray-900">
                  <Refresh className={` text-[#4B4E68] `} style={{ fontSize: "18px" }} />
                    <span className="ml-1 text-xs">Refresh</span>
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-gray-900">
                  <Microsoft className={` text-[#4B4E68] `} style={{ fontSize: "18px" }} />
                    <span className="ml-1 text-xs">Collaborate</span>
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-gray-900">
                   <Delete className={` text-[#4B4E68] `} style={{ fontSize: "18px" }} />
                    <span className="ml-1 text-xs">Delete</span>
                  </button>

                    <MoreVert className={` text-[#4B4E68] `} style={{ fontSize: "18px" }} />

                  <button className="flex items-center px-2 py-2 border rounded-md border-gray-600 text-gray-600 hover:text-gray-900">
                    <PieChart className={` text-[#4B4E68] `} style={{ fontSize: "18px" }} />
                    <span className="ml-1 text-xs">Smart data</span>
                  </button>
                  <button className="flex items-center px-2 py-2 border rounded-md border-gray-600 text-gray-600 hover:text-gray-900">
                    <Add className={` text-[#4B4E68] `} style={{ fontSize: "18px" }} />
                    <span className="ml-1 text-xs">Edit filters</span>
                  </button>
                  <button className="flex items-center px-2 py-2 border rounded-md border-gray-600 text-gray-600 hover:text-gray-900">
                   <ViewColumnOutlined className={` text-[#4B4E68] `} style={{ fontSize: "18px" }} />
                    <span className="ml-1 text-xs">Edit columns</span>
                  </button>
                  <button className="flex gap-1 items-center px-2 py-2 rounded-md bg-[#335CC8]">
                   <ViewColumnOutlined className={` text-white `} style={{ fontSize: "18px" }} />
                    <span className="text-white text-xs">|</span>
                     <ExpandMore className={` text-white `} style={{ fontSize: "18px" }} />
                  </button>
                </div>
            </div>

            <div className="relative bg-gradient-to-r mt-4 from-blue-400 via-blue-300 to-purple-400 rounded-lg p-[1px]">
               <div className="bg-white relative rounded-lg shadow p-5 hover:shadow-xl">
              <div className='flex gap-2 items-center'>
                <Image src={copilot_icon}
                  alt="copilot"
                className="w-[25px] h-[25px]"
                 />
                <h1 className="text-lg font-semibold">
                  Hi Mona,{" "}
                  <span className="text-[#3c40b5] font-bold">68%</span> of goal achieved
                  and rest can be achieved by focusing on 20 top leads.
                </h1>
              </div>
              
               

              <div className='grid grid-cols-3 gap-4 mt-5'>
                <div className='col-span-2'>
                  <div>
                      <p className="text-gray-600 text-sm">
                      Copilot has pinpointed 20 key leads that show strong purchase intent
                      and are actively engaging. These leads need your focus.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-4">
                      {/* Lead Cards */}
                    <div className="bg-white shadow h-fit rounded-lg p-4">
                        <div className='flex gap-2 items-center'>
                          <div>
                            <div className="relative">
                                <Image src={user4} alt="avatar" width={30} height={30} className="rounded-full" />
                                <div className="bg-[#559b4e] w-[8px] h-[8px] rounded-full absolute right-0 bottom-0 border border-[#F7F8FC] p-1"></div>
                            </div>
                          </div>
                          <div>
                            <h6 className='text-sm font-medium'>Jane Reyes</h6>
                            <div className='flex items-center gap-1'>
                              <p className='text-sm text-[#a0a4a4]'>COO</p>
                              <p className='text-[#a0a4a4]'>*</p>
                              <p className='text-sm text-[#a0a4a4]'>Northwind Traders</p>
                            </div>
                          </div>
                        </div>

                        <div 
                        onClick={() => setIsOpen(true)}
                        className='mt-2 bg-[#F4F5FE] py-4 px-3 rounded-lg cursor-pointer'>
                            <div className='flex gap-2 items-center'>
                                    <MessageTwoTone className={` text-[#4B4E68] `} style={{ fontSize: "20px" }} />
                                    <p className='text-sm font-medium'>Engage with Jane Reyes</p>
                            </div>
                            <div className='mt-2'>
                              <p className='text-sm '>Jane may be very interested in upgrading espresso machines for her in-store coffee shops</p>
                            </div>
                        </div>

                          <div className='flex mt-2 gap-2'>
                              <p className='text-sm text-[#a0a4a4]'>Expand business</p>
                              <div className='text-[#a0a4a4]'>*</div>
                              <p className='text-sm text-[#a0a4a4] font-medium'>High buying intent</p>
                            </div>
                      
                    </div>
                    <div className="bg-white shadow h-fit rounded-lg p-4">
                        <div className='flex gap-2 items-center'>
                          <div>
                            <div className="relative">
                                <Image src={user4} alt="avatar" width={30} height={30} className="rounded-full" />
                                <div className="bg-[#559b4e] w-[8px] h-[8px] rounded-full absolute right-0 bottom-0 border border-[#F7F8FC] p-1"></div>
                            </div>
                          </div>
                          <div>
                            <h6 className='text-sm font-medium'>Allan Munger</h6>
                            <div className='flex items-center gap-1'>
                              <p className='text-sm text-[#a0a4a4]'>Head of Real Estate... </p>
                              <p className='text-[#a0a4a4]'>*</p>
                              <p className='text-sm text-[#a0a4a4]'>Contoso Coffee</p>
                            </div>
                          </div>
                        </div>

                        <div className='mt-2 bg-[#F4F5FE] py-4 px-3 rounded-lg'>
                            <div className='flex gap-2 items-center'>
                                    <MessageTwoTone className={` text-[#4B4E68] `} style={{ fontSize: "20px" }} />
                                    <p className='text-sm font-medium'>Prepare for meeting with Alan</p>
                            </div>
                            <div className='mt-2'>
                              <p className='text-sm '>Prepare for high-buying intent meeting Copilot scheduled for 2 PM regardingupgrading service contract</p>
                            </div>
                        </div>

                        <div className='flex mt-2 gap-2'>
                              <p className='text-sm text-[#a0a4a4]'>Upcoming meeting</p>
                              <div className='text-[#a0a4a4]'>*</div>
                              <p className='text-sm text-[#a0a4a4] font-medium'>Due today</p>
                            </div>
                      
                    </div>
                  </div>

                  <div className='flex justify-center gap-1 mt-5'>
                    <div className='rounded-sm bg-[#697DC0] w-6 h-1 cursor-pointer'></div>
                    <div className='rounded-sm bg-[#a0a4a4] w-1 h-1 cursor-pointer'></div>
                    <div className='rounded-sm bg-[#a0a4a4] w-1 h-1 cursor-pointer'></div>
                    <div className='rounded-sm bg-[#a0a4a4] w-1 h-1 cursor-pointer'></div>
                  </div>

                </div>
                <div className="">
                    <h5 className='text-sm'>Other Key activities</h5>
                    <div className="bg-white shadow rounded-lg p-3 mt-2">
                        <div className='flex gap-2 items-center'>
                          <div className="relative">
                              <Image src={user4} alt="avatar" width={30} height={30} className="rounded-full" />
                              <div className="bg-[#559b4e] w-[8px] h-[8px] rounded-full absolute right-0 bottom-0 border border-[#F7F8FC] p-1"></div>
                          </div>
                          <div>
                            <h6 className='text-sm font-medium'>Cafe A100 for Woodland Bank</h6>
                            <div className='flex items-center gap-1'>
                              <p className='text-xs text-[#a0a4a4]'>Woodland Bank</p>
                              <p className='text-[#a0a4a4]'>*</p>
                              <p className='text-xs text-[#a0a4a4]'>$280,000</p>
                              <p className='text-[#a0a4a4]'>*</p>
                              <p className='text-xs text-[#a0a4a4]'>8 days to close</p>
                            </div>
                          </div>
                        </div>

                      <div className='mt-2 bg-[#F4F5FE] py-3 px-2 rounded-md'>
                          <div className='flex gap-2 items-center'>
                                  <MessageTwoTone className={` text-[#4B4E68] `} style={{ fontSize: "20px" }} />
                                  <p className='text-xs font-medium'>Review draft and reply to Chris Naido</p>
                          </div>
                        </div>
                    </div>

                    <div className="bg-white shadow rounded-lg p-3 mt-2">
                        <div className='flex gap-2 items-center'>
                          <div className="relative">
                              <Image src={user4} alt="avatar" width={30} height={30} className="rounded-full" />
                              <div className="bg-[#559b4e] w-[8px] h-[8px] rounded-full absolute right-0 bottom-0 border border-[#F7F8FC] p-1"></div>
                          </div>
                          <div>
                            <h6 className='text-sm font-medium'>Partnership opportunity for Fabrikam</h6>
                            <div className='flex items-center gap-1'>
                              <p className='text-xs text-[#a0a4a4]'>Fabrikam</p>
                              <p className='text-[#a0a4a4]'>*</p>
                              <p className='text-xs text-[#a0a4a4]'>$5,000,000</p>
                              <p className='text-[#a0a4a4]'>*</p>
                              <p className='text-xs text-[#a0a4a4]'>12 days to close</p>
                            </div>
                          </div>
                        </div>

                      <div className='mt-2 bg-[#F4F5FE] py-3 px-2 rounded-md'>
                          <div className='flex gap-2 items-center'>
                                  <MessageTwoTone className={` text-[#4B4E68] `} style={{ fontSize: "20px" }} />
                                  <p className='text-xs font-medium'>Prepare me for Fabrikam's key stakeholder</p>
                          </div>
                        </div>
                    </div>


                    <button className="text-blue-500 font-medium text-sm mt-3 hover:underline">
                    Show all key activities
                  </button>
                  </div>
              </div>
              

             </div>
             </div>

             <div className='mt-5'>
                <LeadTable />
             </div>
          </Layout>
    </>
  );
}
