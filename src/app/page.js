import Layout from '@/components/Layout';
import React from 'react';
import Image from 'next/image';
import user4 from '../app/assets/user4.png'
import {
  HomeOutlined,
  MessageTwoTone
 } from '@mui/icons-material';
import LeadTable from '@/components/LeadTable';
export default function Home() {
  return (
    <div>
        <Layout>
            <div className='py-4 px-2 bg-white shadow-sm rounded-sm'>
            </div>

            <div className="bg-white rounded-lg shadow p-5 mt-4">
                <h1 className="text-lg font-semibold">
                  Hi Mona,{" "}
                  <span className="text-blue-500 font-bold">68%</span> of goal achieved
                  and rest can be achieved by focusing on 20 top leads.
                </h1>
                <p className="text-gray-600 mt-3 text-[15px]">
                  Copilot has pinpointed 20 key leads that show strong purchase intent
                  and are actively engaging. These leads need your focus.
                </p>

                <div className="grid grid-cols-3 gap-5 mt-4">
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

                      <div className='mt-2 bg-[#F4F5FE] py-4 px-3 rounded-md'>
                          <div className='flex gap-2 items-center'>
                                  <MessageTwoTone className={` text-[#4B4E68] `} style={{ fontSize: "20px" }} />
                                  <p className='text-sm font-medium'>Engage with Jane Reyes</p>
                          </div>
                          <div className='mt-2'>
                            <p className='text-sm '>Jane may be very interested in upgrading espresso machines for her in-store coffee shops</p>
                          </div>
                      </div>

                      <div className='flex mt-1 items-center gap-2'>
                            <p className='text-sm text-[#a0a4a4]'>Expand business</p>
                            <p className='text-[#a0a4a4]'>*</p>
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

                      <div className='mt-2 bg-[#F4F5FE] py-4 px-3 rounded-md'>
                          <div className='flex gap-2 items-center'>
                                  <MessageTwoTone className={` text-[#4B4E68] `} style={{ fontSize: "20px" }} />
                                  <p className='text-sm font-medium'>Prepare for meeting with Alan</p>
                          </div>
                          <div className='mt-2'>
                            <p className='text-sm '>Prepare for high-buying intent meeting Copilot scheduled for 2 PM regardingupgrading service contract</p>
                          </div>
                      </div>

                      <div className='flex mt-1 items-center gap-2'>
                            <p className='text-sm text-[#a0a4a4]'>Upcoming meeting</p>
                            <p className='text-[#a0a4a4]'>*</p>
                            <p className='text-sm text-[#a0a4a4] font-medium'>Due today</p>
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

             <div className='mt-5'>
                <LeadTable />
             </div>
          </Layout>
    </div>
  );
}
