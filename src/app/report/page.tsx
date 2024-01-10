
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import Image from 'next/image';
import React from "react";

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


<Image src={"https://profilepic23.s3.amazonaws.com/Screen+Shot+2024-01-09+at+4.16.13+AM.png"} alt="Image from S3" width= "150"height="150"
 />
</div> 
          <h1 style={{ fontSize: '35px', fontFamily:"monospace" }} className="text-white">PROTECTEDCAMPUS.COM</h1>
        </div>
      </header>
   
      <div className="flex flex-col items-center">
        <div className="mb-4">
         
        </div>
       
        <div className="w-full max-w-2xl p-6 bg-white border-2 border-gray-400">
          <h2 style={{fontFamily:"monospace"}}className="text-xl text-black font-semibold mb-4">ANONYMOUS REPORT</h2>
          <div className="flex justify-between items-center p-4 border-2 border-gray-300">
     

          </div>
          <div className="mt-2 p-4 border-2 border-gray-300 border-dashed">
            <p style={{fontFamily:"monospace"}}className="text-gray-500">Drag and drop files here or click to add text.</p>
            
          </div>
          
          
             <Select>
            <SelectTrigger style={{ backgroundColor: '#2774e0', fontFamily:"monospace"}} className= "text-white" id="university">
              <SelectValue className="text-blue-500" placeholder="Select" />
    
            </SelectTrigger>
            <SelectContent style={{ backgroundColor: '#2774e0', fontFamily:"monospace"}} position="popper">
              <SelectItem value="stevenson">
                Sexual Harrasement
              </SelectItem>
              <SelectItem value="other">Violence</SelectItem>
              <SelectItem value="others">Cyber Threats</SelectItem>
              <SelectItem value="othersa">Suspicious Activity</SelectItem>
              <SelectItem value="othersas">Bullying</SelectItem> 
            </SelectContent>
      
          </Select>
        </div>
      </div>
    </div>

  )
}
