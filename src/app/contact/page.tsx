"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from 'next/image';

import { useSearchParams } from "next/navigation";

import { Textarea } from "@/components/ui/textarea"

import React, { useState, useEffect } from "react";
export default function Component() {
  useEffect(() => {
    var httpTokens = /^http:\/\/(.*)$/.exec(window.location.href);
    if (httpTokens) {
      window.location.replace('https://' + httpTokens[1]);
    }
  }, []); 
  const searchParams = useSearchParams();
  const selectedSchool = searchParams.get('selectedSchool');

  const [EmailInput, setEmailInput] = useState<string>(""); 
  const [MessageInput, setMessageInput] = useState<string>(""); 
  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault(); 
    setNameInput(event.target.value);

  };
  const [NameInput, setNameInput] = useState<string>("");
  const handleTextChange2 = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault(); 
    setEmailInput(event.target.value);

  };

  const handleTextChange3 = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault(); 
    setMessageInput(event.target.value);
   
  };


     const handleTextSubmit = async () => {
      
      const payload = { name: NameInput, schools: selectedSchool, emails: EmailInput, message: MessageInput };
 
       console.log("Payload:", payload);
     try {
       
       console.log("Selected School:", selectedSchool);
    
       console.log("Payload:", JSON.stringify(payload)); 
       const response = await fetch("https://backended-f5e18146c5e2.herokuapp.com/api/Contact", {
         method: "POST",
         
    
          headers: {'Content-Type': 'application/json', "Accept": "text/html" },
     
  
         body: JSON.stringify({ name: NameInput, schools: selectedSchool, emails: EmailInput, message: MessageInput }),
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
                 
 <Link href={selectedSchool ? `/login?selectedSchool=${encodeURIComponent(selectedSchool)}` : "/login"}>
            <Button className="text-black bg-transparent hover:bg-gray-100">
                    LOGIN
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
          <h1 style={{ fontSize: '35px', fontFamily:"Courier" }} className="text-white">PROTECTED CAMPUS</h1>
        </div>
      </header>
      
      <div key="1" className="max-w-md mx-auto">
      <h1 style={{fontFamily:"Courier",color:"black"}}className="text-3xl text-blue font-bold text-center mb-6 mt-3">CONTACT US </h1>
      <form className="border border-gray-200 rounded-md p-4">
        <div className="text-white flex flex-col">
          <label style={{fontFamily:"Courier"}} className="mb-2 text-black font-medium" htmlFor="full-name">
            Full Name
          </label>
          <Textarea style={{backgroundColor:"black"}} id= "NameInput"value={NameInput} className="text-white" onChange={handleTextChange} placeholder="Your full name"  />
        </div>
        <div className="text-white flex flex-col">
          <label style={{fontFamily:"Courier"}} className="mb-2 mt-2 text-black font-medium" htmlFor="email">
            E-mail
          </label>
          <Textarea style={{backgroundColor:"black"}}  id= "EmailInput"value={EmailInput} className="text-white" onChange={handleTextChange2} placeholder="Your email address"  />
        </div>
        <div className="text-white flex flex-col">
          <label style={{fontFamily:"Courier"}} className="mb-2 mt-2 text-black font-medium" htmlFor="message">
            Message
          </label>
          <Textarea style={{backgroundColor:"black"}}  id="MessageInput" value={MessageInput} className="text-white" onChange={handleTextChange3} placeholder="Your message" />
        </div>
        <Button style={{backgroundColor:"#2774e0"}}onClick={handleTextSubmit} className="text-white w-full mt-3">
         <span className="text-white">
         Contact Us    
         </span>
      
          
          </Button>
      </form>
    
      </div>

<Image src={"https://profilepic23.s3.amazonaws.com/jpeg1.jpeg"} alt="Image from S3" width= "1600" height="1440"
/>



</div>
        
  </html>
  
  )}