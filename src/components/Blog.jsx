import React from "react";

const Blog = () => {
  return (
    <div id="blog">
      <div className="pt-12">
        <div className="flex justify-evenly mt-14 mb-8 relative z-10">
          <div className="flex p-3 px-4 text-sm rounded-xl items-center bg-blue-600 text-white">
            Blog
          </div>
        </div>

        <div className="flex  flex-col items-center text-center justify-center w-full font-semibold text-5xl mt-10 relative z-10">
        <div>Articles</div>
        <div className="block box-border h-60 w-2/3 font-thin text-lg text-center mt-4">
        GA4 Auditor Blog - Your Essential Guide to Google Analytics 4 (GA4)
        </div>
      </div>

        <div className="w-full mx-6 border-2 border-gray-300 ">
            <div className="flex">
                
            </div>

        </div>

      </div>
    </div>
  );
};

export default Blog;
