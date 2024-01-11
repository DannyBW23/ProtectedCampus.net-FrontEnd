'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link";


import Image from 'next/image';

import React, { useState, useEffect } from 'react';


export default function Page() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('https://protectedcampus-97e06dea1380.herokuapp.com/api/time ')
      .then(res => res.json())
      .then(data => {
        setCurrentTime(data.time);
      });
  }, []);


  return(
    <div style={{ backgroundColor: '#2774e0' }} className=" min-h-screen">
   <nav className="bg-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-4">
  
          <Link href="/report">
            <Button className="text-black bg-transparent hover:bg-gray-100">
              REPORT
            </Button></Link>
            <Link href="survey">
            <Button className="text-black bg-transparent hover:bg-gray-100">SURVEYS</Button>
            </Link>   
            <Link href="/directory">
            <Button className="text-black bg-transparent hover:bg-gray-100">DONATIONS</Button>
            </Link>
            <Link href="/cert">
            <Button className="text-black bg-transparent hover:bg-gray-100">CERTIFICATIONS</Button>
            </Link>
            <Link href="/IOS">
            <Button className="text-black bg-transparent hover:bg-gray-100">PROTOTYPE APP</Button>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
         
            <Link href="/home">
            <Button className="text-black bg-transparent hover:bg-gray-100">HOME</Button>
            </Link>
          </div>
        </div>
      </nav>

      <header className=" -mt-1 text-white py-1 flex flex-col items-center">
      <div style={{alignItems: 'center',justifyContent: 'center', display: 'flex'}}>


<Image src={"https://profilepic23.s3.amazonaws.com/Screen+Shot+2024-01-09+at+4.16.13+AM.png"} alt="Image from S3" width= "150" height="150"
 />
</div> 
      <h1 style={{ fontSize: '60px', fontFamily:"monospace" }}>PROTECTEDCAMPUS.COM</h1>

      </header>
      <main className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center space-x-4">
          
            <Input className=" bg-blue-800 flex-1 px-4 py-2 text-white " placeholder="Select Your Campus" type="search" />
          </div>
          <p style={{fontFamily:"monospace"}}className="text-center  mt-8 text-white">
            In 4 out of 5 school shootings, at least one other person had knowledge of the attacker’s plan but failed to
            report it.
          </p>
        </div>
      </main>
    <div>{currentTime}</div>
   
   

    </div>


   
  );
}

