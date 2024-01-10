/**
 * v0 by Vercel.
 * @see https://v0.dev/t/7mjSSLKvKOt
 */
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import Image from 'next/image';
import React from "react";
// interface SearchIconProps {
//   className?: string;
// }

// function SearchIcon(props: SearchIconProps) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="11" cy="11" r="8" />
//       <path d="m21 21-4.3-4.3" />
//     </svg>
//   );
// }

// interface FolderIconProps {
//   className?: string;
// }

// function FolderIcon(props: FolderIconProps) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
//     </svg>
//   );
// }
// interface ViewIconProps {
//   className?: string;
// }

// function ViewIcon(props: ViewIconProps) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
//       <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
//       <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
//       <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
//     </svg>
//   );
// }
// interface ClipboardListIconProps {
//   className?: string;
// }

// function ClipboardListIcon(props: ClipboardListIconProps) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
//       <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
//       <path d="M12 11h4" />
//       <path d="M12 16h4" />
//       <path d="M8 11h.01" />
//       <path d="M8 16h.01" />
//     </svg>
//   );
// }


// interface BookOpenIconProps {
//   className?: string;
// }

// function BookOpenIcon(props: BookOpenIconProps) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
//       <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
//     </svg>
//   );
// }

// interface LinkIconProps {
//   className?: string;
// }
// function LinkIcon(props: LinkIconProps) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
//       <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
//     </svg>
//   );
// }


// interface BadgeIconProps {
//   className?: string;
// }

// function BadgeIcon(props: BadgeIconProps) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
//     </svg>
//   );
// }

// interface BadgeCheckIconProps {
//   className?: string;
// }

// function BadgeCheckIcon(props: BadgeCheckIconProps) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
//       <path d="m9 12 2 2 4-4" />
//     </svg>
//   );
// }
// interface CameraIconProps {
//   className?: string;
// }

// function CameraIcon(props: CameraIconProps) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
//       <circle cx="12" cy="13" r="3" />
//     </svg>
//   );
// }

// interface HomeIconProps {
//   className?: string;
// }

// function HomeIcon(props: HomeIconProps) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
//       <polyline points="9 22 9 12 15 12 15 22" />
//     </svg>
//   );
// }
// interface BellIconProps {
//   className?: string;
// }

// function BellIcon(props: BellIconProps) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
//       <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
//     </svg>
//   );
// }
export default function Component() {
  return (
    <div className="bg-gray-200 min-h-screen">
        <nav className="bg-white py-2">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-4">
          {/* <ViewIcon className="text-black" />  */}
          <Link href="/report">
            <Button className="text-black bg-transparent hover:bg-gray-100">
              REPORT
            </Button></Link>
            {/* <ClipboardListIcon className="text-gray-600" /> */}
            <Link href="survey">
            <Button className="text-black bg-transparent hover:bg-gray-100">SURVEYS</Button>
            </Link>
            {/* <BookOpenIcon className="text-gray-600" /> */}
            <Link href="/directory">
            <Button className="text-black bg-transparent hover:bg-gray-100">DONATIONS</Button>
            </Link>
            {/* <BadgeCheckIcon className="text-gray-600" /> */}
            <Link href="/cert">
            <Button className="text-black bg-transparent hover:bg-gray-100">CERTIFICATIONS</Button>
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
              <CardTitle style={{fontSize:"25px"}}>CPR (Cardiopulmonary Resuscitation)</CardTitle>
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