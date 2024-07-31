/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import { OrbitControls, PresentationControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AssetsSix } from "./AssetsSix";
import Modal from 'react-modal';
Modal.setAppElement('#root');

function HomeInfo({ currentStage, setCurrentStage }) {
  const ref = useRef();



  if (currentStage === 1) {
    return (

      <div className='px-5 py-2 flex flex-col items-center justify-center text-center gap-5'>
        <p className='font-Rubik font-bold text-xl'>
          About Us
        </p>
        <div className="h-[300px]">
          
        </div>
        <p className="font-Rubik font-black text-lg text-justify">Who We Are</p>
        <p className="font-Poppins text-base font-light text-justify">EWIS is a renowned IT company which deliver desktop PCs to portable laptops, versatile tablets, and powerful mobile phones and range of designs to meet your diverse needs.</p>

        <div>
          <Link to='/about-us' className='px-8 py-3 bg-primary rounded-xl text-white font-Poppins  font-normal text-xs'>
            Go to page
          </Link>
          <button onClick={() => { setCurrentStage(0) }} className="px-8 py-3 bg-red rounded-xl text-white font-Poppins  font-normal text-xs mx-5">Cancel</button>
        </div>
      </div>
    );
  }
  if (currentStage === 2) {
    return (
      <div className='px-5 py-2 flex flex-col items-center justify-center text-center gap-5'>
        <p className='font-Rubik font-bold text-xl'>
          Ewis Colombo Limited
        </p>
        <div className="h-[300px]">
          
        </div>
        <p className="font-Rubik font-black text-lg text-justify">Who We Are</p>
        <p className="font-Poppins text-base font-light text-justify">EWIS is a renowned IT company which deliver desktop PCs to portable laptops, versatile tablets, and powerful mobile phones and range of designs to meet your diverse needs.</p>
        <div><Link to='/colombo-limited' className='px-8 py-3 bg-primary rounded-xl text-white font-Poppins  font-normal text-xs '>
          Go to page

        </Link>
        <button onClick={() => { setCurrentStage(0) }} className="px-8 py-3 bg-red rounded-xl text-white font-Poppins  font-normal text-xs mx-5">Cancel</button>
</div>
      </div>
    );
  }
  if (currentStage === 3) {
    return (
      <div className='px-5 py-2 flex flex-col items-center justify-center text-center gap-5'>
        <p className='font-Rubik font-bold text-xl'>
          Ewis Global Services
        </p>
        <div className="h-[300px]">
          
        </div>
        <p className="font-Rubik font-black text-lg text-justify">Who We Are</p>
        <p className="font-Poppins text-base font-light text-justify">EWIS is a renowned IT company which deliver desktop PCs to portable laptops, versatile tablets, and powerful mobile phones and range of designs to meet your diverse needs.</p>
        <div><Link to='/global-services' className='px-8 py-3 bg-primary rounded-xl text-white font-Poppins  font-normal text-xs'>
          Go to page

        </Link>
        <button onClick={() => { setCurrentStage(0) }} className="px-8 py-3 bg-red rounded-xl text-white font-Poppins  font-normal text-xs mx-5">Cancel</button></div>
      </div>
    );
  }
  if (currentStage === 4) {
    return (
      <div className='px-5 py-2 flex flex-col items-center justify-center text-center gap-5'>
        <p className='font-Rubik font-bold text-xl'>
          Ewis Solutions
        </p>
        <div className="h-[300px]">
          
        </div>
        <p className="font-Rubik font-black text-lg text-justify">Who We Are</p>
        <p className="font-Poppins text-base font-light text-justify">EWIS is a renowned IT company which deliver desktop PCs to portable laptops, versatile tablets, and powerful mobile phones and range of designs to meet your diverse needs.</p>
        <div><Link to='/ewis-solutions' className='px-8 py-3 bg-primary rounded-xl text-white font-Poppins  font-normal text-xs'>
          Go to page

        </Link>
        <button onClick={() => { setCurrentStage(0) }} className="px-8 py-3 bg-red rounded-xl text-white font-Poppins  font-normal text-xs mx-5">Cancel</button></div>
      </div>
    );
  }
  if (currentStage === 5) {
    return (
      <div className='px-5 py-2 flex flex-col items-center justify-center text-center gap-5'>
        <p className='font-Rubik font-bold text-xl'>
          Ewis Career Training Solutions
        </p>
        <div className="h-[300px]">
          
        </div>
        <p className="font-Rubik font-black text-lg text-justify">Who We Are</p>
        <p className="font-Poppins text-base font-light text-justify">EWIS is a renowned IT company which deliver desktop PCs to portable laptops, versatile tablets, and powerful mobile phones and range of designs to meet your diverse needs.</p>
        <div><Link to='/career-training-solutions' className='px-8 py-3 bg-primary rounded-xl text-white font-Poppins  font-normal text-xs'>
          Go to page

        </Link><button onClick={() => { setCurrentStage(0) }} className="px-8 py-3 bg-red rounded-xl text-white font-Poppins  font-normal text-xs mx-5">Cancel</button></div>
      </div>
    );
  }
  if (currentStage === 6) {
    return (
      <div className='px-5 py-2 flex flex-col items-center justify-center text-center gap-5'>
        <p className='font-Rubik font-bold text-xl'>
          Ewis Peripheral
        </p>
        <div className="h-[300px]">
          
        </div>
        <p className="font-Rubik font-black text-lg text-justify">Who We Are</p>
        <p className="font-Poppins text-base font-light text-justify">EWIS is a renowned IT company which deliver desktop PCs to portable laptops, versatile tablets, and powerful mobile phones and range of designs to meet your diverse needs.</p>
        <div><Link to='/peripheral' className='px-8 py-3 bg-primary rounded-xl text-white font-Poppins  font-normal text-xs'>
          Go to page

        </Link>
        <button onClick={() => { setCurrentStage(0) }} className="px-8 py-3 bg-red rounded-xl text-white font-Poppins  font-normal text-xs mx-5">Cancel</button>
        </div>
      </div>
    );
  }
  if (currentStage === 7) {
    return (
      <div className='px-5 py-2 flex flex-col items-center justify-center text-center gap-5'>
        <p className='font-Rubik font-bold text-xl'>
          Ewis Toppan Forms
        </p>
        <div className="h-[300px]">
          
        </div>
        <p className="font-Rubik font-black text-lg text-justify">Who We Are</p>
        <p className="font-Poppins text-base font-light text-justify">EWIS is a renowned IT company which deliver desktop PCs to portable laptops, versatile tablets, and powerful mobile phones and range of designs to meet your diverse needs.</p>
        <div><Link to='/toppan-forms' className='px-8 py-3 bg-primary rounded-xl text-white font-Poppins  font-normal text-xs'>
          Go to page

        </Link><button onClick={() => { setCurrentStage(0) }} className="px-8 py-3 bg-red rounded-xl text-white font-Poppins  font-normal text-xs mx-5">Cancel</button></div>
      </div>
    );
  }
  if (currentStage === 8) {
    return (
      <div className='px-5 py-2 flex flex-col items-center justify-center text-center gap-5'>
        <p className='font-Rubik font-bold text-xl'>
          Banking Finance And Insurance
        </p>
        <div className="h-[300px]">
          
        </div>
        <p className="font-Rubik font-black text-lg text-justify">Who We Are</p>
        <p className="font-Poppins text-base font-light text-justify">EWIS is a renowned IT company which deliver desktop PCs to portable laptops, versatile tablets, and powerful mobile phones and range of designs to meet your diverse needs.</p>
        <div><Link to='/banking-finance-and-insurance' className='px-8 py-3 bg-primary rounded-xl text-white font-Poppins  font-normal text-xs'>
          Go to page

        </Link><button onClick={() => { setCurrentStage(0) }} className="px-8 py-3 bg-red rounded-xl text-white font-Poppins  font-normal text-xs mx-5">Cancel</button></div>
      </div>
    );
  }
  if (currentStage === 9) {
    return (
      <div className='px-5 py-2 flex flex-col items-center justify-center text-center gap-5'>
        <p className='font-Rubik font-bold text-xl'>
          Education
        </p>
        <div className="h-[300px]">
          
        </div>
        <p className="font-Rubik font-black text-lg text-justify">Who We Are</p>
        <p className="font-Poppins text-base font-light text-justify">EWIS is a renowned IT company which deliver desktop PCs to portable laptops, versatile tablets, and powerful mobile phones and range of designs to meet your diverse needs.</p>
        <div><Link to='/education' className='px-8 py-3 bg-primary rounded-xl text-white font-Poppins  font-normal text-xs'>
          Go to page

        </Link><button onClick={() => { setCurrentStage(0) }} className="px-8 py-3 bg-red rounded-xl text-white font-Poppins  font-normal text-xs mx-5">Cancel</button></div>
      </div>
    );
  }
  if (currentStage === 10) {
    return (
      <div className='px-5 py-2 flex flex-col items-center justify-center text-center gap-5'>
        <p className='font-Rubik font-bold text-xl'>
          Manufacturing
        </p>
        <div className="h-[300px]">
         
        </div>
        <p className="font-Rubik font-black text-lg text-justify">Who We Are</p>
        <p className="font-Poppins text-base font-light text-justify">EWIS is a renowned IT company which deliver desktop PCs to portable laptops, versatile tablets, and powerful mobile phones and range of designs to meet your diverse needs.</p>
        <div><Link to='/manufacturing' className='px-8 py-3 bg-primary rounded-xl text-white font-Poppins  font-normal text-xs'>
          Go to page

        </Link><button onClick={() => { setCurrentStage(0) }} className="px-8 py-3 bg-red rounded-xl text-white font-Poppins  font-normal text-xs mx-5">Cancel</button></div>
      </div>
    );
  }
  if (currentStage === 11) {
    return (
      <div className='px-5 py-2 flex flex-col items-center justify-center text-center gap-5'>
        <p className='font-Rubik font-bold text-xl'>
          Healthcare
        </p>
        <div className="h-[300px]">
         
        </div>
        <p className="font-Rubik font-black text-lg text-justify">Who We Are</p>
        <p className="font-Poppins text-base font-light text-justify">EWIS is a renowned IT company which deliver desktop PCs to portable laptops, versatile tablets, and powerful mobile phones and range of designs to meet your diverse needs.</p>
        <div><Link to='/healthcare' className='px-8 py-3 bg-primary rounded-xl text-white font-Poppins  font-normal text-xs'>
          Go to page

        </Link><button onClick={() => { setCurrentStage(0) }} className="px-8 py-3 bg-red rounded-xl text-white font-Poppins  font-normal text-xs mx-5">Cancel</button></div>
      </div>
    );
  }
  if (currentStage === 12) {
    return (
      <div className='px-5 py-2 flex flex-col items-center justify-center text-center gap-5'>
        <p className='font-Rubik font-bold text-xl'>
          Retail
        </p>
        <div className="h-[300px]">
         
        </div>
        <p className="font-Rubik font-black text-lg text-justify">Who We Are</p>
        <p className="font-Poppins text-base font-light text-justify">EWIS is a renowned IT company which deliver desktop PCs to portable laptops, versatile tablets, and powerful mobile phones and range of designs to meet your diverse needs.</p>
        <div><Link to='/retail' className='px-8 py-3 bg-primary rounded-xl text-white font-Poppins  font-normal text-xs'>
          Go to page

        </Link><button onClick={() => { setCurrentStage(0) }} className="px-8 py-3 bg-red rounded-xl text-white font-Poppins  font-normal text-xs mx-5">Cancel</button></div>
      </div>
    );
  }
  if (currentStage === 13) {
    return (
      <div className='px-5 py-2 flex flex-col items-center justify-center text-center gap-5 z-50'>
        <p className='font-Rubik font-bold text-xl'>
          Public
        </p>
        <div className="h-[300px]">
         
        </div>
        <p className="font-Rubik font-black text-lg text-justify">Who We Are</p>
        <p className="font-Poppins text-base font-light text-justify">EWIS is a renowned IT company which deliver desktop PCs to portable laptops, versatile tablets, and powerful mobile phones and range of designs to meet your diverse needs.</p>
        <div><Link to='/public' className='px-8 py-3 bg-primary rounded-xl text-white font-Poppins  font-normal text-xs'>
          Go to page

        </Link><button onClick={() => { setCurrentStage(0) }} className="px-8 py-3 bg-red rounded-xl text-white font-Poppins  font-normal text-xs mx-5">Cancel</button></div>
      </div>
    );
  }
  if (currentStage === 14) {
    return (
      <div className='px-5 py-2 flex flex-col items-center justify-center text-center gap-5'>
        <p className='font-Rubik font-bold text-xl'>
          Telecommunication
        </p>
        <div className="h-[300px]">
       
        </div>
        <p className="font-Rubik font-black text-lg text-justify">Who We Are</p>
        <p className="font-Poppins text-base font-light text-justify">EWIS is a renowned IT company which deliver desktop PCs to portable laptops, versatile tablets, and powerful mobile phones and range of designs to meet your diverse needs.</p>
        <div><Link to='/telecommunication' className='px-8 py-3 bg-primary rounded-xl text-white font-Poppins  font-normal text-xsfont-normal '>
          Go to page

        </Link><button onClick={() => { setCurrentStage(0) }} className="px-8 py-3 bg-red rounded-xl text-white font-Poppins  font-normal text-xs mx-5">Cancel</button></div>
      </div>
    );
  }





  return null;
}

export default HomeInfo;
