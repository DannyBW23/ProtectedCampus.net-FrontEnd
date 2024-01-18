"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import React, {useEffect} from 'react';
import { useSearchParams } from 'next/navigation';
export default function Component() 
{ useEffect(() => {
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
             <Button className="text-black bg-transparent ">REPORT</Button>
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
         <Button className="text-black bg-transparent ">HOME</Button>
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
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <a href="https://share.proto.io/KJGY04/" target="_blank" rel="noopener noreferrer">
    <Button className="text-black bg-gray-500 hover:bg-gray-500">PROTO LINK</Button>
</a>

</div>
<div style={{alignItems: 'center',justifyContent: 'center', display: 'flex'}}>


<Image src={"https://profilepic23.s3.amazonaws.com/Review++Thumbnail+++Headphone++Technology++Gold++Modern++Youtube+Channel+Thumbnail+(6).png"} alt="Image from S3" width= "1000" height="600"
 />
</div> 


    </div>

    
  )
}


