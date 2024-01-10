/**
 * v0 by Vercel.
 * @see https://v0.dev/t/EtA6RFhZJHi
 */
// import './styles.css';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import Image from 'next/image';
import React from "react";
// interface FileIconProps {
//   className?: string;
// }

// function FileIcon(props: FileIconProps) {
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
//       <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
//       <polyline points="14 2 14 8 20 8" />
//     </svg>
//   );
// }

// interface FlagIconProps {
//   className?: string;
// }

// function FlagIcon(props: FlagIconProps) {
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
//       <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
//       <line x1="4" x2="4" y1="22" y2="15" />
//     </svg>
//   );
// }

// interface ItalicIconProps {
//   className?: string;
// }

// function ItalicIcon(props: ItalicIconProps) {
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
//       <line x1="19" x2="10" y1="4" y2="4" />
//       <line x1="14" x2="5" y1="20" y2="20" />
//       <line x1="15" x2="9" y1="4" y2="20" />
//     </svg>
//   );
// }

// interface UnderlineIconProps {
//   className?: string;
// }

// function UnderlineIcon(props: UnderlineIconProps) {
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
//       <path d="M6 4v6a6 6 0 0 0 12 0V4" />
//       <line x1="4" x2="20" y1="20" y2="20" />
//     </svg>
//   );
// }

// interface ChevronDownIconProps {
//   className?: string;
// }

// function ChevronDownIcon(props: ChevronDownIconProps) {
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
//       <path d="m6 9 6 6 6-6" />
//     </svg>
//   );
// }
// interface BoldIconProps {
//   className?: string;
// }

// function BoldIcon(props: BoldIconProps) {
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
//       <path d="M14 12a4 4 0 0 0 0-8H6v8" />
//       <path d="M15 20a4 4 0 0 0 0-8H6v8Z" />
//     </svg>
//   );
// }
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
            {/* <LinkIcon className="text-gray-600" />
            <BoldIcon className="text-gray-600" />
            <ItalicIcon className="text-gray-600" />
            <UnderlineIcon className="text-gray-600" />
            <FileIcon className="text-gray-600" /> */}

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
