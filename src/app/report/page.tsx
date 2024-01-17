"use client"

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

        // Upload the file to S3
        const response = await s3.upload(params).promise();

        // Get the URL of the uploaded file
        const fileUrl = response.Location;

        onFileUpload(fileUrl);
        setSelectedFile(null);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(event.target.value); // Update text input state
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
  return (

    
    <div>
      <div className="mt-6 ml-5 p-4 text-center">
        <p style={{ fontFamily: "monospace", color: "black" }} className="text-gray-500">
          {selectedFile
            ? `Selected File: ${selectedFile.name}`
            : "Drag and drop files here or click to add text."}
        </p>
        <input
          type="file"
          accept=".jpg, .jpeg, .png, .pdf, .docx"
          onChange={handleFileChange}
        />
        <button style={{marginRight:"25px"}}className= " text-black"onClick={handleUpload}>Upload</button>
      </div>
      <div className="mt-2 p-4 border-2 text-center">
      <input
        type="text"
        value={textInput}
        onChange={handleTextChange}
        placeholder="Enter text"
        className="border-2 text-black border-gray-300 p-2"

      />
        <Button onClick={handleTextSubmit}>Save Text</Button>
      </div>
    </div>
  );
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
      <Select>
            <SelectTrigger id="university">
              <SelectValue className="text-blue-500" placeholder="Describe your situation" />
           
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem className="text-blue-500" value="steenson">
                Threatening Behavior
              </SelectItem>
              <SelectItem value="oher">Sexual Harrasement</SelectItem>
            </SelectContent>
            <SelectContent position="popper">
            <SelectItem value="stevenson">Threatening Behavior</SelectItem>
            <SelectItem value="stevenon">Sexual Harrasement</SelectItem>
              <SelectItem value="steveson">Cyber Bullying</SelectItem>
              <SelectItem value="othr">Other</SelectItem>
            </SelectContent>
          </Select>

      <div className="mr-5 file-upload mt-8">
        <FileUploadWithS3 onFileUpload={(fileUrl) => console.log(fileUrl)} />
      </div>
    </div>
  );
}

