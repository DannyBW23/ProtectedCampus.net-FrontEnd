"use client"
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
  AWS.config.update({
    accessKeyId: "AKIA6K37QIJA5RZT3JVX",
    secretAccessKey: "HzemPcxqxZa8GqrZxcMuNBrn11bc60xL4pL+tCiF",
    region: "us-east-1",
  });
const bucketName = "profilepic23";
const searchParams = useSearchParams()
const selectedSchool = searchParams.get('selectedSchool');


   const [selectedFile, setSelectedFile] = useState<File | null>(null); 
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
      const fileKey = selectedSchool ? `${selectedSchool}/${selectedFile.name}` : selectedFile.name;
      const params = {
        Bucket: bucketName,
        Key: fileKey,
        Body: selectedFile,
      };
      const response = await s3.upload(params).promise();
      const fileUrl = response.Location;
      console.log(fileUrl); 
      setSelectedFile(null);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  }
};

interface FileUploadProps {
  onFileUpload: (fileUrl: string) => void;
}

const FileUploadWithS3: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
   setTextInput(event.target.value); 
 };
 const [textInput, setTextInput] = useState<string>(""); 
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

        console.log("Text saved successfully!");
        setTimeout(() => window.location.reload(), 2000); 
      } else {
  
        console.error("Error saving text to the database.");
      }
    } catch (error) {
      console.error("Error sending request:", error);
    }
  }; 
  return (
    
    <div className="bg-gray-100 min-h-screen">
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
        <Select >
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
          <span className="text-gray-500">Click &quot;Choose File&quot; to select a file and then press &quot;Upload&quot; to report it</span>


          </div>
          <div className="flex justify-between">
            <label className="block">
            <p style={{ fontFamily: "monospace", color: "black" ,fontSize:"15px" }} >
           {selectedFile
            ? `Selected File: ${selectedFile.name}`
            : ""}
        </p>
              <input
                className="block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-blue-50 file:text-blue-700
          hover:file:bg-blue-100
        "
                type="file"
          accept=".jpg, .jpeg, .png, .pdf, .docx"
          onChange={handleFileChange}
          placeholder="upload"
              />
            </label>
            <Button onClick={handleUpload} className="bg-blue-600 hover:bg-blue-700 text-white">Upload</Button>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <Textarea value={textInput} onChange={handleTextChange} className="mb-4 h-32 border-gray-300" placeholder="Enter your text here." />
          <Button onClick={handleTextSubmit} className="bg-blue-600 hover:bg-blue-700 text-white">Upload Text</Button>
            
        </div>
      </div>
            
      </div>
 
  );
              



}
return(
  <div className=" file-upload">
  <FileUploadWithS3 onFileUpload={(fileUrl) => console.log(fileUrl)} />
</div> 
)
}