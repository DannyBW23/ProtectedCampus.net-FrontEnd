"use client"


import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from 'next/image';
import React, { FormEvent, useState, useEffect } from 'react';



import { useSearchParams, useRouter } from 'next/navigation'

export default function Component() {
 

  useEffect(() => {
    var httpTokens = /^http:\/\/(.*)$/.exec(window.location.href);
    if (httpTokens) {
      window.location.replace('https://' + httpTokens[1]);
    } 
  }, []); 

  const router = useRouter();
  const [selectedChoice, setSelectedChoice] = useState<string>('');
  const [selectedChoice2, setSelectedChoice2] = useState<string>('');
  const [selectedChoice3, setSelectedChoice3] = useState<string>('');
  const [selectedChoice4, setSelectedChoice4] = useState<string>('');
  const [selectedChoice5, setSelectedChoice5] = useState<string>('');
  const searchParams = useSearchParams()
  const selectedSchool = searchParams.get('selectedSchool');
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const handleChoiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedChoice(e.target.value);
  };
  const handleChoiceChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedChoice2(e.target.value);
  };
  const handleChoiceChange3 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedChoice3(e.target.value);
  };
  
  const handleChoiceChange4 = (value: string) => {
    setSelectedChoice4(value);

  };
  const handleChoiceChange5 = (value: string) => {
    setSelectedChoice5(value);
  
  };
  
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedSchool) {
      try {
        const response = await fetch('https://backended-f5e18146c5e2.herokuapp.com/save_choice', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ school: selectedSchool, equipment: selectedChoice, response: selectedChoice2 , incident:selectedChoice3, perception: selectedChoice4, witness: selectedChoice5}),
        });

        if (response.ok) {
          console.log('Choice saved successfully'); 
          setSubmitSuccess(true); // Set success state  
          setTimeout(() => window.location.reload(), 2000); // Refresh page after
        } else {
          console.error('Failed to save choice');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      console.error('No school selected');
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
      <header style={{ backgroundColor: ' #2774e0' }}  className="shadow">
        <div className="max-w-7xl mx-auto px-4 text-center">
        <div style={{alignItems: 'center',justifyContent: 'center', display: 'flex'}}>


<Image src={"https://profilepic23.s3.amazonaws.com/Screen+Shot+2024-01-09+at+4.16.13+AM.png"} alt="Image from S3" width= "150"height="150"
/>
</div> 
          <h1 style={{ fontSize: '35px', fontFamily:"monospace" }} className="text-white">PROTECTEDCAMPUS.COM</h1>
        </div>
      </header>
      
      <header  className="mb-8" >
      <h2 style={{fontFamily:"monospace",fontSize: '32px'}}className=" text-black text-center font-semibold mt-5 mb-5">SCHOOL SAFETY SURVERY</h2>
        <p style={{fontFamily:"monospace" }}className="text-black text-center mt-2">
          Your feedback is important to us. Please take a moment to answer the following questions. Protect your campus.
        </p>
      </header> 
      
 <main >

      <form className="space-y-6 text-white" onSubmit={handleSubmit}>
        <div style={{fontFamily:"monospace" , backgroundColor: ' #2774e0'}} className="w-full bg-white shadow-md rounded-lg  p-4">
          <fieldset className="space-y-2">
            <legend style={{fontFamily:"monospace" }} className="font-medium text-lg">
              How would you rate the condition and maintenance of safety equipment in your school?
            </legend>
            <div className="space-y-1">
              <label className="flex items-center">
                <input className="mr-2" name="equipment" type="radio" value="poor" onChange={handleChoiceChange}  checked={selectedChoice === 'poor'}/>
                <span style={{fontFamily:"monospace" }}>Poor</span>
              </label>
              <label className="flex items-center">
                <input className="mr-2" name="equipment" type="radio" value="fair" onChange={handleChoiceChange}  checked={selectedChoice ==="fair"}/>
                <span style={{fontFamily:"monospace" }}>Fair</span>
              </label>
              <label className="flex items-center">
                <input className="mr-2" name="equipment" type="radio" value="good" onChange={handleChoiceChange}  checked={selectedChoice ==="good"} />
                <span style={{fontFamily:"monospace" }}>Good</span>
              </label>
              <label className="flex items-center">
                <input className="mr-2" name="equipment" type="radio" value="excellent" onChange={handleChoiceChange}  checked={selectedChoice ==="excellent"} />
                <span style={{fontFamily:"monospace" }}> Excellent</span>
              </label>
            </div>
          </fieldset>
        </div>






        <div style={{ backgroundColor: ' #2774e0'}}className="card bg-white shadow-md rounded-lg p-4">
          <fieldset className="space-y-2">
            <legend style={{fontFamily:"monospace" }} className="font-medium text-lg">
              Do you feel that your school provides adequate training and education on emergency preparedness?
            </legend>
            <div className="space-y-1">
              <label className="flex items-center">
                <input className="mr-2" name="training" type="radio" value="not-at-all" onChange={handleChoiceChange2}  checked={selectedChoice2 === 'not-at-all'}/>
                <span style={{fontFamily:"monospace" }}>Not at all</span>
              </label>
              <label className="flex items-center">
                <input className="mr-2" name="training" type="radio" value="somewhat" onChange={handleChoiceChange2}  checked={selectedChoice2 ==="somewhat"} />
                <span style={{fontFamily:"monospace" }}>Somewhat</span>
              </label>
              <label className="flex items-center">
                <input className="mr-2" name="training" type="radio" value="moderately"onChange={handleChoiceChange2}  checked={selectedChoice2 ==="moderately"} />
                <span style={{fontFamily:"monospace" }}>Moderately</span>
              </label>
              <label className="flex items-center">
                <input className="mr-2" name="training" type="radio" value="very-much-so" onChange={handleChoiceChange2}  checked={selectedChoice2 ==="very-much-so"} />
                <span style={{fontFamily:"monospace" }}>Very much so</span>
              </label>
              <label className="flex items-center">
                <input className="mr-2" name="training" type="radio" value="absolutely" onChange={handleChoiceChange2}  checked={selectedChoice2 ==="absolutely"}/>
                <span style={{fontFamily:"monospace" }}>Absolutely</span>
              </label>
            </div>
          </fieldset>
        </div>
        <div style={{ backgroundColor: ' #2774e0'}}className="card bg-white shadow-md rounded-lg p-4">
          <fieldset className="space-y-2">
            <legend className="font-medium text-lg" style={{fontFamily:"monospace" }}>
              How well do you believe your school responds to safety concerns and incidents?
            </legend>
            <div className="space-y-1">
              <label className="flex items-center" >
                <input className="mr-2" name="response" type="radio" value="poorly" onChange={handleChoiceChange3}  checked={selectedChoice3 === 'poorly'} />
                <span style={{fontFamily:"monospace" }}>Poorly</span>
              </label>
              <label className="flex items-center">
                <input className="mr-2" name="response" type="radio" value="fairly" onChange={handleChoiceChange3}  checked={selectedChoice3 === 'fairly'} />
                <span style={{fontFamily:"monospace" }}>Fairly</span>
              </label>
              <label className="flex items-center">
                <input className="mr-2" name="response" type="radio" value="average" onChange={handleChoiceChange3}  checked={selectedChoice3 === 'average'} />
                <span style={{fontFamily:"monospace" }}>Average</span>
              </label>
              <label className="flex items-center">
                <input className="mr-2" name="response" type="radio" value="well" onChange={handleChoiceChange3}  checked={selectedChoice3 === 'well'}  />
                <span style={{fontFamily:"monospace" }}>Well</span>
              </label >
              <label className="flex items-center">
                <input className="mr-2" name="response" type="radio" value="excellently" onChange={handleChoiceChange3}  checked={selectedChoice3 === 'excellently'} />
                <span style={{fontFamily:"monospace" }}>Excellently</span>
              </label>
            </div>
          </fieldset>
        </div>
     
      </form>
    </main>
      
      
       
       

      <main className="mt-5 flex flex-col gap-8">
        <div style={{ backgroundColor:' #2774e0' }} className="flex flex-col space-y-4 bg-white dark:bg-gray-900 p-6 rounded-md shadow-md">
          <h2 style={{fontFamily:"monospace" }}className="text-xl font-semibold text-white">Safety Perception</h2>
          <p style={{fontFamily:"monospace" }}className="text-white">
            On a scale of 1 to 10, how safe do you feel at school, with 1 being the least and 10 being the most safe?
          </p>
          <div className="flex-row  items-center">
          <Button  type="button" 
      style={{ fontFamily: "monospace" }} 
      className={`mr-2 text-white ${selectedChoice4 === '1' ? 'bg-black' : 'bg-white'}`} 
      variant="default" 
      onClick={() =>{ handleChoiceChange4('1');
      setColor("pink")
    }}
      
    >
      1
    </Button>
    <Button  type="button" 
      style={{ fontFamily: "monospace" }} 
      className={`mr-2 text-white ${selectedChoice4 === '2' ? 'bg-blue-600' : 'bg-blue-500'}`} 
      variant="default" 
      onClick={() => handleChoiceChange4('2')}
    >
      2
    </Button>
    <Button  type="button" 
      style={{ fontFamily: "monospace" }} 
      className={`mr-2 text-white ${selectedChoice4 === '3' ? 'bg-blue-600' : 'bg-blue-500'}`} 
      variant="default" 
      onClick={() => handleChoiceChange4('3')}
    >
      3
    </Button>
    <Button  type="button" 
      style={{ fontFamily: "monospace" }} 
      className={`mr-2 text-white ${selectedChoice4 === '4' ? 'bg-blue-600' : 'bg-blue-500'}`} 
      variant="default" 
      onClick={() => handleChoiceChange4('4')}
    >
      4
    </Button>
    <Button  type="button" 
      style={{ fontFamily: "monospace" }} 
      className={`mr-2 text-white ${selectedChoice4 === '5' ? 'bg-blue-600' : 'bg-blue-500'}`} 
      variant="default" 
      onClick={() => handleChoiceChange4('5')}
    >
      5
    </Button>
    <Button  type="button" 
      style={{ fontFamily: "monospace" }} 
      className={`mr-2 text-white ${selectedChoice4 === '6' ? 'bg-blue-600' : 'bg-blue-500'}`} 
      variant="default" 
      onClick={() => handleChoiceChange4('6')}
    >
      6
    </Button>
    <Button  type="button" 
      style={{ fontFamily: "monospace" }} 
      className={`mr-2 text-white ${selectedChoice4 === '7' ? 'bg-blue-600' : 'bg-blue-500'}`} 
      variant="default" 
      onClick={() => handleChoiceChange4('7')}
    >
      7
    </Button>
    <Button  type="button" 
      style={{ fontFamily: "monospace" }} 
      className={`mr-2 text-white ${selectedChoice4 === '8' ? 'bg-blue-600' : 'bg-blue-500'}`} 
      variant="default" 
      onClick={() => handleChoiceChange4('8')}
    >
      8
    </Button>
    <Button  type="button" 
      style={{ fontFamily: "monospace" }} 
      className={`mr-2 text-white ${selectedChoice4 === '9' ? 'bg-blue-600' : 'bg-blue-500'}`} 
      variant="default" 
      onClick={() => handleChoiceChange4('9')}
    >
      9
    </Button>
    <Button  type="button" 
      style={{ fontFamily: "monospace" }} 
      className={`mr-2 text-white ${selectedChoice4 === '10' ? 'bg-blue-600' : 'bg-blue-500'}`} 
      variant="default" 
      onClick={() => handleChoiceChange4('10')}
    >
      10
    </Button>
   
            </div>
          
        </div>
        
        <div style={{ backgroundColor: ' #2774e0'}} className="flex flex-col space-y-4 bg-white dark:bg-gray-900 p-6 rounded-md shadow-md">
          <h2 style={{fontFamily:"monospace" }}className="text-xl font-semibold text-white">Witnessing or Experiencing Violence</h2>
          
          <p style={{fontFamily:"monospace" }} className="text-white">
            Have you ever witnessed or experienced bullying, violence, or any other form of threat at school?
          </p>
          <Button  type="button" 
      style={{ fontFamily: "monospace" }} 
      className={`mr-2 text-white ${selectedChoice5 === 'Yes' ? 'bg-blue-600' : 'bg-blue-500'}`} 
      variant="default" 
      onClick={() => handleChoiceChange5('Yes')}
    >
      Yes
    </Button>
    <Button  type="button" 
    
      style={{ fontFamily: "monospace" }} 
      className={`mr-2 text-white ${selectedChoice5=== 'No' ? 'bg-blue-600' : 'bg-blue-500'}`} 
      variant="default" 
      onClick={() => handleChoiceChange5('No')}
    >
      No
    </Button>
              </div>
</main>
<form className="space-y-6 text-white" onSubmit={handleSubmit}>
<div style={{ display: 'grid', placeItems: 'center' }}>
        <button style={{ fontFamily: "monospace", backgroundColor: '#2774e0', marginTop: "5px", width: "100px" }}className="center px-4 py-2 text-white rounded-md" type="submit">
          Submit
        </button>
      </div>
    </form>
    {submitSuccess &&(
<div className="text-center p-4 mb-4 text-green-700 bg-green-200 rounded-lg">
Thank you for the response.
</div>
)}
</div>
);
}