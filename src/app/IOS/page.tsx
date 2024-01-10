/**
 * v0 by Vercel.
 * @see https://v0.dev/t/nWDKBwfHXAk
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import React from 'react';

export default function Component() {
  return (
<div className="bg-gray-200 min-h-screen">
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
    <Link href="https://share.proto.io/KJGY04/">
        <Button className="text-black bg-gray-500 hover:bg-gray-500">PROTO LINK</Button>
    </Link>
</div>
<div style={{alignItems: 'center',justifyContent: 'center', display: 'flex'}}>


<Image src={"https://profilepic23.s3.amazonaws.com/Screen+Shot+2024-01-10+at+3.53.57+PM.png"} alt="Image from S3" width= "300" height="100"
 />
</div> 


    </div>

    
  )
}


