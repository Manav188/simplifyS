import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const Pricing = () => {
  return (
    <div id='pricing'>
    <div className="relative bg-blue-50 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-blue-500 rounded-tr-full rounded-bl-full rounded-br-full w-16 h-16 transform absolute top-0 left-0 z-0"></div>
      <div className="bg-red-500 rounded-tr-full rounded-br-full rounded-bl-full w-16 h-16 transform absolute top-0 left-16 z-0"></div>

      <div className="bg-green-500 rounded-tl-full rounded-br-full rounded-bl-full w-16 h-16 transform -rotate-90 absolute bottom-0 right-16 z-0"></div>
      <div className="bg-yellow-500 rounded-tl-full rounded-tr-full rounded-br-full w-16 h-16 transform rotate-90 absolute bottom-0 right-0 z-0"></div>

      <div className="flex justify-evenly mt-14 pb-2 relative z-10">
        <div className="flex p-2 rounded-xl items-center bg-blue-600 text-white">
          Pricing
        </div>
      </div>

      <div className="flex  flex-col items-center text-center justify-center w-full font-semibold text-5xl mt-10 relative z-10">
        <div>Our Pricing</div>
        <div className="block box-border h-60 w-2/3 font-thin text-lg text-center mt-12">
          Choose the plan that's right for you
        </div>
      </div>
      <div className="z-10 mb-12 flex justify-evenly gap-11 -mt-24">
        <div className=" p-3 flex flex-col  justify-between items-center rounded-xl bg-white">
          <div className=" py-3 font-medium  text-xl">One-time Audit</div>
          <div className="font-bold text-xl">
            $59
            <span className=" text-base font-thin text-gray-600">/audit</span>
          </div>
          <div className=" py-2 mt-2 border-t-2 text-gray-600 text-[14px] text-base">
            Get a comprehensive GA4 audit report with our one-time purchase
            option
          </div>
          <div className="flex items-center pb-2">
            <FontAwesomeIcon icon={faCircleCheck} />
            <div className="pl-2  font-semibold text-lg">
              1 comprehensive audit
            </div>
          </div>
          <div className="flex items-center pb-2">
            <FontAwesomeIcon icon={faCircleCheck} />
            <div className="pl-2 font-semibold text-lg">
              PDF, PowerPoint formats
            </div>
          </div>
          <div className="flex items-center pb-2">
            <FontAwesomeIcon icon={faCircleCheck} />
            <div className="pl-2 font-semibold text-lg">
              Multiple report themes
            </div>
          </div>
          <div className="flex items-center pb-2">
            <FontAwesomeIcon icon={faCircleCheck} />
            <div className="pl-2 font-semibold text-lg">Premium Support</div>
          </div>
          <div>
            <button className="bg-black font-semibold  text-base text-white rounded-xl p-5 w-full hover:bg-yellow-700 ">
              Get Started
            </button>
          </div>
        </div>
        <div className=" p-3 items-center flex flex-col justify-between rounded-xl bg-black text-white">
          <div className=" py-3 font-medium text-xl">Agency Pro Yearly</div>
          <div className="font-bold text-xl">
            $499
            <span className=" text-base font-thin text-gray-300">/year</span>
          </div>
          <div className=" py-2 mt-2 border-t-2 text-gray-300 text-[14px] text-base">
            Perfect for agencies that need multiple white-label audits at a
            discounted rate
          </div>
          <div className="flex items-center pb-2">
            <FontAwesomeIcon icon={faCircleCheck} />
            <div className="pl-2 font-semibold text-lg">
              180 comprehensive audit per year
            </div>
          </div>
          <div className="flex items-center pb-2">
            <FontAwesomeIcon icon={faCircleCheck} />
            <div className="pl-2 font-semibold text-lg">
              PDF, PowerPoint, Google Slide formats
            </div>
          </div>
          <div className="flex items-center pb-2">
            <FontAwesomeIcon icon={faCircleCheck} />
            <div className="pl-2 font-semibold text-lg">
              Multiple report themes
            </div>
          </div>
          <div className="flex items-center pb-2">
            <FontAwesomeIcon icon={faCircleCheck} />
            <div className="pl-2 font-semibold text-lg">Premium Support</div>
          </div>
          <div className="flex items-center pb-2">
            <FontAwesomeIcon icon={faCircleCheck} />
            <div className="pl-2 font-semibold text-lg">
              Branding ree reports
            </div>
          </div>
          <div className="flex items-center pb-2">
            <FontAwesomeIcon icon={faCircleCheck} />
            <div className="pl-2 font-semibold text-lg">
              Whitelabel,use your own theme
            </div>
          </div>
          <div>
            <button className="bg-white  text-black font-semibold  text-base rounded-xl p-5 w-full hover:bg-yellow-700 ">
              Get Started
            </button>
          </div>
        </div>
        <div className=" p-3 items-center flex flex-col justify-between rounded-xl bg-white">
          <div className=" py-3 font-medium text-xl">Enterprise</div>
          <div className="font-bold text-xl">Contact Us</div>
          <div className=" py-2 mt-2 border-t-2 text-gray-600 text-[14px] text-base">
            Do you need more than 180 audits per year? Contact us for a custom
            plan
          </div>
          <div className="flex items-center pb-2">
            <FontAwesomeIcon icon={faCircleCheck} />
            <div className="pl-2 font-semibold text-lg">
              Custom number of audits per your needs
            </div>
          </div>
          <div className="flex items-center pb-2">
            <FontAwesomeIcon icon={faCircleCheck} />
            <div className="pl-2 font-semibold text-lg">
              PDF, PowerPoint,Google Slide formats
            </div>
          </div>
          <div className="flex items-center pb-2">
            <FontAwesomeIcon icon={faCircleCheck} />
            <div className="pl-2 font-semibold text-lg">
              Multiple report themes
            </div>
          </div>
          <div className="flex items-center pb-2">
            <FontAwesomeIcon icon={faCircleCheck} />
            <div className="pl-2 font-semibold text-lg">Premium Support</div>
          </div>
          <div className="flex items-center pb-2">
            <FontAwesomeIcon icon={faCircleCheck} />
            <div className="pl-2 font-semibold text-lg">
              Branding free reports
            </div>
          </div>
          <div className="flex items-center pb-2">
            <FontAwesomeIcon icon={faCircleCheck} />
            <div className="pl-2 font-semibold text-lg">
              Whitelabel, use your own theme
            </div>
          </div>
          <div className="flex items-center pb-2">
            <FontAwesomeIcon icon={faCircleCheck} />
            <div className="pl-2 font-semibold text-lg">Feature Requests</div>
          </div>
          <div>
            <button className="bg-black font-semibold  text-base text-white rounded-xl p-5 w-full mt-11 hover:bg-yellow-700 ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Pricing;
