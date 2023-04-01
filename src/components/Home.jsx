import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card/Card";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <div>
      <div className="flex w-full">
        <div className="bg-[#F9FAFB] w-[60%] flex flex-col gap-[40px] pt-[193px] pb-[149px]">
          <div className="w-full   flex flex-col items-center justify-center gap-y-[20px]">
            <h1 className="text-[#163369] w-[70%] font-extrabold text-[48px]">
              Faster.Better. Easier.
              <br />
              All in <span className="text-[#0EA5E9]">ONE</span>LINE
            </h1>
            <p className="text-[#465E8B] text-[20px] w-[70%]">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-y-[16px]">
            <div className="flex space-between w-[70%] h-[48px] gap-[12px]">
              <input
                className="w-[70%] border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                type="email"
                placeholder="Enter your email"
              />
              <button className="w-[146px]  bg-[#47B5FF] hover:bg-blue-700 text-white font-medium py-[12px] px-[16px] rounded-[6px] shadow-sm">
                Start Free Trial
              </button>
            </div>
            <p className="text-[#465E8B] text-[14px] w-[70%]">
              Start your free trial, no credit card necessary. By providing your
              email, you agree to our{" "}
              <Link className="underline" to={"/"}>
                terms or service.
              </Link>
            </p>
          </div>
        </div>
        <div className="w-[40%]">
          <img src="/images/main-photo.png" alt="main" />
          <img
            className="absolute top-[351px] right-[75px]"
            src="/images/Group 97.svg"
            alt="conversation"
          />
        </div>
      </div>
      <div className="mt-[96px]">
        <div className="text-center">
          <h3 className="text-[36px] font-extrabold mb-[16px]">
            A better way to close deals
          </h3>
          <p className="text-[20px] text-[#6B7280] m-auto w-[48%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            magnam voluptatum cupiditate veritatis in, accusamus quisquam.
          </p>
        </div>
        <div className="mt-[47px]">
          <Slider />
        </div>
      </div>
      <div className="mt-[540px] flex w-full">
        <div className="w-1/2">
          <img
            className="w-[90%]"
            src="/images/application.svg"
            alt="application"
          />
        </div>
        <div className="w-1/2">
          <div className="w-[90%]">
            <button className="border px-[12px] text-[#F59E0B] py-[2px] text-[13px] rounded-[30px] border-[#F59E0B]">
              Chat Application
            </button>
            <h3 className="text-[30px] font-extrabold mb-[12px]">
              Application Documents in One Place
            </h3>
            <p className="text-[18px] text-[#6B7280]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              minima sequi recusandae, porro maiores officia.
            </p>
            <div className="flex items-start gap-[16px] mt-[40px]">
              <img src="/images/Brand icon.svg" alt="brand1" />
              <div>
                <p className="text-[18px] font-medium">Fill it Digitally</p>
                <p className="text-[16px] text-[#6B7280]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque
                </p>
              </div>
            </div>
            <div className="flex items-start gap-[16px] mt-[40px]">
              <img src="/images/Brand icon2.svg" alt="brand2" />
              <div>
                <p className="text-[18px] font-medium">
                  Save it for Other Cases
                </p>
                <p className="text-[16px] text-[#6B7280]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque
                </p>
              </div>
            </div>
            <div className="flex items-start gap-[16px] mt-[40px]">
              <img src="/images/Brand icon3.svg" alt="brand3" />
              <div>
                <p className="text-[18px] font-medium">No Need to Switch App</p>
                <p className="text-[16px] text-[#6B7280]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-around text-white bg-[#3057A3] py-[64px]">
        <div className="w-[33%]">
          <img src="/images/Layer 1.svg" alt="layer1" />
          <p className="mt-[33px] mb-[60px] text-[18px] font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            expedita voluptas culpa sapiente alias molestiae. Numquam corrupti
            in laborum sed rerum et corporis.
          </p>
          <div className="flex items-start gap-[16px]">
            <img src="/images/Avatar.svg" alt="avatar1" />
            <div>
              <p className="font-medium text-[16px]">Adam Mahfouda</p>
              <p className="font-medium text-[16px]">CEO, OPGNY</p>
            </div>
          </div>
        </div>
        <div className="w-[33%]">
          <img src="/images/Layer 2.svg" alt="layer1" />
          <p className="mt-[33px] mb-[60px] text-[18px] font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            expedita voluptas culpa sapiente alias molestiae. Numquam corrupti
            in laborum sed rerum et corporis. Nemo expedita voluptas culpa
            sapiente alias molestiae.
          </p>
          <div className="flex items-start gap-[16px]">
            <img src="/images/Avatar2.svg" alt="avatar1" />
            <div>
              <p className="font-medium text-[16px]">Adam Mahfouda</p>
              <p className="font-medium text-[16px]">CEO, OPGNY</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[62px] mb-[145px]">
        <div className="text-center">
          <h3 className="text-[30px] font-extrabold mb-[16px]">
            All-in-One Platform
          </h3>
          <p className="text-[18px] text-[#6B7280] m-auto w-[48%]">
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
            Malesuada adipiscing sagittis vel nulla nec.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-x-[32px] gap-y-[64px] mx-[112px] mt-[38px]">
          <Card
            image="/images/Brand icon4.svg"
            title="Import CSV"
            text="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
              magna sit morbi lobortis."
          />
          <Card
            image="/images/Brand icon5.svg"
            title="Drive Campaigns"
            text="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
              magna sit morbi lobortis."
          />
          <Card
            image="/images/Brand icon7.svg"
            title="Add Tasks"
            text="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
              magna sit morbi lobortis."
          />
          <Card
            image="/images/Brand icon6.svg"
            title="Add Tags"
            text="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
              magna sit morbi lobortis."
          />
          <Card
            image="/images/Brand icon8.svg"
            title="See Statistics"
            text="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
              magna sit morbi lobortis."
          />
          <Card
            image="/images/Brand icon9.svg"
            title="Email&SMS"
            text="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
              magna sit morbi lobortis."
          />
          <Card
            image="/images/Brand icon10.svg"
            title="Receive Applications"
            text="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
              magna sit morbi lobortis."
          />
          <Card
            image="/images/Brand icon11.svg"
            title="Send Online Forms"
            text="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
              magna sit morbi lobortis."
          />
        </div>
      </div>
      <div className="py-[83px] bg-[#232323] text-center text-white">
        <p>
          © 2023 by Oxford Property Group & Oxford Property Partners & Oxford
          Property Group USA - Licensed Real Estate Brokers
        </p>
      </div>
    </div>
  );
};

export default Home;
