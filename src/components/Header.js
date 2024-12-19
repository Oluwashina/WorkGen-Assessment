import React from 'react';
import {
    LightbulbOutlined,
    Add,
    Settings,
    QuestionMark,
    Person,
    Apps
} from '@mui/icons-material';
import Image from 'next/image';
import user4 from '../app/assets/user4.png'

export default function Header() {
  return (
    <header className="bg-[#001027] shadow p-2 flex items-center justify-between">
        <div className='flex gap-2 items-center'>
            <div className='flex gap-4 items-center'>
             <Apps className={` text-[#4B4E68] `} style={{ fontSize: "22px" }} />
              <h1 className="text-sm font-medium text-[#EFEFEF]">Dynamics 365</h1>
            </div>
            <div className='text-[#EFEFEF]'>|</div>
            <div>
                <p className='text-[#EFEFEF] text-sm'>Sales hub</p>
            </div>

        </div>
        <div className="flex items-center space-x-4">
            <LightbulbOutlined className={` text-[#4B4E68] `} style={{ fontSize: "20px" }} />
            <Add className={` text-[#4B4E68] `} style={{ fontSize: "20px" }} />
            <Settings className={` text-[#4B4E68] `} style={{ fontSize: "20px" }} />
            <QuestionMark className={` text-[#4B4E68] `} style={{ fontSize: "20px" }} />
            <Person className={` text-[#4B4E68] `} style={{ fontSize: "20px" }} />

            <div className="relative">
                <Image src={user4} alt="avatar" width={30} height={30} className="rounded-full" />
                <div className="bg-[#559b4e] w-[8px] h-[8px] rounded-full absolute right-0 bottom-0 border border-[#F7F8FC] p-1"></div>
            </div>

        </div>
    </header>
  );
}
