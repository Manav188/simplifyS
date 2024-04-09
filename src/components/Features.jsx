import React from 'react'
import f1 from "../assets/f1.png"
import f2 from "../assets/f2.svg"
import f3 from "../assets/f3.svg"
import f4 from "../assets/f4.svg"
import f5 from "../assets/f5.svg"
import f6 from "../assets/f6.png"
import sw from "../assets/similingWoman.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus} from '@fortawesome/free-solid-svg-icons/faPlus'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const Features = () => {
    return (
        <div id='features' className='bg-white'>
            <div className='bg-zinc-100 pt-12'>
                <div className='flex justify-evenly'>
                    <button className='bg-green-500 font-semibold  text-xl text-white rounded-lg p-3 '>Features</button>
                </div>
                <div className=' flex flex-col items-center text-center justify-center w-full font-semibold text-5xl mt-20'>
                    <div >
                        <span>The features that make our </span>
                        <span className='underline'> GA4 audit unique</span>
                    </div>
                </div >

                <div className='flex justify-evenly gap-11 p-11'>
                    <div className='w-1/3 h-auto items-center mt-12 rounded-xl bg-white'>
                        <img src={f1} className='rounded-full mx-auto mt-3 ' />
                        <div className='text-center py-3 font-semibold text-xl'>Tag Health & Performance</div>
                        <div className='text-center px-1 text-gray-600 text-[14px] text-base'>
                            Our tool crawls your website to check if your GA4 tags are firing correctly and in the correct order. We also check for duplicate tags and loading times, as these issues can negatively impact your data accuracy and site performance
                        </div>
                    </div>
                    <div className='w-1/3 h-auto items-center mt-12 rounded-xl bg-white'>
                        <img src={f2} className='rounded-full mx-auto mt-3 ' />
                        <div className='text-center py-3 font-semibold text-xl'>Data Integrity &
                            Quality</div>
                        <div className='text-center px-1 text-gray-600 text-[14px] text-base mb-12'>
                            Our GA audit provides comprehensive data quality checks to ensure a successful Google Analytics 4 migration. We check for issues such as missing data, data duplication, data discrepancies, bot traffic, spam, data filters, and sampling errors, and more.
                        </div>
                    </div>
                    <div className='w-1/3 h-auto items-center mt-12 rounded-xl bg-white'>
                        <img src={f3} className='rounded-full mx-auto mt-3 ' />
                        <div className='text-center py-3 font-semibold text-xl'>Implementation Best Practices</div>
                        <div className='text-center px-1 text-gray-600 text-[14px] text-base'>
                            Our audit helps you implement GA4 best practices and put your data to work for effective marketing and business decision-making. We provide you with recommendations on how to optimize your GA4 set-up and use your data to improve your campaigns, user engagement, and conversion setup.
                        </div>
                    </div>
                </div>
                <div className='flex justify-evenly gap-11 p-11'>
                    <div className='w-1/3 h-auto items-center mt-12 rounded-xl bg-white'>
                        <img src={f4} className='rounded-full mx-auto mt-3 ' />
                        <div className='text-center py-3 font-semibold text-xl'>Actionable Plan</div>
                        <div className='text-center px-1 text-gray-600 text-[14px] text-base'>
                            Our tool not only identifies potential issues but also provides you with a clear and actionable plan on how to fix them so you, ensuring a smooth GA4 migration.
                        </div>
                    </div>
                    <div className='w-1/3 h-auto items-center mt-12 rounded-xl bg-white'>
                        <img src={f5} className='rounded-full mx-auto mt-3 ' />
                        <div className='text-center py-3 font-semibold text-xl'>Save Time & Money</div>
                        <div className='text-center px-1 text-gray-600 text-[14px] text-base mb-12'>
                            Our audit tool eliminates the need for manual checks of your data for errors, reducing the risk of costly mistakes, and avoiding the expense of hiring a consultant or following a manual GA4 audit checklist.
                        </div>
                    </div>
                    <div className='w-1/3 h-auto items-center mt-12 rounded-xl bg-white'>
                        <img src={f6} className='rounded-full mx-auto mt-3 ' />
                        <div className='text-center py-3 font-semibold text-xl'>Tailored Reporting Options</div>
                        <div className='text-center px-1 text-gray-600 text-[14px] text-base'>
                            Choose from different languages, multiple report themes, and file formats such as PDF and PowerPoint. With our white-labeling feature, agencies can even use their own branding and theme for the reports, providing a personalized touch to their clients
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center pb-10'>
                    <button className="bg-black font-semibold  text-xl text-white rounded-xl  px-10 py-5 ">Get Started</button>
                </div>
            </div>
            <div className=' flex flex-col items-center text-center justify-center w-full font-semibold text-5xl mt-12'>
                <div >
                    <span>What is included in the Google Analytics audit? </span>
                </div>
                <div className='text-center mt-8 text-lg  font-normal'>
                    Our Google Analytics audit includes over 40 pages in total, with more than 100 features analyzed, and 3 different themes, and 3 file formats
                </div>
                <div className='flex-col justify center items-center mt-12'>
                    <div className=' flex justify-evenly gap-11 items-center'>
                        <div className='py-12 w-96 h-44 justify-items-center border-slate-300 border-2 rounded-xl flex-col'>
                            <span>100</span>
                            <span><FontAwesomeIcon icon={faPlus} style={{ color: '#2A66FF' }} /></span>
                            <div className='text-center pt-4 font-thin text-3xl'>DATA POINTS</div>
                        </div>
                        <div className=' py-12  w-96 h-44 justify-center border-slate-300 border-2 rounded-xl'>
                            <span>40</span>
                            <span><FontAwesomeIcon icon={faPlus} style={{ color: '#FDB52A' }} /></span>
                            <div className='text-center pt-4 font-thin text-3xl'>PAGES</div>
                        </div>

                    </div>
                    <div className=' flex justify-evenly gap-11 items-center mt-8 mb-12'>
                        <div className='py-12 w-96 h-44 justify-items-center border-slate-300 border-2 rounded-xl flex-col'>
                            <span>3</span>
                            <span><FontAwesomeIcon icon={faPlus} style={{ color: '#FF4545' }} /></span>
                            <div className='text-center pt-4 font-thin text-3xl'>REPORT FORMATS</div>
                        </div>
                        <div className=' py-12  w-96 h-44 justify-center border-slate-300 border-2 rounded-xl'>
                            <span>2</span>
                            <span><FontAwesomeIcon icon={faPlus} style={{ color: '#4fc553' }} /></span>
                            <div className='text-center pt-4 font-thin text-3xl '>REPORT THEMES</div>
                        </div>

                    </div>

                </div>
            </div >

            <div className='justify-evenly flex '>
            <div className='flex  p-4 rounded-2xl  bg-red-500 text-white font-bold'>
                Why Use Our Google Analytics tools
            </div>
            </div>
            <div className=' flex flex-col items-center text-center justify-center w-full font-semibold text-5xl mt-10'>
                    <div >
                        <span>Our tool is great for brands,  </span>
                        <span className='underline'> agencies </span>
                        <span>and enterprises</span>
                    </div>
                    <div className='block box-border h-60  w-2/3 font-thin text-lg text-center mt-12'>
                    Our Google Analytics audit tool is suitable for businesses of all sizes, including those in need of a single audit, agencies requiring multiple audits, and enterprises with custom needs.
                    </div>
                </div >
            <div className='flex justify-evenly gap-4'>
                <div className='w-1/2 '>
                    <img src={sw} className='rounded-tl-[150px] rounded-br-[150px] rounded-bl-[150px]'/>
                </div>
                <div>
                  
                    <div className='flex w-full  py-9 border-y'>
                    <a className='justify-start'>For brands</a>
                    <FontAwesomeIcon className='ml-44 mt-1' icon={faArrowRight}/>
                    </div>      
                    <div className='flex w-full  py-9 border-y'>
                    <a className='justify-start'>For brands</a>
                    <FontAwesomeIcon className='ml-44 mt-1' icon={faArrowRight}/>
                    </div>
                    <div className='flex w-full  py-9 border-y'>
                    <a className='justify-start'>For brands</a>
                    <FontAwesomeIcon className='ml-44 mt-1' icon={faArrowRight}/>
                    </div>  
                               

                   
                </div>

            </div>
        </div>
    )
}

export default Features