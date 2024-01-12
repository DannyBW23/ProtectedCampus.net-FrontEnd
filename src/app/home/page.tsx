"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from 'next/image';
import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
// Import necessary modules...

export default function Page() {
  const [selectedSchool, setSelectedSchool] = useState<string | null>(null); // Initialize as null
  const [userInput, setUserInput] = useState<string>('');
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [matchingSchools, setMatchingSchools] = useState<string[]>([]);

  // Handle change in the school input field
  const handleSchoolChange = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);

    const schools = ["Stevenson", "Lehigh", "Example School"];

    const matchingSchools = schools.filter((school) =>
      school.toLowerCase().includes(query.toLowerCase())
    );

    setMatchingSchools(matchingSchools);
  };

  // Handle change in the user input field
  const handleUserInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch('https://backend44-e825943fce7b.herokuapp.com/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ school: selectedSchool, user_input: userInput }),
    })
    .then(res => res.json())
    .then(response => {
      console.log(response);
    });
  };

  // Fetch data on component mount
  useEffect(() => {
    fetch('https://backend44-e825943fce7b.herokuapp.com/api/schools')
      .then(res => res.json())
      .then(schools => {
        // Handle schools data
      });
    fetch('https://backend44-e825943fce7b.herokuapp.com/api/time')
      .then(res => res.json())
      .then(data => {
        setCurrentTime(data.time);
      });
  }, []);

  return (
    <div style={{ backgroundColor: '#2774e0' }} className="min-h-screen">
      <nav className="bg-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {selectedSchool && ( // Conditionally render the tabs only if a school is selected
              <>
                <Link href="/report">
                  <Button className="text-black bg-transparent hover:bg-gray-100">
                    REPORT
                  </Button>
                </Link>
                <Link href="survey">
                  <Button className="text-black bg-transparent hover:bg-gray-100">SURVEYS</Button>
                </Link>
                <Link href="/directory">
                  <Button className="text-black bg-transparent hover:bg-gray-100">DONATIONS</Button>
                </Link>
                <Link href="/cert">
                  <Button className="text-black bg-transparent hover:bg-gray-100">CERTIFICATIONS</Button>
                </Link>
                <Link href="/IOS">
                  <Button className="text-black bg-transparent hover:bg-gray-100">PROTOTYPE APP</Button>
                </Link>
              </>
            )}
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/home">
              <Button className="text-black bg-transparent hover:bg-gray-100">HOME</Button>
            </Link>
          </div>
        </div>
      </nav>

      <header className="-mt-1 text-white py-1 flex flex-col items-center">
        <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
          <Image src={"https://profilepic23.s3.amazonaws.com/Screen+Shot+2024-01-09+at+4.16.13+AM.png"} alt="Image from S3" width="150" height="150" />
        </div>
        <h1 style={{ fontSize: '60px', fontFamily: "monospace" }}>PROTECTEDCAMPUS.COM</h1>
      </header>

      <main className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center items-center space-x-4">
              <Input
                className="bg-blue-800 flex-1 px-4 py-2 text-white"
                placeholder="Select Your Campus"
                type="search"
                value={searchQuery}
                onChange={handleSchoolChange}
              />
              {searchQuery.length > 0 && matchingSchools.length > 0 && (
                <ul className="absolute z-10 mt-2 text-black space-y-2 bg-white border border-gray-300 rounded-lg">
                  {matchingSchools.map((school) => (
                    <li
                      key={school}
                      className="cursor-pointer p-2 hover:bg-gray-200"
                      onClick={() => {
                       
                        setSearchQuery(school);
                        setMatchingSchools([]);
                      }}
                    >
                      {school}
                    </li>
                  ))}
                </ul>
              )}
           <Button
  type="submit"
  className="text-white bg-blue-600 hover:bg-blue-700"
  onClick={() => {
    const data = {
      school: searchQuery,
      user_input: userInput, // You can also send other data if needed
    };

    // Make an HTTP POST request to your backend
    fetch('https://backend44-e825943fce7b.herokuapp.com/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
      // Handle the response if needed
    });
  

  }}
>
  Search
</Button>
            </div>
          </form>
        </div>
      </main>
      <p style={{ fontSize: "18px", fontFamily: "monospace" }} className="text-center mt-8 text-white">
        In 4 out of 5 school shootings, at least one other person had knowledge of the attacker’s plan but failed to report it.
      </p>
    </div>
  );
}


// import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import Link from "next/link";
// import Image from 'next/image';

// interface FormData {
//   school: string;
//   email: string;
//   equipment: string;
//   response: string;
// }

// export default function Page() {
//   const [selectedSchool, setSelectedSchool] = useState<string>('');
//   const [userInput, setUserInput] = useState<string>('');
//   const [currentTime, setCurrentTime] = useState<number>(0);
//   const [searchQuery, setSearchQuery] = useState<string>('');
//   const [matchingSchools, setMatchingSchools] = useState<string[]>([]);
//   const [showTabs, setShowTabs] = useState<boolean>(false);

//   const handleSchoolChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const query = event.target.value;
//     setSearchQuery(query);

//     const schools = ["Stevenson", "Lehigh", "Harvard", "Example School", "UCLA"];

//     const matchingSchools = schools.filter((school) =>
//       school.toLowerCase().includes(query.toLowerCase())
//     );

//     setMatchingSchools(matchingSchools);
//   };

//   const handleUserInputChange = (event: ChangeEvent<HTMLInputElement>) => {
//     setUserInput(event.target.value);
//   };

//   const handleSchoolSelection = (school: string) => {
//     setSelectedSchool(school);
//     setSearchQuery(school);
//     setMatchingSchools([]);
    
//     // Check if the selected school is in the accepted schools list
//     if (["Stevenson", "Lehigh", "Harvard", "Example School"].includes(school)) {
//       // If it is, send a request to your backend to indicate that the user has access to tabs
//       fetch('https://backend44-e825943fce7b.herokuapp.com/api/allow-tabs', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ school }),
//       })
//         .then((response) => {
//           if (response.ok) {
//             // Handle successful response
//             console.log('Access to tabs granted');
//             setShowTabs(true);
//           } else {
//             // Handle errors
//             console.error('Error:', response.status, response.statusText);
//           }
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     }
//   };

//   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     const formData: FormData = {
//       school: selectedSchool,
//       email: userInput,
//       equipment: 'some_equipment_value',
//       response: 'some_response_value',
//     };

//     fetch('https://backend44-e825943fce7b.herokuapp.com/api/submit', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((response) => {
//         if (response.ok) {
//           console.log('Submission successful');
//           setShowTabs(true);
//         } else {
//           console.error('Error:', response.status, response.statusText);
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   useEffect(() => {
//     fetch('https://backend44-e825943fce7b.herokuapp.com/api/schools')
//       .then(res => res.json())
//       .then(schools => {
//         // Handle the schools data as needed
//       });
//     fetch('https://backend44-e825943fce7b.herokuapp.com/api/time')
//       .then(res => res.json())
//       .then(data => {
//         setCurrentTime(data.time);
//       });
//   }, []);

//   return (
//     <div style={{ backgroundColor: '#2774e0' }} className="min-h-screen">
//       <nav className="bg-white py-2">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
//           <div className="flex items-center space-x-4">
//             {showTabs && (
//               <>
//                 <Link href="/report">
//                   <Button className="text-black bg-transparent hover:bg-gray-100">
//                     REPORT
//                   </Button>
//                 </Link>
//                 <Link href="survey">
//                   <Button className="text-black bg-transparent hover:bg-gray-100">SURVEYS</Button>
//                 </Link>
//                 <Link href="/directory">
//                   <Button className="text-black bg-transparent hover:bg-gray-100">DONATIONS</Button>
//                 </Link>
//                 <Link href="/cert">
//                   <Button className="text-black bg-transparent hover:bg-gray-100">CERTIFICATIONS</Button>
//                 </Link>
//                 <Link href="/IOS">
//                   <Button className="text-black bg-transparent hover:bg-gray-100">PROTOTYPE APP</Button>
//                 </Link>
//               </>
//             )}
//           </div>
//           <div className="flex items-center space-x-4">
//             <Link href="/home">
//               <Button className="text-black bg-transparent hover:bg-gray-100">HOME</Button>
//             </Link>
//           </div>
//         </div>
//       </nav>

//       <header className="-mt-1 text-white py-1 flex flex-col items-center">
//         <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
//           <Image src={"https://profilepic23.s3.amazonaws.com/Screen+Shot+2024-01-09+at+4.16.13+AM.png"} alt="Image from S3" width="150" height="150" />
//         </div>
//         <h1 style={{ fontSize: '60px', fontFamily: "monospace" }}>PROTECTEDCAMPUS.COM</h1>
//       </header>

//       <main className="px-4 sm:px-6 lg:px-8 py-8">
//         <div className="max-w-7xl mx-auto">
//           <form onSubmit={handleSubmit}>
//             <div className="flex justify-center items-center space-x-4">
//               <Input
//                 className="bg-blue-800 flex-1 px-4 py-2 text-white"
//                 placeholder="Select Your Campus"
//                 type="search"
//                 value={searchQuery}
//                 onChange={handleSchoolChange}
//               />
//               {searchQuery.length > 0 && matchingSchools.length > 0 && (
//                 <ul className="absolute z-10 mt-2 text-black space-y-2 bg-white border border-gray-300 rounded-lg">
//                   {matchingSchools.map((school) => (
//                     <li
//                       key={school}
//                       className="cursor-pointer p-2 hover:bg-gray-200"
//                       onClick={() => handleSchoolSelection(school)}
//                     >
//                       {school}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//               <Button type="submit" className="text-black bg-transparent hover:bg-gray-100">Search</Button>
//             </div>
//           </form>
//         </div>
//       </main>
//       <p style={{ fontSize: "18px", fontFamily: "monospace" }} className="text-center mt-8 text-white">
//         In 4 out of 5 school shootings, at least one other person had knowledge of the attacker’s plan but failed to report it.
//       </p>
//     </div>
//   );
// }


// import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import Link from "next/link";
// import Image from 'next/image';

// interface FormData {
//   school: string;
//   email: string;
//   equipment: string;
//   response: string;
// }

// export default function Page() {
//   const [selectedSchool, setSelectedSchool] = useState<string>('');
//   const [userInput, setUserInput] = useState<string>('');
//   const [currentTime, setCurrentTime] = useState<number>(0);
//   const [searchQuery, setSearchQuery] = useState<string>('');
//   const [matchingSchools, setMatchingSchools] = useState<string[]>([]);

//   const handleSchoolChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const query = event.target.value;
//     setSearchQuery(query);

//     const schools = ["Stevenson", "Lehigh", "Harvard", "Example School"];

//     const matchingSchools = schools.filter((school) =>
//       school.toLowerCase().includes(query.toLowerCase())
//     );

//     setMatchingSchools(matchingSchools);
//   };

//   const handleUserInputChange = (event: ChangeEvent<HTMLInputElement>) => {
//     setUserInput(event.target.value);
//   };

//   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     // Prepare the data to send to the backend
//     const formData: FormData = {
//       school: selectedSchool, // Include the selected school
//       email: userInput,       // Include other form data as needed
//       equipment: 'some_equipment_value',
//       response: 'some_response_value',
//     };

//     // Make a POST request to submit the form data
//     fetch('https://backend44-e825943fce7b.herokuapp.com/api/submit', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((response) => {
//         if (response.ok) {
//           // Handle successful submission
//           console.log('Submission successful');
//           setSelectedSchool(selectedSchool); // Set selectedSchool to trigger re-render
//         } else {
//           // Handle errors
//           console.error('Error:', response.status, response.statusText);
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   useEffect(() => {
//     fetch('https://backend44-e825943fce7b.herokuapp.com/api/schools')
//       .then(res => res.json())
//       .then(schools => {
//         // Handle the schools data as needed
//       });
//     fetch('https://backend44-e825943fce7b.herokuapp.com/api/time')
//       .then(res => res.json())
//       .then(data => {
//         setCurrentTime(data.time);
//       });
//   }, [selectedSchool]); // Only re-fetch when selectedSchool changes

//   return (
//     <div style={{ backgroundColor: '#2774e0' }} className="min-h-screen">
//       <nav className="bg-white py-2">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
//           <div className="flex items-center space-x-4">
//             {selectedSchool && ( // Conditionally render the tabs
//               <>
//                 <Link href="/report">
//                   <Button className="text-black bg-transparent hover:bg-gray-100">
//                     REPORT
//                   </Button>
//                 </Link>
//                 <Link href="survey">
//                   <Button className="text-black bg-transparent hover:bg-gray-100">SURVEYS</Button>
//                 </Link>
//                 <Link href="/directory">
//                   <Button className="text-black bg-transparent hover:bg-gray-100">DONATIONS</Button>
//                 </Link>
//                 <Link href="/cert">
//                   <Button className="text-black bg-transparent hover:bg-gray-100">CERTIFICATIONS</Button>
//                 </Link>
//                 <Link href="/IOS">
//                   <Button className="text-black bg-transparent hover:bg-gray-100">PROTOTYPE APP</Button>
//                 </Link>
//               </>
//             )}
//           </div>
//           <div className="flex items-center space-x-4">
//             <Link href="/home">
//               <Button className="text-black bg-transparent hover:bg-gray-100">HOME</Button>
//             </Link>
//           </div>
//         </div>
//       </nav>
//        <header className="-mt-1 text-white py-1 flex flex-col items-center">
//          <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
//            <Image src={"https://profilepic23.s3.amazonaws.com/Screen+Shot+2024-01-09+at+4.16.13+AM.png"} alt="Image from S3" width="150" height="150" />
//          </div>
//          <h1 style={{ fontSize: '60px', fontFamily: "monospace" }}>PROTECTEDCAMPUS.COM</h1>
//        </header>
 
//        <main className="px-4 sm:px-6 lg:px-8 py-8">
//          <div className="max-w-7xl mx-auto">
//            <form onSubmit={handleSubmit}>
//              {/* School selection */}
//              <div className="flex justify-center items-center space-x-4">
//                <Input
//                  className="bg-blue-800 flex-1 px-4 py-2 text-white"
//                  placeholder="Select Your Campus"
//                  type="search"
//                  value={searchQuery}
//                  onChange={handleSchoolChange}
//                />
//                {searchQuery.length > 0 && matchingSchools.length > 0 && (
//                  <ul className="absolute z-10 mt-2 text-black space-y-2 bg-white border border-gray-300 rounded-lg">
//                    {matchingSchools.map((school) => (
//                      <li
//                        key={school}
//                        className="cursor-pointer p-2 hover:bg-gray-200"
//                        onClick={() => {
//                          setSelectedSchool(school);
//                          setSearchQuery(school);
//                          setMatchingSchools([]);
//                        }}
//                      >
//                        {school}
//                      </li>
//                    ))}
//                  </ul>
//                )}
//                <Button type="submit" className="text-black bg-transparent hover:bg-gray-100">Search</Button>
//              </div>
//            </form>
//          </div>
//        </main>
//        <p style={{ fontSize: "18px", fontFamily: "monospace" }} className="text-center mt-8 text-white">
//          In 4 out of 5 school shootings, at least one other person had knowledge of the attacker’s plan but failed to report it.
//        </p>
//      </div>
//    );
//  }

 




// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import Link from "next/link";
// import Image from 'next/image';
// import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
 
// export default function Page() {
  
//   const [selectedSchool, setSelectedSchool] = useState<string>('');
//   const [userInput, setUserInput] = useState<string>('');
//   const [currentTime, setCurrentTime] = useState<number>(0);
//   const [searchQuery, setSearchQuery] = useState<string>('');
//   const [matchingSchools, setMatchingSchools] = useState<string[]>([]);

//   const handleSchoolChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const query = event.target.value;
//     setSearchQuery(query);

//     const schools = ["Stevenson", "Lehigh", "Example School"];

//     const matchingSchools = schools.filter((school) =>
//       school.toLowerCase().includes(query.toLowerCase())
//     );

//     setMatchingSchools(matchingSchools);
//   };

//   const handleUserInputChange = (event: ChangeEvent<HTMLInputElement>) => {
//     setUserInput(event.target.value);
//   };

//   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     fetch('https://backend44-e825943fce7b.herokuapp.com/api/submit', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ school: selectedSchool, equipment: userInput }),  // Change 'user_input' to 'equipment'
//     })
//     .then(res => res.json())
//     .then(response => {
//       console.log(response);
//     });
//   };

//   useEffect(() => {
//     fetch('https://backend44-e825943fce7b.herokuapp.com/api/schools')
//       .then(res => res.json())
//       .then(schools => {
      
//       });
//     fetch('https://backend44-e825943fce7b.herokuapp.com/api/time')
//       .then(res => res.json())
//       .then(data => {
//         setCurrentTime(data.time);
//       });
//   }, []);

//   return (
//     <div style={{ backgroundColor: '#2774e0' }} className="min-h-screen">
//       <nav className="bg-white py-2">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
//           <div className="flex items-center space-x-4">
//             {selectedSchool && ( 
//               <>
//                 <Link href="/report">
//                   <Button className="text-black bg-transparent hover:bg-gray-100">
//                     REPORT
//                   </Button>
//                 </Link>
//                 <Link href="survey">
//                   <Button className="text-black bg-transparent hover:bg-gray-100">SURVEYS</Button>
//                 </Link>
//                 <Link href="/directory">
//                   <Button className="text-black bg-transparent hover:bg-gray-100">DONATIONS</Button>
//                 </Link>
//                 <Link href="/cert">
//                   <Button className="text-black bg-transparent hover:bg-gray-100">CERTIFICATIONS</Button>
//                 </Link>
//                 <Link href="/IOS">
//                   <Button className="text-black bg-transparent hover:bg-gray-100">PROTOTYPE APP</Button>
//                 </Link>
//               </>
//             )}
//           </div>
//           <div className="flex items-center space-x-4">
//             <Link href="/home">
//               <Button className="text-black bg-transparent hover:bg-gray-100">HOME</Button>
//             </Link>
//           </div>
//         </div>
//       </nav>

//       <header className="-mt-1 text-white py-1 flex flex-col items-center">
//         <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
//           <Image src={"https://profilepic23.s3.amazonaws.com/Screen+Shot+2024-01-09+at+4.16.13+AM.png"} alt="Image from S3" width="150" height="150" />
//         </div>
//         <h1 style={{ fontSize: '60px', fontFamily: "monospace" }}>PROTECTEDCAMPUS.COM</h1>
//       </header>

//       <main className="px-4 sm:px-6 lg:px-8 py-8">
//         <div className="max-w-7xl mx-auto">
//           <form onSubmit={handleSubmit}>
//             <div className="flex justify-center items-center space-x-4">
//               <Input
//                 className="bg-blue-800 flex-1 px-4 py-2 text-white"
//                 placeholder="Select Your Campus"
//                 type="search"
//                 value={searchQuery}
//                 onChange={handleSchoolChange}
//               />
//               {searchQuery.length > 0 && matchingSchools.length > 0 && (
//                 <ul className="absolute z-10 mt-2 text-black space-y-2 bg-white border border-gray-300 rounded-lg">
//                   {matchingSchools.map((school) => (
//                     <li
//                       key={school}
//                       className="cursor-pointer p-2 hover:bg-gray-200"
//                       onClick={() => {
//                         setSelectedSchool(school);
//                         setSearchQuery(school);
//                         setMatchingSchools([]);
//                       }}
//                     >
//                       {school}
//                     </li>
//                   ))}
//                 </ul>
//               )}
         
//   <Button className="text-black bg-transparent hover:bg-gray-100">Search</Button>

//             </div>
//           </form>
//         </div>
//       </main>
//       <p style={{ fontSize: "18px", fontFamily: "monospace" }} className="text-center mt-8 text-white">
//         In 4 out of 5 school shootings, at least one other person had knowledge of the attacker’s plan but failed to report it.
//       </p>
//     </div>
//   );
// }

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import Link from "next/link";
// import Image from 'next/image';
// import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';

// export default function Page() {
//   const [selectedSchool, setSelectedSchool] = useState<string>('');
//   const [userInput, setUserInput] = useState<string>('');
//   const [currentTime, setCurrentTime] = useState<number>(0);
//   const [searchQuery, setSearchQuery] = useState<string>('');
//   const [matchingSchools, setMatchingSchools] = useState<string[]>([]);

//   const handleSchoolChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const query = event.target.value;
//     setSearchQuery(query);
  

//     const schools = ["Stevenson", "Lehigh", "Example School"]; 
  

//     const matchingSchools = schools.filter((school) =>
//       school.toLowerCase().includes(query.toLowerCase())
//     );
  
  
//     setMatchingSchools(matchingSchools);
//   };

//   const handleUserInputChange = (event: ChangeEvent<HTMLInputElement>) => {
//     setUserInput(event.target.value);
//   };

//   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     fetch('https://backend44-e825943fce7b.herokuapp.com/api/submit', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ school: selectedSchool, user_input: userInput }),
//     })
//     .then(res => res.json())
//     .then(response => {
//       console.log(response);
//     });
//   };

//   useEffect(() => {
//     fetch('https://backend44-e825943fce7b.herokuapp.com/api/schools')
//       .then(res => res.json())
//       .then(schools => {
        
//       });
//     fetch('https://backend44-e825943fce7b.herokuapp.com/api/time')
//       .then(res => res.json())
//       .then(data => {
//         setCurrentTime(data.time);
//       });
//   }, []);

//   return (
//     <div style={{ backgroundColor: '#2774e0' }} className="min-h-screen">
//       <nav className="bg-white py-2">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
//           <div className="flex items-center space-x-4">
//             <Link href="/report">
//               <Button className="text-black bg-transparent hover:bg-gray-100">
//                 REPORT
//               </Button>
//             </Link>
//             <Link href="survey">
//               <Button className="text-black bg-transparent hover:bg-gray-100">SURVEYS</Button>
//             </Link>
//             <Link href="/directory">
//               <Button className="text-black bg-transparent hover:bg-gray-100">DONATIONS</Button>
//             </Link>
//             <Link href="/cert">
//               <Button className="text-black bg-transparent hover:bg-gray-100">CERTIFICATIONS</Button>
//             </Link>
//             <Link href="/IOS">
//               <Button className="text-black bg-transparent hover:bg-gray-100">PROTOTYPE APP</Button>
//             </Link>
//           </div>
//           <div className="flex items-center space-x-4">
//             <Link href="/home">
//               <Button className="text-black bg-transparent hover:bg-gray-100">HOME</Button>
//             </Link>
//           </div>
//         </div>
//       </nav>

//       <header className="-mt-1 text-white py-1 flex flex-col items-center">
//         <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
//           <Image src={"https://profilepic23.s3.amazonaws.com/Screen+Shot+2024-01-09+at+4.16.13+AM.png"} alt="Image from S3" width="150" height="150" />
//         </div>
//         <h1 style={{ fontSize: '60px', fontFamily: "monospace" }}>PROTECTEDCAMPUS.COM</h1>
//       </header>

//       <main className="px-4 sm:px-6 lg:px-8 py-8">
//         <div className="max-w-7xl mx-auto">
//           <form onSubmit={handleSubmit}>
//             <div className="flex justify-center items-center space-x-4">
//               <Input
//                 className="bg-blue-800 flex-1 px-4 py-2 text-white"
//                 placeholder="Select Your Campus"
//                 type="search"
//                 value={searchQuery}
//                 onChange={handleSchoolChange}
//               />
//                  {searchQuery.length > 0 && matchingSchools.length > 0 && (
//                 <ul className="absolute z-10 mt-2 text-black space-y-2 bg-white border border-gray-300 rounded-lg">
//                   {matchingSchools.map((school) => (
//                     <li
//                       key={school}
//                       className="cursor-pointer p-2 hover:bg-gray-200"
//                       onClick={() => {
//                         setSelectedSchool(school);
//                         setSearchQuery(school); 
//                         setMatchingSchools([]); 
//                       }}
//                     >
//                       {school}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//               <Button type="submit" className="text-white bg-blue-600 hover:bg-blue-700">
//                 Search
//               </Button>
//             </div>
//           </form>
//         </div>
//       </main>
//             <p style={{fontSize: "18px", fontFamily:"monospace"}}className="text-center  mt-8 text-white">
//             In 4 out of 5 school shootings, at least one other person had knowledge of the attacker’s plan but failed to
//             report it.
//           </p>
//     </div>


//   );
// }


















// "use client"
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import Link from "next/link";
// import Image from 'next/image';
// import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';

// export default function Page() {
//   const [selectedSchool, setSelectedSchool] = useState('');
//   const [userInput, setUserInput] = useState('');
//   const [currentTime, setCurrentTime] = useState(0);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [matchingSchools, setMatchingSchools] = useState<string[]>([]);

//   const handleSchoolChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const query = event.target.value;
//     setSearchQuery(query);
  
//     // Create an array of schools
//     const schools = ["Stevenson", "Lehigh", "Example School"]; // Add more schools as needed
  
//     // Filter schools based on the search query
//     const matchingSchools = schools.filter((school) =>
//       school.toLowerCase().includes(query.toLowerCase())
//     );
  
//     // Update the UI with the list of matching schools
//     setMatchingSchools(matchingSchools);
//   };

//   const handleUserInputChange = (event: ChangeEvent<HTMLInputElement>) => {
//     setUserInput(event.target.value);
//   };

//   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     fetch('https://backend44-e825943fce7b.herokuapp.com/api/submit', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ school: selectedSchool, user_input: userInput }),
//     })
//     .then(res => res.json())
//     .then(response => {
//       console.log(response);
//     });
//   };

//   useEffect(() => {
//     fetch('https://backend44-e825943fce7b.herokuapp.com/api/schools')
//       .then(res => res.json())
//       .then(schools => {
//         // Handle schools data
//       });
//     fetch('https://backend44-e825943fce7b.herokuapp.com/api/time')
//       .then(res => res.json())
//       .then(data => {
//         setCurrentTime(data.time);
//       });
//   }, []);
//   return(
//     <div style={{ backgroundColor: '#2774e0' }} className=" min-h-screen">
//    <nav className="bg-white py-2">
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

//       <header className=" -mt-1 text-white py-1 flex flex-col items-center">
//       <div style={{alignItems: 'center',justifyContent: 'center', display: 'flex'}}>


// <Image src={"https://profilepic23.s3.amazonaws.com/Screen+Shot+2024-01-09+at+4.16.13+AM.png"} alt="Image from S3" width= "150" height="150"
//  />
// </div> 
//       <h1 style={{ fontSize: '60px', fontFamily:"monospace" }}>PROTECTEDCAMPUS.COM</h1>

//       </header>
//       <main className="px-4 sm:px-6 lg:px-8 py-8">
//         <div className="max-w-7xl mx-auto">
//           <form onSubmit={handleSubmit}>
//             <div className="flex justify-center items-center space-x-4">
//               <Input
//                 className="bg-blue-800 flex-1 px-4 py-2 text-white"
//                 placeholder="Select Your Campus"
//                 type="search"
//                 value={selectedSchool}
//                 onChange={handleSchoolChange}
//               />
//                       {matchingSchools.length > 0 && (
//                 <ul className="absolute z-10 mt-2 space-y-2 bg-white border border-gray-300 rounded-lg">
//                   {matchingSchools.map((school) => (
//                     <li
//                       key={school}
//                       className="cursor-pointer p-2 hover:bg-gray-200"
//                       onClick={() => {
//                         setSelectedSchool(school);
//                         setSearchQuery(school); // Populate the input with the selected school
//                         setMatchingSchools([]); // Hide suggestions
//                       }}
//                     >
//                       {school}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//               <Button type="submit" className="text-white bg-blue-600 hover:bg-blue-700">
//                 Search
//               </Button>
//             </div>
//           </form>
//         </div>
//       </main>

     
//     </div>
//   );
// }
