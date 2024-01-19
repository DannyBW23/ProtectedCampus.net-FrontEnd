"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import React, {useEffect} from 'react';
import { useSearchParams } from "next/navigation";
export default function Component() {
  useEffect(() => {
    var httpTokens = /^http:\/\/(.*)$/.exec(window.location.href);
    if (httpTokens) {
      window.location.replace('https://' + httpTokens[1]);
    }
  }, []); 
  const searchParams = useSearchParams()
  const selectedSchool = searchParams.get('selectedSchool');
  return (
<div className="bg-gray-200 min-h-screen">
<nav className="bg-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-4">
  
          <Link href={selectedSchool ? `/report?selectedSchool=${encodeURIComponent(selectedSchool)}` : "/report"}>
             <Button className="text-black bg-transparent hover-bg-gray-100">REPORT</Button>
            </Link>
            <Link href={selectedSchool ? `/survey?selectedSchool=${encodeURIComponent(selectedSchool)}` : "/survey"}>
            <Button className="text-black bg-transparent hover:bg-gray-100">SURVEY</Button>
            </Link>   
            <Link href={selectedSchool ? `/directory?selectedSchool=${encodeURIComponent(selectedSchool)}` : "/directory"}>
            <Button className="text-black bg-transparent hover:bg-gray-100">DONATIONS</Button>
            </Link>
            <Link href={selectedSchool ? `/cert?selectedSchool=${encodeURIComponent(selectedSchool)}` : "/cert"}>
            <Button className="text-black bg-transparent hover:bg-gray-100">CERTIFICATIONS</Button>
            </Link>
      <Link href={selectedSchool ? `/IOS?selectedSchool=${encodeURIComponent(selectedSchool)}` : "/IOS"}>
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
      <header style={{ backgroundColor: ' #2774e0' }}  className="shadow">
        <div className="max-w-7xl mx-auto px-4 text-center">
        <div style={{alignItems: 'center',justifyContent: 'center', display: 'flex'}}>


<Image src={"https://profilepic23.s3.amazonaws.com/Screen+Shot+2024-01-09+at+4.16.13+AM.png"} alt="Image from S3" width= "150" height="150"
 />
</div> 
          <h1 style={{ fontSize: '35px', fontFamily:"monospace" }} className="text-white">PROTECTEDCAMPUS.COM</h1>
        </div>
      </header>
      <main className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div style={{ backgroundColor: ' #2774e0' }} className="p-6 shadow rounded-lg text-center">
            <h2 style={{ fontSize: '35px', fontFamily:"monospace" }} className="text-white mb-4">SAFETY CERTIFICATIONS     <div className="flex justify-center items-center space-y-4 flex-col mt-6">
     
          
            </div></h2>
            <div className="flex justify-center items-center space-x-4">
            <Link href={selectedSchool ? `/medical?selectedSchool=${encodeURIComponent(selectedSchool)}` : "/medical"}>
              <Button style={{fontFamily:"monospace"}}className="bg-white text- white hover:bg-gray-400 text-black rounded-md">
                MEDICAL TRAINING
              </Button>
              </Link>
              <span className="text-white">OR</span>
              <Link href={selectedSchool ? `/violence?selectedSchool=${encodeURIComponent(selectedSchool)}` : "/violence"}>
              <Button  style={{fontFamily:"monospace"}}className="bg-white text- white hover:bg-gray-400 text-black  rounded-md">
                VIOLENCE TRAINING
              </Button>
              </Link>
            </div>
         
          </div>
        </div>
      </main>
    </div>
  )
}


