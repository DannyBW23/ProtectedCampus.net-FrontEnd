"use client"
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import Image from 'next/image';
import React, {useEffect} from "react";
import { useSearchParams } from "next/navigation";
export default function Component() { useEffect(() => {
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
      <header style={{ backgroundColor: ' #2774e0' }}  className=" shadow">
        <div className="max-w-7xl mx-auto px-4 text-center">
        <div style={{alignItems: 'center',justifyContent: 'center', display: 'flex'}}>


<Image src={"https://profilepic23.s3.amazonaws.com/Screen+Shot+2024-01-09+at+4.16.13+AM.png"} alt="Image from S3" width= "150" height="150"
 />
</div> 
          <h1 style={{ fontSize: '35px', fontFamily:"monospace" }} className="text-white">PROTECTEDCAMPUS.COM</h1>
        </div>
      </header>
      <Tabs className="w-full mt-5" defaultValue="cpr">
        <TabsList style={{ backgroundColor: ' #2774e0' }} className="grid w-full grid-cols-4">
          <TabsTrigger style={{ fontFamily:"monospace",backgroundColor: ' #2774e0' }} className="text-white"value="cpr">CPR</TabsTrigger>
          <TabsTrigger style={{ backgroundColor: ' #2774e0' ,fontFamily:"monospace"}}className="text-white"value="bleeding">Stop Severe Bleeding</TabsTrigger>
          <TabsTrigger style={{ backgroundColor: ' #2774e0',fontFamily:"monospace" }} className="text-white"value="choking">Heimlich Maneuver</TabsTrigger>
          <TabsTrigger  style={{ backgroundColor: ' #2774e0',fontFamily:"monospace" }}className="text-white" value="unconsciousness">Recovery Position</TabsTrigger>
        </TabsList>
        <TabsContent value="cpr" style={{ backgroundColor: ' #2774e0',fontFamily:"monospace" }}>
          <Card>
            <CardHeader style={{ backgroundColor: ' #0c264a',fontFamily:"monospace" }}>
              <CardTitle className="text-white"style={{fontSize:"25px"}}>CPR (Cardiopulmonary Resuscitation)</CardTitle>
            </CardHeader>
            <CardContent style={{ backgroundColor: ' #2774e0' ,fontFamily:"monospace", fontSize:"20px"}} className="space-y-2 " >
              <p>
                Learn basic CPR for emergencies where someone is not breathing or their heart has stopped. The simplest
                form involves hard and fast chest compressions in the center of the chest, approximately 100 to 120
                compressions per minute.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="bleeding">
          <Card>
            <CardHeader className="text-white"style={{ fontFamily:"monospace",backgroundColor: ' #0c264a' }}>
              <CardTitle style={{fontSize:"25px"}}>Stop Severe Bleeding</CardTitle>
            </CardHeader>
            <CardContent style={{ backgroundColor: ' #2774e0',fontFamily:"monospace" ,fontSize:"20px"}} className="space-y-2">
              <p>
                Apply firm pressure to a bleeding wound with a clean cloth or bandage. If available, use a tourniquet
                for life-threatening bleeding from a limb. Remember, stopping the bleeding is crucial.
              </p>
              
            </CardContent>
            
          </Card>
       
        </TabsContent>
        <TabsContent value="choking">
          <Card >
            
            <CardHeader   className="text-white" style={{ fontFamily:"monospace",backgroundColor: ' #0c264a' }}>

              <CardTitle style={{fontSize:"25px"}}>Heimlich Maneuver for Choking</CardTitle>
            </CardHeader>
            <CardContent style={{ backgroundColor: ' #2774e0',fontFamily:"monospace" ,fontSize:"20px"}} className="space-y-2 ">
              <p>
                If someone is choking and cannot cough, speak, or breathe, stand behind them and give quick, upward
                abdominal thrusts just above the navel to dislodge the object.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="unconsciousness">
          <Card>
            <CardHeader   className="text-white" style={{ backgroundColor: ' #0c264a',fontFamily:"monospace" }}>
              <CardTitle style={{fontSize:"25px"}}className="bg">Recovery Position for Unconsciousness</CardTitle>
            </CardHeader>
            <CardContent style={{ backgroundColor: ' #2774e0',fontFamily:"monospace" ,fontSize:"20px"}}  className="space-y-2">
              <p>If someone is unconscious but breathing, place them in the recovery position.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}