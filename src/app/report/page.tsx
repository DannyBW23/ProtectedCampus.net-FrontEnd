"use client"

// import React, { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import AWS from 'aws-sdk';
// import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select";
// import Link from "next/link";
// import Image from 'next/image';
// import { useSearchParams } from 'next/navigation';


// export default function Component() {
  // useEffect(() => {
  //   var httpTokens = /^http:\/\/(.*)$/.exec(window.location.href);
  //   if (httpTokens) {
  //     window.location.replace('https://' + httpTokens[1]);
  //   }
  // }, []); 
// const bucketName = "profilepic23";

// const searchParams = useSearchParams()
// const selectedSchool = searchParams.get('selectedSchool');
// interface FileUploadProps {
//   onFileUpload: (fileUrl: string) => void;
// }

// const FileUploadWithS3: React.FC<FileUploadProps> = ({ onFileUpload }) => {
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const [textInput, setTextInput] = useState<string>(""); 
//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const files = event.target.files;
//     if (files && files.length > 0) {
//       setSelectedFile(files[0]);
//     }
//   };
 
//   const handleUpload = async () => {
//     if (selectedFile) {
//       try {
//         const s3 = new AWS.S3();

//         const params = {
//           Bucket: bucketName,
//           Key: selectedFile.name,
//           Body: selectedFile,
//         };

//         const response = await s3.upload(params).promise();


//         const fileUrl = response.Location;

//         onFileUpload(fileUrl);
//         setSelectedFile(null);
//       } catch (error) {
//         console.error("Error uploading file:", error);
//       }
//     }
//   };
//   const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setTextInput(event.target.value); 
//   };
//     const handleTextSubmit = async () => {
//       const payload = { textInput: textInput, school: selectedSchool };
//       console.log("Payload:", payload);
//     try {
      
//       console.log("Selected School:", selectedSchool);
//       const response = await fetch("https://backended-f5e18146c5e2.herokuapp.com/api/saveTextToDatabase", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ textInput:textInput, schools:selectedSchool }),
//       });

//       if (response.ok) {
//         // Text saved successfully
//         console.log("Text saved successfully!");
//         setTimeout(() => window.location.reload(), 2000); 
//       } else {
//         // Handle error
//         console.error("Error saving text to the database.");
//       }
//     } catch (error) {
//       console.error("Error sending request:", error);
//     }
//   };
//   return (

    
//     <div>
//       <div className="rounded-t-lg mt-6 p-4 ml-20 mr-20 text-center" style={{backgroundColor:"black" ,marginTop: "20px",}}>
//         <p style={{ fontFamily: "monospace", color: "white" ,fontSize:"15px" }} >
//           {selectedFile
//             ? `Selected File: ${selectedFile.name}`
//             : "Drag and drop files here or click to add text."}
//         </p>
//         <input
//        className="mt-5"
//           type="file"
//           placeholder="Upload a file"
//           accept=".jpg, .jpeg, .png, .pdf, .docx"
//           onChange={handleFileChange}
//         />
//         <button style={{marginRight:"10px"}}className= " text-white"onClick={handleUpload}>Upload</button>
//       </div>
//       <div className="rounded-b-lg mr-20 ml-20 text-center" style={{backgroundColor:"black"}}>
//       <input
  
//         type="text"
//         value={textInput}
//         onChange={handleTextChange}
//         placeholder="Enter text"
//         className="mt-5 mb-5  border-2 text-black border-gray-300 p-2"

//       />
//         <Button className="ml-3" onClick={handleTextSubmit}>Save Text</Button>
//       </div>
//     </div>
//   );
// }

//   return (
//     <div className="bg-gray-200 min-h-screen justify-center items-center">
//       <nav className="bg-white py-2 w-full">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
//           <div className="flex items-center space-x-4">
//           <Link href={selectedSchool ? `/report?selectedSchool=${encodeURIComponent(selectedSchool)}` : "/report"}>
//              <Button className="text-black bg-transparent hover-bg-gray-100">REPORT</Button>
//             </Link>
//             <Link href={selectedSchool ? `/survey?selectedSchool=${encodeURIComponent(selectedSchool)}` : "/survey"}>
//             <Button className="text-black bg-transparent hover:bg-gray-100">SURVEYS</Button>
//             </Link>   
//             <Link href={selectedSchool ? `/directory?selectedSchool=${encodeURIComponent(selectedSchool)}` : "/directory"}>
//             <Button className="text-black bg-transparent hover:bg-gray-100">DONATIONS</Button>
//             </Link>
//             <Link href={selectedSchool ? `/cert?selectedSchool=${encodeURIComponent(selectedSchool)}` : "/cert"}>
//             <Button className="text-black bg-transparent hover:bg-gray-100">CERTIFICATIONS</Button>
//             </Link>
//       <Link href={selectedSchool ? `/IOS?selectedSchool=${encodeURIComponent(selectedSchool)}` : "/IOS"}>
//             <Button className="text-black bg-transparent hover:bg-gray-100">PROTOTYPE APP</Button>
//             </Link>
//           </div>
//           <div className="flex items-center space-x-4">
         
//          <Link href="/home">
//          <Button className="text-black bg-transparent hover:bg-gray-100">HOME</Button>
//          </Link>
//        </div>
//         </div>
//       </nav>
//       <header style={{ backgroundColor: ' #2774e0' }} className="shadow w-full">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
//             <Image src={"https://profilepic23.s3.amazonaws.com/Screen+Shot+2024-01-09+at+4.16.13+AM.png"} alt="Image from S3" width="150" height="150" />
//           </div>
//           <h1 style={{ fontSize: '35px', fontFamily: "monospace" }} className="text-white">PROTECTEDCAMPUS.COM</h1>
//         </div>
//       </header>
//       <header style={{fontSize:'35px',fontFamily: "monospace" }} className="text-center text-black ">
// ANONYMOUS REPORTING


// </header>
//       <Select >
//             <SelectTrigger className="mt-5" id="university">

//               <SelectValue className="text-blue-500" placeholder="Describe your situation" />
           
//             </SelectTrigger>
//             <SelectContent position="popper">
//               <SelectItem className="text-blue-500" value="steenson">
//                 Threatening Behavior
//               </SelectItem>
//               <SelectItem value="oher">Sexual Harrasement</SelectItem>
//             </SelectContent>
//             <SelectContent position="popper">
//             <SelectItem value="stevenson">Threatening Behavior</SelectItem>
//             <SelectItem value="stevenon">Sexual Harrasement</SelectItem>
//               <SelectItem value="steveson">Cyber Bullying</SelectItem>
//               <SelectItem value="othr">Other</SelectItem>
//             </SelectContent>
//           </Select>

//       <div className="mr-5 file-upload mt-8">
//         <FileUploadWithS3 onFileUpload={(fileUrl) => console.log(fileUrl)} />
//       </div>
//     </div>



//  );
// }




import { Textarea } from "@/components/ui/textarea"


import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import AWS from 'aws-sdk';
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select";
import Link from "next/link";
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

export default function Component() {
  useEffect(() => {
    var httpTokens = /^http:\/\/(.*)$/.exec(window.location.href);
    if (httpTokens) {
      window.location.replace('https://' + httpTokens[1]);
    }
  }, []); 
const bucketName = "profilepic23";

const searchParams = useSearchParams()
const selectedSchool = searchParams.get('selectedSchool');
interface FileUploadProps {
  onFileUpload: (fileUrl: string) => void;
}

const FileUploadWithS3: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [textInput, setTextInput] = useState<string>(""); 
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };
 
  const handleUpload = async () => {
    if (selectedFile) {
      try {
        const s3 = new AWS.S3();

        const params = {
          Bucket: bucketName,
          Key: selectedFile.name,
          Body: selectedFile,
        };

        const response = await s3.upload(params).promise();


        const fileUrl = response.Location;

        onFileUpload(fileUrl);
        setSelectedFile(null);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(event.target.value); 
  };
    const handleTextSubmit = async () => {
      const payload = { textInput: textInput, school: selectedSchool };
      console.log("Payload:", payload);
    try {
      
      console.log("Selected School:", selectedSchool);
      const response = await fetch("https://backended-f5e18146c5e2.herokuapp.com/api/saveTextToDatabase", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ textInput:textInput, schools:selectedSchool }),
      });

      if (response.ok) {
        // Text saved successfully
        console.log("Text saved successfully!");
        setTimeout(() => window.location.reload(), 2000); 
      } else {
        // Handle error
        console.error("Error saving text to the database.");
      }
    } catch (error) {
      console.error("Error sending request:", error);
    }
  };
}
  return (
    
    <div className="bg-gray-200 min-h-screen justify-center items-center">
      <nav className="bg-white py-2 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-4">
          <Link href={selectedSchool ? `/report?selectedSchool=${encodeURIComponent(selectedSchool)}` : "/report"}>
             <Button className="text-black bg-transparent hover-bg-gray-100">REPORT</Button>
            </Link>
            <Link href={selectedSchool ? `/survey?selectedSchool=${encodeURIComponent(selectedSchool)}` : "/survey"}>
            <Button className="text-black bg-transparent hover:bg-gray-100">SURVEYS</Button>
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
      <header style={{ backgroundColor: ' #2774e0' }} className="shadow w-full">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
            <Image src={"https://profilepic23.s3.amazonaws.com/Screen+Shot+2024-01-09+at+4.16.13+AM.png"} alt="Image from S3" width="150" height="150" />
          </div>
          <h1 style={{ fontSize: '35px', fontFamily: "monospace" }} className="text-white">PROTECTEDCAMPUS.COM</h1>
        </div>
      </header>
      <header style={{fontSize:'35px',fontFamily: "monospace" }} className="text-center text-black ">
ANONYMOUS REPORTING


</header>
      <div className="max-w-4xl mx-auto p-6">
        <Select className="mb-6">
          <SelectTrigger id="situation">
            <SelectValue placeholder="Describe your situation" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="harassment">Harassment</SelectItem>
            <SelectItem value="bullying">Bullying</SelectItem>
            <SelectItem value="discrimination">Discrimination</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex flex-col space-y-4 mb-6 p-6 bg-white border border-gray-300 rounded-md">
          <div className="flex justify-center items-center w-full h-32 bg-gray-100 border-2 border-dashed border-gray-300 rounded-md cursor-pointer mb-4">
            <span className="text-gray-500">Drag and drop files here or click to add text.</span>
          </div>
          <div className="flex justify-between">
            <label className="block">
              <span className="sr-only">Choose file</span>
              <input
                className="block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-blue-50 file:text-blue-700
          hover:file:bg-blue-100
        "
                type="file"
              />
            </label>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Upload</Button>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <Textarea className="mb-4 h-32 border-gray-300" placeholder="Enter your text here." />
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Save Text</Button>
        </div>
      </div>
      </div>
    
  )
}

