/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function ServiceCard(props) {
    return (
        <>
            <div className="border-[1px] w-full h-80 p-5 flex flex-col  items-start justify-start gap-5 bg-redsh hover:drop-shadow-lg  hover:border-primarygray rounded-lg group overflow-hidden  transition-all duration-150  ease-in-out hover:bg-primarygray ">
                {/* <div className="absolute inset-0 bg-primarygray -translate-y-[1000%] group-hover:translate-y-[0%] transition-transform duration-700 ease-in-out z-10" /> */}
                <div className=" w-32 h-32 p-4 rounded-full border-[1px] border-primarygray bg-redsh group-hover:bg-white  group-hover:border-primary transition-all duration-500 delay-75 ease-in-out ">
                    <img
                        src={props.tiImage}
                        alt=""
                        className="w-full h-full p-2 "
                    />
                </div>
                <div className="text-xl lg:text-lg font-Poppins font-black text-primary">
                    {props.title}
                </div>
                <div className="text-sm lg:text-sm font-Rubik font-light text-TextDark  text-left leading-loose">
                    {props.des}
                </div>
                
            </div>
        </>
    )
}

export default ServiceCard