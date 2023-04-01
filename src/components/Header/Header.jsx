import React from "react";

const Header = () => {
    return ( 
        <>
            <nav className="container mx-auto w-[85%] flex justify-between h-[90px] items-center" >
                <div className="flex justify-between items-center">
                    <p className="pr-[43px] text-[#0EA5E9] text-[20px]">ONE<span className='text-[#163369]'>LINE</span></p>
                    <ul className="flex justify-between ">
                        <li className="pr-[40px] text-[#6B7280] font-medium">Solutions</li>
                        <li className="pr-[40px] text-[#6B7280] font-medium">Pricing</li>
                        <li className="text-[#6B7280] font-medium">Contact Us</li>
                    </ul>
                </div>
                <div className="flex items-center">
                    <p className="pr-[32px] text-[#6B7280] font-medium">Sign in</p>
                    <button className="bg-[#47B5FF] hover:bg-blue-700 text-white font-medium py-[9px] px-[17px] rounded-[6px] shadow-sm">Register for Free</button>
                </div>
            </nav>
        </> 
    );
}
 
export default Header;