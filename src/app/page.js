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
  MoreVert,
  Lock,
  Storage,
  ThumbUpAltOutlined,
  ThumbDownAltOutlined,
  Menu
 } from '@mui/icons-material';
 import copilot_icon from '../app/assets/copilot.svg'
 import rank_icon from '../app/assets/ranking-green.svg'
 import linkedin_icon from '../app/assets/LinkedIn_icon.svg'
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
                  <div className='flex gap-1 items-center'>
                    <Image src={linkedin_icon} alt="linkedin" width={10} height={10} />
                    <p className="text-xs text-gray-500">COO, Northwind Traders</p>
                  </div>
                </div>
              </div>
             
            </div>

               {/* Content */}
               <div className="mt-4 bg-[#EBF3FF] p-3 rounded-md flex-col md:flex-row flex justify-between md:items-center">
                <p className="text-sm text-[#6948bc]">
                  Jane may be interested in upgrading espresso machines for her in-store
                  coffee shops.
              </p>
             
             <div className="flex space-x-2 mt-3 md:mt-0">
                <button className="px-4 py-2 text-xs bg-white border border-gray-200  rounded-md">
                  Edit
                </button>
                <button className="px-4 py-2 text-xs bg-[#4451D2] text-white rounded-md">
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
               <div className="mt-6 p-4 bg-white shadow-lg border rounded-lg">
                  
                <div className='bg-[#F4F5FE] p-4 rounded-lg'>
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
                <div className="mt-4 flex flex-col md:flex-row gap-4">
                  <div className="shadow rounded-lg bg-white py-4 px-3 min-w-[220px]">
                    <div className='flex gap-3 items-center'>
                      <div>
                        <Image src={rank_icon} alt="rank" width={40} height={40} />
                      </div>
                      <div>
                      <p className="text-gray-500 text-sm">Decision Maker</p>
                      <p className="text-sm font-semibold">Yes</p>
                      </div>
                    </div>
     
                  </div>
                  <div className="shadow rounded-lg bg-white py-4 px-3 min-w-[220px]">
                     <div className='flex gap-3 items-center'>
                      <div>
                        <Image src={rank_icon} alt="rank" width={40} height={40} />
                      </div>
                      <div>
                      <p className="text-gray-500 text-sm">Potential Deal Value</p>
                      <p className="text-sm font-semibold">$1M</p>
                      </div>
                    </div>
                  
                  </div>
                  <div className="shadow rounded-lg bg-white py-4 px-3 min-w-[220px]">
                  <div className='flex gap-3 items-center'>
                      <div>
                        <Image src={rank_icon} alt="rank" width={40} height={40} />
                      </div>
                      <div>
                      <p className="text-gray-500 text-sm">Intent</p>
                      <p className="text-sm font-semibold">High</p>
                      </div>
                    </div>
                 
                  </div>
                </div>
                </div>

                <div className="flex flex-col md:flex-row  mt-4 md:items-center gap-3 p-4">
                  {/* Lock Icon and Number */}
                  <div className="flex items-center justify-center p-1 border border-gray-100 bg-gray-50 rounded">
                    <Lock className="text-yellow-500"  style={{ fontSize: "16px" }} /> {/* Replace with your icon */}
                  </div>

                  {/* Blue Database Icon and Label */}
                  <div className="flex items-center gap-2 py-1 px-2 border border-gray-100 bg-gray-50 rounded">
                    <span className="text-xs font-medium text-gray-700">1</span>
                    <Storage className="text-blue-500" style={{ fontSize: "16px" }} /> {/* Replace with your icon */}
                    <span className="text-xs font-medium text-gray-700">D365 Sales</span>
                  </div>

                  {/* "+2" Additional Items */}
                  <div className="text-xs font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded">
                    +2
                  </div>

                  {/* AI-Generated Content Note */}
                  <div className='md:ml-auto flex gap-3 items-center'>
                    <div className="text-xs text-gray-600 p-2 bg-gray-50 rounded">
                      AI-generated content may be incorrect
                    </div>
                    <ThumbUpAltOutlined className="text-gray-500" style={{ fontSize: "16px" }} />
                    <ThumbDownAltOutlined className="text-gray-500" style={{ fontSize: "16px" }} />
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

              <div className="flex mt-5 items-center justify-between w-full">
                {/* Left Section: Showing X of Y */}
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span>Showing 1 of 9</span>
                  <span className="text-gray-400">|</span>
                  <a href="#" className="text-blue-600 font-semibold  hover:underline">
                    Show all
                  </a>
                </div>

                {/* Center Section: Progress Bar */}
                <div className='flex gap-1'>
                    <div className='rounded-sm bg-blue-600 w-6 h-1 cursor-pointer'></div>
                    <div className='rounded-sm bg-[#a0a4a4] w-1 h-1 cursor-pointer'></div>
                    <div className='rounded-sm bg-[#a0a4a4] w-1 h-1 cursor-pointer'></div>
                    <div className='rounded-sm bg-[#a0a4a4] w-1 h-1 cursor-pointer'></div>
                  </div>

                {/* Right Section: Thumbs-Up and Thumbs-Down */}
                <div className="flex items-center gap-4 text-gray-500">
                <ThumbUpAltOutlined className="text-gray-500" style={{ fontSize: "16px" }} />
                <ThumbDownAltOutlined className="text-gray-500" style={{ fontSize: "16px" }} />
                </div>
              </div>



          </div>

        </ModalComponent>

        <Layout>  

           <div className='mb-3 block md:hidden'>
                  <Menu className={` text-[#4B4E68] `} style={{ fontSize: "20px" }} />
              </div>

            <div className="md:flex items-center md:justify-between bg-white px-3 py-2 shadow-sm w-full">
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
                <div className="hidden md:flex items-center space-x-4">
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
               <div className="bg-white relative rounded-lg shadow p-4 md:p-5 hover:shadow-xl">
              <div className='flex gap-2 md:items-center'>
                <Image src={copilot_icon}
                  alt="copilot"
                className="w-[25px] h-[25px]"
                 />
                <h1 className="text-sm md:text-lg font-semibold">
                  Hi Mona,{" "}
                  <span className="text-[#3c40b5] font-bold">68%</span> of goal achieved
                  and rest can be achieved by focusing on 20 top leads.
                </h1>
              </div>
              
               

              <div className='flex flex-col md:flex-row gap-4 mt-3 md:mt-5'>
                <div className='basis-full md:basis-[70%]'>
                  <div className=''>
                      <p className="text-gray-600 text-xs md:text-sm">
                      Copilot has pinpointed 20 key leads that show strong purchase intent
                      and are actively engaging. These leads need your focus.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                      {/* Lead Cards */}
                    <div className="bg-white shadow h-fit rounded-lg p-4">
                        <div className='flex gap-2 items-center'>
                          <div>
                            <div className="relative">
                                <Image src={user4} alt="avatar" width={35} height={35} className="rounded-full" />
                                <div className="bg-[#559b4e] w-[8px] h-[8px] rounded-full absolute right-0 bottom-0 border border-[#F7F8FC] p-1"></div>
                            </div>
                          </div>
                          <div>
                            <h6 className='text-sm font-medium'>Jane Reyes</h6>
                            <div className='flex items-center gap-1'>
                              <p className='text-xs text-[#a0a4a4]'>COO</p>
                              <p className='text-[#a0a4a4]'>*</p>
                              <p className='text-xs text-[#a0a4a4]'>Northwind Traders</p>
                            </div>
                          </div>
                        </div>

                        <div 
                        onClick={() => setIsOpen(true)}
                        className='mt-2 bg-[#F4F5FE] py-4 px-2 rounded-lg cursor-pointer'>
                            <div className='flex gap-2 items-center'>
                                    <MessageTwoTone className={` text-[#4B4E68] `} style={{ fontSize: "20px" }} />
                                    <p className='text-[13px] md:text-sm text-[#0e0e0f] font-medium'>Engage with Jane Reyes</p>
                            </div>
                            <div className='mt-2'>
                              <p className='text-xs text-[#7d7f83]'>Jane may be very interested in upgrading espresso machines for her in-store coffee shops</p>
                            </div>
                        </div>

                          <div className='flex mt-2 gap-1'>
                              <p className='text-xs md:text-sm text-[#8f9191]'>Expand business</p>
                              <div className='text-[#a0a4a4]'>*</div>
                              <p className='text-xs md:text-sm text-[#8f9191]'>High buying intent</p>
                            </div>
                      
                    </div>
                    <div className="bg-white shadow h-fit rounded-lg p-4">
                        <div className='flex gap-2 items-center'>
                          <div>
                            <div className="relative">
                                <Image src={user4} alt="avatar" width={35} height={35} className="rounded-full" />
                                <div className="bg-[#559b4e] w-[8px] h-[8px] rounded-full absolute right-0 bottom-0 border border-[#F7F8FC] p-1"></div>
                            </div>
                          </div>
                          <div>
                            <h6 className='text-sm font-medium'>Allan Munger</h6>
                            <div className='flex items-center gap-1'>
                              <p className='text-xs text-[#a0a4a4]'>Head of Real Estate... </p>
                              <p className='text-[#a0a4a4]'>*</p>
                              <p className='text-xs text-[#a0a4a4]'>Contoso Coffee</p>
                            </div>
                          </div>
                        </div>

                        <div className='mt-2 bg-[#F4F5FE] py-4 px-2 rounded-lg'>
                            <div className='flex gap-2 items-center'>
                                    <MessageTwoTone className={` text-[#4B4E68] `} style={{ fontSize: "20px" }} />
                                    <p className='text-[13px] md:text-sm text-[#0e0e0f] font-medium'>Prepare for meeting with Alan</p>
                            </div>
                            <div className='mt-2'>
                              <p className='text-xs text-[#7d7f83]'>Prepare for high-buying intent meeting Copilot scheduled for 2 PM regardingupgrading service contract</p>
                            </div>
                        </div>

                        <div className='flex mt-2 gap-1'>
                              <p className='text-xs md:text-sm text-[#8f9191]'>Upcoming meeting</p>
                              <div className='text-[#a0a4a4]'>*</div>
                              <p className='text-xs md:text-sm text-[#8f9191]'>Due today</p>
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

                <div className='w-[1px] h-auto bg-gray-100'></div>
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
                              <p className='text-[11px] text-[#a0a4a4]'>Woodland Bank</p>
                              <p className='text-[#a0a4a4]'>*</p>
                              <p className='text-[11px] text-[#a0a4a4]'>$280,000</p>
                              <p className='text-[#a0a4a4]'>*</p>
                              <p className='text-[11px] text-[#a0a4a4]'>8 days to close</p>
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
                              <p className='text-[11px] text-[#a0a4a4]'>Fabrikam</p>
                              <p className='text-[#a0a4a4]'>*</p>
                              <p className='text-[11px] text-[#a0a4a4]'>$5,000,000</p>
                              <p className='text-[#a0a4a4]'>*</p>
                              <p className='text-[11px] text-[#a0a4a4]'>12 days to close</p>
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


                    <button className="text-blue-500 font-semibold text-xs mt-3 hover:underline">
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
