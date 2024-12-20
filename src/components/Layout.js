import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import {
  NoteOutlined,
  ChatBubbleOutline,
  CallOutlined,
  StickyNote2Outlined
 } from '@mui/icons-material';

export default function Layout({children}) {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
        <Header />

        <div className="flex h-full min-h-screen bg-[#F7F7F7]">
            <Sidebar />

            <div className='md:flex-row flex flex-col md:flex-auto overflow-y-scroll'>

               <div className='px-3 md:flex-grow md:px-4 py-4'>
                  {children}
               </div>

               <div className='bg-[#F0F0F0] flex-shrink-0 w-9 py-3 px-1 hidden md:flex flex-col items-center gap-4'>
                 <StickyNote2Outlined className={` text-[#4B4E68] `} style={{ fontSize: "18px" }} />
                 <NoteOutlined className={` text-[#4B4E68] `} style={{ fontSize: "18px" }} />
                 <CallOutlined className={` text-[#4B4E68] `} style={{ fontSize: "18px" }} />
                 <ChatBubbleOutline className={` text-[#4B4E68] `} style={{ fontSize: "18px" }} />

               </div>

            </div>

        </div>

    </div>
  )
}