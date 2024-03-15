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
    <html>
    <meta name="viewport" content="width=device-width, initial-scale=.4" />
<div className="bg-gray-200 min-h-screen">
<nav className="bg-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-4">
          {selectedSchool && ( 
              <>
          <Link href={selectedSchool ? `/report?selectedSchool=${encodeURIComponent(selectedSchool)}` : "/report"}>
             <Button className="text-black bg-transparent hover-bg-gray-100">REPORT</Button>
            </Link>
            <Link href={selectedSchool ? `/survey?selectedSchool=${encodeURIComponent(selectedSchool)}` : "/survey"}>
            <Button className="text-black bg-transparent hover:bg-gray-100">SURVEY</Button>
            </Link>   
            </>)}  
            {selectedSchool === null && (
              <>
              <Button style={{backgroundColor:'#5A5A5A'}}className="text-black  hover:bg-gray-300">REPORT</Button> 
              <Button style={{backgroundColor:'#5A5A5A'}} className="text-black bg-transparent hover:bg-gray-300">SURVEY</Button> </>)} 
            {/* <Link href={selectedSchool ? `/cert?selectedSchool=${encodeURIComponent(selectedSchool)}` : "/cert"}>
            <Button className="text-black bg-transparent hover:bg-gray-100">CERTIFICATIONS</Button>
            </Link> */}
      <Link href={selectedSchool ? `/IOS?selectedSchool=${encodeURIComponent(selectedSchool)}` : "/IOS"}>
            <Button className="text-black bg-transparent hover:bg-gray-100">PROTOTYPE APP</Button>
            </Link>
            <Link href={selectedSchool ? `/mission?selectedSchool=${encodeURIComponent(selectedSchool)}` : "/mission"}>
            <Button className="text-black bg-transparent hover:bg-gray-100">
                    MISSION
                  </Button>
             </Link>
                  {/* <Link href={selectedSchool ? `/directory?selectedSchool=${encodeURIComponent(selectedSchool)}` : "/directory"}>
                  <Button className="text-black bg-transparent hover:bg-gray-100">DONATIONS</Button>
                  </Link> */}
 <Link href={selectedSchool ? `/contact?selectedSchool=${encodeURIComponent(selectedSchool)}` : "/contact"}>
            <Button className="text-black bg-transparent hover:bg-gray-100">
                    CONTACT
                  </Button>
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
          <h1 style={{ fontSize: '35px', fontFamily:"Courier Prime" }} className="text-white">PROTECTED CAMPUS</h1>
        </div>
      </header>


 <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}className=" text-center" >
 <Image src={"https://profilepic23.s3.amazonaws.com/UI+website+RoadMap+(9)+copy.jpg"}alt="Image from S3" width= "1330" height="1330"
 /> 
      </div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}className="mt-5">

      <Image src={"https://profilepic23.s3.amazonaws.com/UI+website+RoadMap+(8).jpg"} alt="Image from S3" width= "1600" height="1600"
 />
 </div>
 <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }} className=" mt-5 text-align: center;">

<Image src={" https://profilepic23.s3.amazonaws.com/ccgray.jpeg"} alt="Image from S3" width= "400" height="400"
/>
</div> 


      </div>



</html>

  )}