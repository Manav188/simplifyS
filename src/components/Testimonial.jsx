import React from "react";

const Testimonial = () => {
  return (
    <div className="bg-white ">
      <div className=" flex justify-evenly pt-12 pb-12 relative z-10">
        <div className="flex p-2 px-8 rounded-xl items-center bg-blue-600 text-white">
          Testimonial
        </div>
      </div>
      <div className="mb-12 flex flex-col items-center text-center justify-center w-full font-semibold text-5xl">
        <div>
          <span>Don't take our word see what our </span>
          <div className="underline">customers say.</div>
        </div>
      </div>
      <div className='flex justify-evenly gap-11 '>
                    <div className='w-1/3  border p-4 h-auto items-center mt-12 rounded-xl bg-white'>
                        <div className='text-center  font-semibold text-xl'>Tag Health & Performance</div>
                        <div className='text-center px-1 text-gray-600 text-[14px] text-base'>
                            Our tool crawls your website to check if your GA4 tags are firing correctly and in the correct order. We also check for duplicate tags and loading times, as these issues can negatively impact your data accuracy and site performance
                        </div>
                    </div>
                    </div>
    </div>
  );
};

export default Testimonial;
