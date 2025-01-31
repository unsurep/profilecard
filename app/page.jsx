'use client';

import React from "react";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoTime } from "react-icons/io5";
import { TbWorldWww } from "react-icons/tb";
import { SocialIcon } from 'react-social-icons'
import { useState, useEffect } from "react";


const profileCard=()=>{
  const [time, setTime]=useState(new Date());

  useEffect(()=>{
    const interval = setInterval(()=>{
      setTime(new Date());
    }, 1000);

    return ()=>clearInterval(interval)
  }, [])

  const formattedTime = time.toLocaleTimeString("en-GB", {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  })




  return (
    <article className="bg-green-300 h-[155%] md:h-screen pt-3 md:pt-16 lg:pt-6  ">
      <div className="flex flex-col items-center py-5 bg-white space-y-3 md:space-y-6 mx-[1rem] md:mx-[10rem] lg:mx-[28rem] ring ring-yellow-400   rounded-lg lg:h-[95%]">
        {/* profile image */}
        <div className="ring ring-yellow-400 rounded-full">
          <Image src='/pic.png' width={800} height={800} alt='profileCard' className="w-40 h-40 rounded-full" data-testid="profilePicture"/>
        </div>

        <ul className="text-xs md:text-base font-semibold flex flex-col gap-1">
          <li className="flex items-center gap-3" data-testid="fullName"><span><FaUser /></span>Umukoro Oghenevwede Louis</li>
          <li className="flex items-center gap-3" data-testid="jobTitle"><span><FaCode /></span>Front-end Web Developer</li>
          <li  className="flex items-center gap-3" data-testid="currentLocation"><span><IoLocationSharp /></span>Rivers State, Nigeria</li>
          <li className="flex items-center gap-3" data-testid="emailAddress"><span><MdEmail /></span>wedevilleg@gmail.com</li>
          <li className="flex items-center gap-3" data-testid="socialLinks"><span className="flex items-center justify-center"><TbWorldWww />
          </span> 
          
          <SocialIcon
          url="https://linkedin.com/in/louisvwede"
          target="_blank"
          fgColor=""
          bgColor=""
          network="linkedin"
          style={{ height: 20, width: 20, }}
          className="rounded-full"
          />

          <SocialIcon
          url="https://github.com/unsurep"
          target="_blank"
          fgColor=""
          bgColor=""
          network="github"
          style={{ height: 20, width: 20 }}
          className="rounded-full"
          />

          <SocialIcon
          url="https://www.tiktok.com/@onesureplayer?_t=ZM-8tSCSG1nYjG&_r=1"
          target="_blank"
          fgColor=""
          bgColor=""
          network="tiktok"
          style={{ height: 20, width: 20 }}
          className="rounded-full"
          />

          <SocialIcon
          url="https://x.com/LVwedee"
          target="_blank"
          fgColor=""
          bgColor=""
          network="twitter"
          style={{ height: 20, width: 20 }}
          className="rounded-full"
          />

          <SocialIcon
          url="https://wa.me/+2348081808904"
          target="_blank"
          fgColor=""
          bgColor=""
          network="whatsapp"
          style={{ height: 20, width: 20 }}
          className="rounded-full"
          />
          
          </li>
          <li className="flex items-center gap-3" data-testid="currentTimeUTC"><span><IoTime /></span>{formattedTime}</li>
        </ul>

        <p className="text-xs md:text-lg lg:text-base px-[1rem] md:px-[2rem] font-semibold" data-testid="shortBio">Umukoro Oghenevwede Louis is a Nigerian, result-driven with over 10 years of experience in administration, client relations and operational management. Demonstrates excellent skills in leadership, organizing and communication, with a proven ability to manage multiple tasks efficiently and contribute to team success. Recently upskilled in modern digital tools and web technologies, combining strong administrative expertise with problem-solving abilities to drive organizational growth.</p>

      </div>
      
    </article>
  )



};

export default profileCard;