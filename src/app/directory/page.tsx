"use client"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import Image from "next/image";
import React, {useEffect} from "react";
import { useSearchParams } from "next/navigation";
export default function Component() {
  // useEffect(() => {
  //   var httpTokens = /^http:\/\/(.*)$/.exec(window.location.href);
  //   if (httpTokens) {
  //     window.location.replace('https://' + httpTokens[1]);
  //   }
  // }, []); 
  const searchParams = useSearchParams()
  const selectedSchool = searchParams.get('selectedSchool');
  return (
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


<Image src={"https://profilepic23.s3.amazonaws.com/Screen+Shot+2024-01-09+at+4.16.13+AM.png"} alt="Image from S3" width= "150"height="150"
/>
</div> 
   <h1 style={{ fontSize: '35px', fontFamily:"monospace" }} className="text-white">PROTECTEDCAMPUS.COM</h1>
 </div>
</header>
      <main className="px-4 py-6">
      <h2 style={{fontFamily:"monospace"}}className="text-2xl text-black text-center font-semibold mb-5">Make a Donation</h2>
        <div className="flex justify-between items-center mb-4">
      
   
        </div>
        <div className="flex flex-col items-center space-y-4">
          <div className="w-full max-w-md">
            <Card style={{ fontFamily:"monospace", backgroundColor: ' #2774e0'}} className="w-full">
              <CardHeader>
                <CardTitle>Donation Information</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="flex flex-col space-y-4">
                  <Input className="text-black" style={{ backgroundColor: 'white' }} placeholder="Full Name" type="text" />

                  <Input className="text-black" style={{ backgroundColor: 'white' }}placeholder="Email Address" type="email" />
                  <Input className="text-black"style={{ backgroundColor: 'white' }} placeholder="Amount (USD)" type="text" />
                  <Button variant="default">Donate Now</Button>
                </form>
              </CardContent>
            </Card>
          </div>
          <div className="mt-5 text-center">
            <p style={{fontFamily:"monospace"}} className="text-black text-lg">Your contribution will help us continue to protect your campus.</p>
          </div>
        </div>
      </main>
    </div>
  )
}




