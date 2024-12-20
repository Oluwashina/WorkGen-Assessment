import React,{useRef} from 'react'
import {
 Close,
 MessageOutlined
} from '@mui/icons-material';
import {CSSTransition} from 'react-transition-group'
import './modal.css'


const ModalComponent = ({onClose,isOpen,title, children}) => {
    // Create a ref for the modal
  const nodeRef = useRef(null);

    return ( 
        <>
         <CSSTransition
            in={isOpen}
            unmountOnExit
             timeout={{ enter: 0, exit: 300 }}
             nodeRef={nodeRef} // Pass the ref here
             >
                <div
                  ref={nodeRef} 
                className='modal h-full
                overflow-y-auto overflow-x-hidden bg-[#534F4A80]
                fixed top-0 right-0 left-0 z-50 w-full md:inset-0 
                opacity-0 transition-all duration-[0.3s]'
                onClick={onClose}
                >
                <div
                    onClick={(e) => e.stopPropagation()} 
                    className="relative p-8 w-full max-w-5xl h-full md:h-auto mx-auto my-32 modal-content translate-y-[-200px] transition-all duration-[0.3s]"
                >
                    {/* modal content */}
                    <div className="relative bg-gradient-to-r mt-4 from-blue-400 via-blue-300 to-purple-400 rounded-lg p-[1px]">
                        <div className="relative bg-white rounded-lg py-6 px-8">
                            {/* modal header */}
                            <div className="flex justify-between items-start">
                                <div className='flex gap-2 items-center'>
                                {title &&  <MessageOutlined className={` text-[#4B4E68] `} style={{ fontSize: "20px" }} />}
                                    <h3 className="text-base text-[#000]">
                                        {title}
                                    </h3>
                                </div>

                                <div className="cursor-pointer" onClick={onClose}>
                                    <Close className={` text-[#4B4E68] `} style={{ fontSize: "20px" }} />
                                </div>
                            </div>

                            {/* modal body */}
                            <div>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
               </div>
            
            </CSSTransition>
        </>
     );
}
 
export default ModalComponent;