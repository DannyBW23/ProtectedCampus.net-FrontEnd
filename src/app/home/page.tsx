"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from 'next/image';
import React, { useState, useEffect, ChangeEvent, FormEvent, createContext, useContext,  ReactNode } from 'react';
import { useRouter } from "next/navigation";
const schools: string[] = ["Stevenson University", "Lehigh University", "Harvard University"];

export default function Page() {


      


  const [selectedSchool, setSelectedSchool] = useState<string | null>(null); 
  const [userInput, setUserInput] = useState<string>('');
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [matchingSchools, setMatchingSchools] = useState<string[]>([]);
  const router = useRouter();
  
  const handleSchoolChange = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);



    const matchingSchools = schools.filter((school) =>
      school.toLowerCase().includes(query.toLowerCase())
    );

    setMatchingSchools(matchingSchools);
  };


  const handleUserInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };


  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (schools.includes(searchQuery)) {
      setSelectedSchool(searchQuery);

      router.push(`/survey?selectedSchool=${encodeURIComponent(searchQuery)}`)
    }
      else {
        console.error("No accepted school selected");
        setSelectedSchool(null);
  
      }
      // Handle the case where selectedSchool is null
      console.error("No school selected");
    fetch('https://backended-f5e18146c5e2.herokuapp.com/api/submit', {
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

  useEffect(() => {
    fetch('https://backended-f5e18146c5e2.herokuapp.com/api/schools')
      .then(res => res.json())
      .then(schools => {
      });
    fetch('https://backended-f5e18146c5e2.herokuapp.com/api/time')
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
            {selectedSchool && ( 
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
                placeholder="Select Your Campus and Press Search"
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
