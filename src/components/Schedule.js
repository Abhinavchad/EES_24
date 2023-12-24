import React, { useState } from 'react'

import './Schedule.css'

function Schedule() {



    const [displayText, setDisplayText] = useState('');
    const [showOverlay, setShowOverlay] = useState(false);
    const [overlayText, setOverlayText] = useState('');

    const handleDivClick = (value) => {
        setDisplayText(value);
        setShowOverlay(!showOverlay);
        setOverlayText(value);
    };

    return (
        <div>
            {/* md defind as 768 px in tailwindcofig in screens */}

            <div className='max-h-fit w-screen    border-t-[0.5px] border-b-[0.5px] border-solid  border-[#FFF] '>
                <div className='w-screen h-[1088px] border-solid border-[#FFF] border-y-[0.5px] my-[50px]'>
                    <div className='  h-[1088px] '>
                        <div className=' h-[210px] flex border-solid border-[#FFF] border-b-[0.5px] '>
                            <div id="schedule_title" className=' text-white ml-3 text-center text-[100px]   tracking-[19.2px] font-bold leading-[131px] mt-[23px]  md:ml-[24px] '>
                                {/* underline  */}
                                SCHEDULE
                            </div>
                        </div>
                        <div className="flex w-full">
                            {/* 70 percent colmn */}
                            <div className="w-[100%] md:w-[70%] relative">
                                {/* can change mx to ml-100px */}
                                <div className=' h-[878px] grid grid-rows-8 md:mx-[100px]  border-solid border-[#FFF] border-x-[0.5px] '>
                                    {Array.from({ length: 8 }, (_, index) => index + 1).map((item) => (
                                        <div className=' group cursor-pointer border-t-[0.5px] border-solid border-[#FFF] hover:bg-[#D9D9D9]/20 hover:border-l-[10px]  hover:border-[#FFF]  pl-[25px] hover:pl-[15.5px] '>
                                            <div className=' font-goldman text-white h-[100%] items-center  flex   text-[22.664px] font-normal tracking-[4.5px]    ' onClick={(e) => handleDivClick(e.target.textContent)} >
                                                write some updates here!(On Hover)
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {showOverlay && (
                                    // bg-slate-700 opacity-90 bg-blend-saturation
                                    // bg-[#D9D9D9]/10
                                    <div
                                        className={` md:hidden absolute inset-0 backdrop-blur-md bg-black/50 flex  items-center justify-center`}
                                        onClick={() => setShowOverlay(false)}
                                    >
                                        <div className="text-white font-goldman opacity-100 " id='overlay'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolor molestiae sunt fuga nulla ad, dolores adipisci quidem eum vero, quos eligendi voluptate ducimus sed repellat voluptas harum et itaque?</div>
                                    </div>
                                )}

                            </div>

                            {/* 30 percent coloumn */}
                            <div  className=" w-[30%] hidden md:block font-goldman overflow-hidden">
                                <h3 id="side_title">Display Text:</h3>
                                <p id="side_txt">{displayText}</p>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>


    )
}

export default Schedule
