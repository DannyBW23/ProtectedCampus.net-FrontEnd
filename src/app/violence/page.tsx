"use client"
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import Image from 'next/image';
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
             <Link href={selectedSchool ? `/contact?selectedSchool=${encodeURIComponent(selectedSchool)}` : "/contact"}>
            <Button className="text-black bg-transparent hover:bg-gray-100">
                    CONTACT
                  </Button>
             </Link>
                  {/* <Link href={selectedSchool ? `/directory?selectedSchool=${encodeURIComponent(selectedSchool)}` : "/directory"}>
                  <Button className="text-black bg-transparent hover:bg-gray-100">DONATIONS</Button>
                  </Link> */}
          </div>
          <div className="flex items-center space-x-4">
         
         <Link href="/home">
         <Button className="text-black bg-transparent hover:bg-gray-100">HOME</Button>
         </Link>
       </div>
        </div>
      </nav>
      <header style={{ backgroundColor: ' #2774e0' }}  className=" shadow">
        <div className="max-w-7xl mx-auto px-4 text-center">
        <div style={{alignItems: 'center',justifyContent: 'center', display: 'flex'}}>


<Image src={"https://profilepic23.s3.amazonaws.com/Screen+Shot+2024-01-09+at+4.16.13+AM.png"} alt="Image from S3" width= "150"height="150"
 />
</div> 
          <h1 style={{ fontSize: '35px', fontFamily:"monospace" }} className="text-white">PROTECTEDCAMPUS.COM</h1>
        </div>
      </header>
      <Tabs className="mt-5 w-full" defaultValue="cpr">
        <TabsList  style={{ backgroundColor: ' #2774e0',fontFamily:"monospace" }}className="grid w-full grid-cols-4">
          <TabsTrigger style={{ backgroundColor: ' #2774e0',fontFamily:"monospace" }} className="text-white"value="cpr">Situational Awareness</TabsTrigger>
          <TabsTrigger style={{ backgroundColor: ' #2774e0' ,fontFamily:"monospace"}}className="text-white" value="bleeding">Trust Your Instincts</TabsTrigger>
          <TabsTrigger style={{ backgroundColor: ' #2774e0',fontFamily:"monospace" }} className="text-white"value="choking">Verbal Assertiveness</TabsTrigger>
          <TabsTrigger style={{ backgroundColor: ' #2774e0',fontFamily:"monospace" }} className="text-white"value="unconsciousness">Basic Self-Defense Techniques</TabsTrigger>
        </TabsList>
        <TabsContent value="cpr" style={{ backgroundColor: ' #2774e0',fontFamily:"monospace"}}>
          <Card>
            <CardHeader style={{ backgroundColor: ' #0c264a' }}>
              <CardTitle style={{fontSize:"25px"}}className="text-white" >Situational Awareness</CardTitle>
            </CardHeader>
            <CardContent style={{ backgroundColor: ' #2774e0', fontFamily:"monospace",fontSize:"20px"}} className="space-y-2 " >
              <p>
              Always be aware of your surroundings and the people around you. Avoid distractions like looking at your phone when walking alone, especially in less crowded or unfamiliar areas
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="bleeding">
          <Card>
            <CardHeader className="text-white" style={{ backgroundColor: ' #0c264a',fontFamily:"monospace" }}>
              <CardTitle  style={{fontSize:"25px"}}className="text-white" >Trust Your Instincts</CardTitle>
            </CardHeader>
            <CardContent style={{ fontSize:"20px",backgroundColor: ' #2774e0',fontFamily:"monospace" }} className="space-y-2">
            <p>
If something or someone feels unsafe or threatening, trust your instincts and remove yourself from the situation if possible. It&apos;s better to err on the side of caution.
</p>

            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="choking">
          <Card>
            <CardHeader className="text-white" style={{ backgroundColor: ' #0c264a',fontFamily:"monospace" }}>
              <CardTitle  style={{fontSize:"25px"}}className="text-white" >Verbal Assertiveness</CardTitle>
            </CardHeader>
            <CardContent style={{ fontSize:"20px",backgroundColor: ' #2774e0',fontFamily:"monospace" }} className="space-y-2">
            <p>
If approached or threatened, use a loud, assertive voice to draw attention to the situation. Yelling phrases like &quot;Back off!&quot; or &quot;I need help!&quot; can deter an attacker and attract help from others.
</p>

            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="unconsciousness">
       
          <Card>
            <CardHeader  className="text-white" style={{ backgroundColor: ' #0c264a' ,fontFamily:"monospace"}}>

              <CardTitle  style={{fontSize:"25px"}}className="text-white">Basic Self-Defense Techniques</CardTitle>
            
            </CardHeader>
         
            <CardContent style={{ fontSize:"20px",backgroundColor: ' #2774e0',fontFamily:"monospace" }} className="space-y-2">
              <p >
                Learn a few basic self-defense moves, such as how to break free from a wrist grab or how to use your elbows, knees, and heels for defense. Remember, the goal is to create an opportunity to escape, not to engage in a prolonged physical confrontation.
                </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
