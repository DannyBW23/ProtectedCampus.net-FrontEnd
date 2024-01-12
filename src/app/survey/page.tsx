"use client"
// Import the necessary dependencies
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import React, { useState } from "react";
import { useRouter } from 'next/router';
// Add the Component code
export default function Component() {
  const router = useRouter();
  const { selectedSchool } = router.query; // Receive the selected school from the query parameter

  const [selectedEquipment, setSelectedEquipment] = useState<string>("");

  const handleEquipmentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedEquipment(event.target.value);
  };

  const submitFirstQuestion = async () => {
    if (!selectedEquipment || !selectedSchool) {
      alert("Please select a school and equipment rating.");
      return;
    }

    try {
      const response = await fetch('/api/submit-survey-response', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ school: selectedSchool, equipment: selectedEquipment }),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
      } else {
        console.error('Error:', response.status, response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* ... Other JSX code */}
      <main>
        <form className="space-y-6 text-white">
          <div style={{ fontFamily: "monospace", backgroundColor: ' #2774e0' }} className="w-full bg-white shadow-md rounded-lg p-4">
            <fieldset className="space-y-2">
              <legend style={{ fontFamily: "monospace" }} className="font-medium text-lg">
                How would you rate the condition and maintenance of safety equipment in your school?
              </legend>
              <div className="space-y-1">
                <label className="flex items-center">
                  <input
                    className="mr-2"
                    name="equipment"
                    type="radio"
                    value="poor"
                    checked={selectedEquipment === "poor"}
                    onChange={handleEquipmentChange}
                  />
                  <span style={{ fontFamily: "monospace" }}>Poor</span>
                </label>
                {/* Add other radio buttons here */}
              </div>
            </fieldset>
          </div>
          <div style={{ display: 'grid', placeItems: 'center' }}>
            <button
              style={{ fontFamily: "monospace", backgroundColor: ' #2774e0', marginTop: "5px", width: "100px" }}
              className="center px-4 py-2 text-white rounded-md"
              type="button"
              onClick={submitFirstQuestion}
            >
              Submit
            </button>
          </div>
        </form>
      </main>
      {/* ... Other JSX code */}
    </div>
  );
}











// "use client"

// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import Image from 'next/image';
// import React, { useState } from "react";

// export default function Component() {
  
//   const [selectedEquipment, setSelectedEquipment] = useState<string>("");

//   const handleEquipmentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSelectedEquipment(event.target.value);
//   };

//   const submitFirstQuestion = async () => {
//     const school = "YourSchoolName";
//     if (!selectedEquipment) {
//       alert("Please select an equipment rating.");
//       return;
//     }

//     try {
//       const response = await fetch('/api/submit-survey-response', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ school, equipment: selectedEquipment }),
//       });

//       if (response.ok) {
//         const responseData = await response.json();
//         console.log(responseData);
//       } else {
//         console.error('Error:', response.status, response.statusText);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       {/* ... Other JSX code */}
//       <main>
//         <form className="space-y-6 text-white">
//           <div style={{ fontFamily: "monospace", backgroundColor: ' #2774e0' }} className="w-full bg-white shadow-md rounded-lg p-4">
//             <fieldset className="space-y-2">
//               <legend style={{ fontFamily: "monospace" }} className="font-medium text-lg">
//                 How would you rate the condition and maintenance of safety equipment in your school?
//               </legend>
//               <div className="space-y-1">
//                 <label className="flex items-center">
//                   <input
//                     className="mr-2"
//                     name="equipment"
//                     type="radio"
//                     value="poor"
//                     checked={selectedEquipment === "poor"}
//                     onChange={handleEquipmentChange}
//                   />
//                   <span style={{ fontFamily: "monospace" }}>Poor</span>
//                 </label>
//                 <label className="flex items-center">
//                   <input
//                     className="mr-2"
//                     name="equipment"
//                     type="radio"
//                     value="fair"
//                     checked={selectedEquipment === "fair"}
//                     onChange={handleEquipmentChange}
//                   />
//                   <span style={{ fontFamily: "monospace" }}>Fair</span>
//                 </label>
//                 <label className="flex items-center">
//                   <input
//                     className="mr-2"
//                     name="equipment"
//                     type="radio"
//                     value="good"
//                     checked={selectedEquipment === "good"}
//                     onChange={handleEquipmentChange}
//                   />
//                   <span style={{ fontFamily: "monospace" }}>Good</span>
//                 </label>
//                 <label className="flex items-center">
//                   <input
//                     className="mr-2"
//                     name="equipment"
//                     type="radio"
//                     value="excellent"
//                     checked={selectedEquipment === "excellent"}
//                     onChange={handleEquipmentChange}
//                   />
//                   <span style={{ fontFamily: "monospace" }}>Excellent</span>
//                 </label>
//               </div>
//             </fieldset>
//           </div>
//           <div style={{ display: 'grid', placeItems: 'center' }}>
//             <button
//               style={{ fontFamily: "monospace", backgroundColor: ' #2774e0', marginTop: "5px", width: "100px" }}
//               className="center px-4 py-2 text-white rounded-md"
//               type="button"
//               onClick={submitFirstQuestion}
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </main>
//       {/* ... Other JSX code */}
//     </div>
//   );
// }




// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import Image from 'next/image';

// import React from "react";

// export default function Component() {
//   return (
//     <div className="bg-gray-100 min-h-screen">
//     <nav className="bg-white py-2">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
//           <div className="flex items-center space-x-4">
  
//           <Link href="/report">
//             <Button className="text-black bg-transparent hover:bg-gray-100">
//               REPORT
//             </Button></Link>
//             <Link href="survey">
//             <Button className="text-black bg-transparent hover:bg-gray-100">SURVEYS</Button>
//             </Link>   
//             <Link href="/directory">
//             <Button className="text-black bg-transparent hover:bg-gray-100">DONATIONS</Button>
//             </Link>
//             <Link href="/cert">
//             <Button className="text-black bg-transparent hover:bg-gray-100">CERTIFICATIONS</Button>
//             </Link>
//             <Link href="/IOS">
//             <Button className="text-black bg-transparent hover:bg-gray-100">PROTOTYPE APP</Button>
//             </Link>
//           </div>
//           <div className="flex items-center space-x-4">
         
//             <Link href="/home">
//             <Button className="text-black bg-transparent hover:bg-gray-100">HOME</Button>
//             </Link>
//           </div>
//         </div>
//       </nav>
//       <header style={{ backgroundColor: ' #2774e0' }}  className="shadow">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//         <div style={{alignItems: 'center',justifyContent: 'center', display: 'flex'}}>


// <Image src={"https://profilepic23.s3.amazonaws.com/Screen+Shot+2024-01-09+at+4.16.13+AM.png"} alt="Image from S3" width= "150"height="150"
// />
// </div> 
//           <h1 style={{ fontSize: '35px', fontFamily:"monospace" }} className="text-white">PROTECTEDCAMPUS.COM</h1>
//         </div>
//       </header>
//       <header  className="mb-8" >
//       <h2 style={{fontFamily:"monospace",fontSize: '32px'}}className=" text-black text-center font-semibold mt-5 mb-5">SCHOOL SAFETY SURVERY</h2>
//         <p style={{fontFamily:"monospace" }}className="text-black text-center mt-2">
//           Your feedback is important to us. Please take a moment to answer the following questions. Protect your campus.
//         </p>
//       </header> 
      
//  <main >

//       <form className="space-y-6 text-white" >
//         <div style={{fontFamily:"monospace" , backgroundColor: ' #2774e0'}} className="w-full bg-white shadow-md rounded-lg  p-4">
//           <fieldset className="space-y-2">
//             <legend style={{fontFamily:"monospace" }} className="font-medium text-lg">
//               How would you rate the condition and maintenance of safety equipment in your school?
//             </legend>
//             <div className="space-y-1">
//               <label className="flex items-center">
//                 <input className="mr-2" name="equipment" type="radio" value="poor" />
//                 <span style={{fontFamily:"monospace" }}>Poor</span>
//               </label>
//               <label className="flex items-center">
//                 <input className="mr-2" name="equipment" type="radio" value="fair" />
//                 <span style={{fontFamily:"monospace" }}>Fair</span>
//               </label>
//               <label className="flex items-center">
//                 <input className="mr-2" name="equipment" type="radio" value="good" />
//                 <span style={{fontFamily:"monospace" }}>Good</span>
//               </label>
//               <label className="flex items-center">
//                 <input className="mr-2" name="equipment" type="radio" value="excellent" />
//                 <span style={{fontFamily:"monospace" }}> Excellent</span>
//               </label>
//             </div>
//           </fieldset>
//         </div>






        {/* <div style={{ backgroundColor: ' #2774e0'}}className="card bg-white shadow-md rounded-lg p-4">
          <fieldset className="space-y-2">
            <legend style={{fontFamily:"monospace" }} className="font-medium text-lg">
              Do you feel that your school provides adequate training and education on emergency preparedness?
            </legend>
            <div className="space-y-1">
              <label className="flex items-center">
                <input className="mr-2" name="training" type="radio" value="not-at-all" />
                <span style={{fontFamily:"monospace" }}>Not at all</span>
              </label>
              <label className="flex items-center">
                <input className="mr-2" name="training" type="radio" value="somewhat" />
                <span style={{fontFamily:"monospace" }}>Somewhat</span>
              </label>
              <label className="flex items-center">
                <input className="mr-2" name="training" type="radio" value="moderately" />
                <span style={{fontFamily:"monospace" }}>Moderately</span>
              </label>
              <label className="flex items-center">
                <input className="mr-2" name="training" type="radio" value="very-much-so" />
                <span style={{fontFamily:"monospace" }}>Very much so</span>
              </label>
              <label className="flex items-center">
                <input className="mr-2" name="training" type="radio" value="absolutely" />
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
                <input className="mr-2" name="response" type="radio" value="poorly" />
                <span style={{fontFamily:"monospace" }}>Poorly</span>
              </label>
              <label className="flex items-center">
                <input className="mr-2" name="response" type="radio" value="fairly" />
                <span style={{fontFamily:"monospace" }}>Fairly</span>
              </label>
              <label className="flex items-center">
                <input className="mr-2" name="response" type="radio" value="average" />
                <span style={{fontFamily:"monospace" }}>Average</span>
              </label>
              <label className="flex items-center">
                <input className="mr-2" name="response" type="radio" value="well" />
                <span style={{fontFamily:"monospace" }}>Well</span>
              </label >
              <label className="flex items-center">
                <input className="mr-2" name="response" type="radio" value="excellently" />
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
              <Button style={{fontFamily:"monospace" }}className="mr-2 bg-blue-500 text-white" variant="default">

                1
              </Button>
              <Button style={{fontFamily:"monospace" }}className="mr-2  bg-red-500 text-white" variant="default">
                2 
              </Button>
              <Button style={{fontFamily:"monospace" }}className="mr-2  bg-yellow-500 text-white" variant="default">
                3
              </Button>
              <Button style={{fontFamily:"monospace" }} className="mr-2  bg-green-500 text-white" variant="default">
                4 
              </Button>
              <Button style={{fontFamily:"monospace" }} className="mr-2 bg-blue-500 text-white" variant="default">
                5
              </Button>
              <Button style={{fontFamily:"monospace" }}className="mr-2  bg-red-500 text-white" variant="default">
                6 
              </Button>
              <Button style={{fontFamily:"monospace" }}className="mr-2  bg-yellow-500 text-white" variant="default">
                7
              </Button>
              <Button style={{fontFamily:"monospace" }}className="mr-2  bg-green-500 text-white" variant="default">
                8 
              </Button>
              <Button style={{fontFamily:"monospace" }}className="mr-2 bg-blue-500 text-white" variant="default">
                9
              </Button>
              <Button style={{fontFamily:"monospace" }}className="mr-2 bg-red-500 text-white" variant="default">
                10
              </Button>
   
            </div>
          
        </div>
        <div style={{ backgroundColor: ' #2774e0'}} className="flex flex-col space-y-4 bg-white dark:bg-gray-900 p-6 rounded-md shadow-md">
          <h2 style={{fontFamily:"monospace" }}className="text-xl font-semibold text-white">Witnessing or Experiencing Violence</h2>
          
          <p style={{fontFamily:"monospace" }} className="text-white">
            Have you ever witnessed or experienced bullying, violence, or any other form of threat at school?
          </p>
        
          <Button style={{fontFamily:"monospace" }}className="mr-2 bg-blue-500 text-white" variant="default">
                <span style={{fontFamily:"monospace" }}>YES</span>
              </Button>
              <Button style={{fontFamily:"monospace" }}className="mr-2 bg-red-500 text-white" variant="default">
              <span style={{fontFamily:"monospace" }}>NO</span>
              </Button>
              </div>
</main>
          
<div style={{ display: 'grid', placeItems: 'center' }}>

<button style={{ fontFamily:"monospace",backgroundColor: ' #2774e0',marginTop:"5px" ,width:"100px"}}className="center px-4 py-2 text-white rounded-md" type="submit">
          Submit
        </button>
        </div>
       </div>
 */}




//   )
// }
