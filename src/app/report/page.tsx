"use client"

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import AWS from 'aws-sdk';
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select";
import Link from "next/link";
import Image from 'next/image';

// AWS SDK Configuration
AWS.config.update({
  accessKeyId: "AKIA6K37QIJA5RZT3JVX",
  secretAccessKey: "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",
  region: "us-east-1",
});
const bucketName = "profilepic23";

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
    try {
      // Send the text input to your Flask backend
      const response = await fetch("https://backended-f5e18146c5e2.herokuapp.com/api/saveTextToDatabase", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ textInput }),
      });

      if (response.ok) {
        // Text saved successfully
        console.log("Text saved successfully!");
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

export default function Component() {
  return (
    <div className="bg-gray-200 min-h-screen justify-center items-center">
      <nav className="bg-white py-2 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-4">
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
// const bucketName = "profilepic23";

// interface FileUploadProps {
//   onFileUpload: (fileUrl: string) => void;
// }

// const FileUploadWithS3: React.FC<FileUploadProps> = ({ onFileUpload }) => {
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const [textInput, setTextInput] = useState<string>(""); // Added text input state

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const files = event.target.files;
//     if (files && files.length > 0) {
//       setSelectedFile(files[0]);
//     }
//   };

//   const handleUpload = async () => {
//     // File upload logic here
//   };

  // const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTextInput(event.target.value); // Update text input state
  // };

//   const handleTextSubmit = async () => {
//     try {
//       // Send the text input to your Flask backend
//       const response = await fetch("https://backended-f5e18146c5e2.herokuapp.com/api/saveTextToDatabase", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ textInput }),
//       });

//       if (response.ok) {
//         // Text saved successfully
//         console.log("Text saved successfully!");
//       } else {
//         // Handle error
//         console.error("Error saving text to the database.");
//       }
//     } catch (error) {
//       console.error("Error sending request:", error);
//     }
//   };

//   return (
//     <div className="mt-2 p-4 border-2 border-gray-300 border-dashed text-center">
//       <p style={{ fontFamily: "monospace", color: "black" }} className="text-gray-500">
//         {selectedFile
//           ? `Selected File: ${selectedFile.name}`
//           : "Drag and drop files here or click to add text."}
//       </p>
//       <input
//         type="file"
//         accept=".jpg, .jpeg, .png, .pdf, .docx"
//         onChange={handleFileChange}
//       />
//       <Button onClick={handleUpload}>Upload</Button>
//       <div className="mt-4">
        // <input
        //   type="text"
        //   value={textInput}
        //   onChange={handleTextChange}
        //   placeholder="Enter text"
        //   className="border-2 text-black border-gray-300 p-2"
        // />
//         <Button onClick={handleTextSubmit}>Save Text</Button>
//       </div>
//     </div>
//   );
// };

// export default function Component() {
//   return (
//     <div className="bg-gray-200 min-h-screen justify-center items-center">
//       <nav className="bg-white py-2 w-full">
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
//       <header style={{ backgroundColor: ' #2774e0' }} className="shadow w-full">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
//             <Image src={"https://profilepic23.s3.amazonaws.com/Screen+Shot+2024-01-09+at+4.16.13+AM.png"} alt="Image from S3" width="150" height="150" />
//           </div>
//           <h1 style={{ fontSize: '35px', fontFamily: "monospace" }} className="text-white">PROTECTEDCAMPUS.COM</h1>
//         </div>
//       </header>
//       <div className="file-upload mt-8">
//         <FileUploadWithS3 onFileUpload={(fileUrl) => console.log(fileUrl)} />
//       </div>
//     </div>
//   );
// }













// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import AWS from 'aws-sdk';
// import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select";
// import Link from "next/link";
// import Image from 'next/image';

// // AWS SDK Configuration
// AWS.config.update({
//   accessKeyId: "AKIA6K37QIJA5RZT3JVX",
//   secretAccessKey: "HzemPcxqxZa8GqrZxcMuNBrn11bc60xL4pL+tCiF",
//   region: "us-east-1",
// });

// const bucketName = "profilepic23"; // Your S3 bucket name

// interface FileUploadProps {
//   onFileUpload: (fileUrl: string) => void;
// }

// const FileUploadWithS3: React.FC<FileUploadProps> = ({ onFileUpload }) => {
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);

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

//         // Upload the file to S3
//         const response = await s3.upload(params).promise();

//         // Get the URL of the uploaded file
//         const fileUrl = response.Location;

//         onFileUpload(fileUrl);
//         setSelectedFile(null);
//       } catch (error) {
//         console.error("Error uploading file:", error);
//       }
//     }
//   };

//   return (
//     <div className="mt-2 p-4 border-2 border-gray-300 border-dashed">
//       <p style={{ fontFamily: "monospace" }} className="text-gray-500">
//         {selectedFile
//           ? `Selected File: ${selectedFile.name}`
//           : "Drag and drop files here or click to add text."}
//       </p>
//       <input
//         type="file"
//         accept=".jpg, .jpeg, .png, .pdf, .docx"
//         onChange={handleFileChange}
//       />
//       <Button onClick={handleUpload}>Upload</Button>
//     </div>
//   );
// };

// export default function Component() {
//   return (
//     <div className="bg-gray-200 min-h-screen">
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
//       <header style={{ backgroundColor: ' #2774e0' }} className="shadow">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
//             <Image src={"https://profilepic23.s3.amazonaws.com/Screen+Shot+2024-01-09+at+4.16.13+AM.png"} alt="Image from S3" width="150" height="150" />
//           </div>
//           <h1 style={{ fontSize: '35px', fontFamily: "monospace" }} className="text-white">PROTECTEDCAMPUS.COM</h1>
//         </div>
//       </header>

//     </div>
    
//   );
// }





// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import AWS from 'aws-sdk';

// // AWS SDK Configuration
// AWS.config.update({
//   accessKeyId: "AKIA6K37QIJA5RZT3JVX",
//   secretAccessKey:"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",
//   region: "us-east-1",
// });

// const bucketName = process.env.S3_BUCKET_NAME || "profilepic23"; 

// interface FileUploadProps {
//   onFileUpload: (fileUrl: string) => void;
// }

// const FileUploadWithS3: React.FC<FileUploadProps> = ({ onFileUpload }) => {
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);

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

//         // Upload the file to S3
//         const response = await s3.upload(params).promise();

//         // Get the URL of the uploaded file
//         const fileUrl = response.Location;

//         // onFileUpload(fileUrl);
//         setSelectedFile(null);
//       } catch (error) {
//         console.error("Error uploading file:", error);
//       }
//     }
//   };

//   return (
    // <div className="mt-2 p-4 border-2 border-gray-300 border-dashed">
    //   <p style={{ fontFamily: "monospace" }} className="text-gray-500">
    //     {selectedFile
    //       ? `Selected File: ${selectedFile.name}`
    //       : "Drag and drop files here or click to add text."}
    //   </p>
    //   <input
    //     type="file"
    //     accept=".jpg, .jpeg, .png, .pdf, .docx"
    //     onChange={handleFileChange}
    //   />
    //   <Button onClick={handleUpload}>Upload</Button>
    // </div>
//   );
// };


//   return (

    
//     <div className="mt-2 p-4 border-2 border-gray-300 border-dashed">
//       <p style={{ fontFamily: "monospace" }} className="text-gray-500">
//         {selectedFile
//           ? `Selected File: ${selectedFile.name}`
//           : "Drag and drop files here or click to add text."}
//       </p>
//       <input
//         type="file"
//         accept=".jpg, .jpeg, .png, .pdf, .docx"
//         onChange={handleFileChange}
//       />
//       <Button onClick={handleUpload}>Upload</Button>
//     </div>
//   );
// };

// export default FileUploadWithS3;

// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import {
//   SelectValue,
//   SelectTrigger,
//   SelectItem,
//   SelectContent,
//   Select,
// } from "@/components/ui/select";
// import Image from "next/image";

// interface FileUploadProps {
//   onFileUpload: (file: File) => void;
// }

// const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const files = event.target.files;
//     if (files && files.length > 0) {
//       setSelectedFile(files[0]);
//     }
//   };

//   const handleUpload = () => {
//     if (selectedFile) {
//       onFileUpload(selectedFile);
//       setSelectedFile(null);
//     }
//   };

//   return (
//     <div className="mt-2 p-4 border-2 border-gray-300 border-dashed">
//       <p style={{ fontFamily: "monospace" }} className="text-gray-500">
//         {selectedFile
//           ? `Selected File: ${selectedFile.name}`
//           : "Drag and drop files here or click to add text."}
//       </p>
//       <input
//         type="file"
//         accept=".jpg, .jpeg, .png, .pdf, .docx"
//         onChange={handleFileChange}
//       />
//       <Button onClick={handleUpload}>Upload</Button>
//     </div>
//   );
// };

// const Component: React.FC = () => {
//   const [uploadedFile, setUploadedFile] = useState<string | null>(null);

//   const onFileUpload = async (file: File) => {
//     try {
//       const formData = new FormData();
//       formData.append("file", file);

//       const response = await fetch("/api/upload", {
//         method: "POST",
//         body: formData,
//       });

//       if (response.ok) {
//         const data = await response.json();
//         // Assuming the response contains the URL of the uploaded file
//         if (data.url) {
//           setUploadedFile(data.url);
//         } else {
//           console.error("Invalid response from the server");
//         }
//       } else {
//         console.error("File upload failed with status:", response.status);
//       }
//     } catch (error) {
//       console.error("Error uploading file:", error);
//     }
//   };

//   return (
//     <div className="bg-gray-200 min-h-screen">
//       {/* ... rest of your code */}
//       <div className="w-full max-w-2xl p-6 bg-white border-2 border-gray-400">
//         <h2 style={{ fontFamily: "monospace" }} className="text-xl text-black font-semibold mb-4">
//           ANONYMOUS REPORT
//         </h2>
//         <FileUpload onFileUpload={onFileUpload} />
//         {/* ... other content */}
//       </div>
//     </div>
//   );
// };

// export default Component;

// import React, { useState, ChangeEvent } from 'react';

// interface FileUploadProps {
//   onFileUpload: (file: File) => void;
// }

// const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);

//   const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const files = event.target.files;
//     if (files && files.length > 0) {
//       setSelectedFile(files[0]);
//     }
//   };

//   const handleUpload = () => {
//     if (selectedFile) {
//       onFileUpload(selectedFile);
//       setSelectedFile(null);
//     }
//   };

//   return (
//     <div className="file-upload-container">
//       <p>{selectedFile ? `Selected File: ${selectedFile.name}` : "Upload a file"}</p>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Upload</button>
//     </div>
//   );
// };

// const CombinedComponent: React.FC = () => {
//   const [uploadedFile, setUploadedFile] = useState<string | null>(null);

//   const onFileUpload = async (file: File) => {
//     const formData = new FormData();
//     formData.append('file', file);

//     try {
//       const response = await fetch('/api/upload', {
//         method: 'POST',
//         body: formData,
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setUploadedFile(data.url);
//       } else {
//         console.error('Upload failed:', response.status);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="component-container">
//       <FileUpload onFileUpload={onFileUpload} />
//       {uploadedFile && <p>File uploaded: {uploadedFile}</p>}
//     </div>
//   );
// };

// export default CombinedComponent;

// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
// import Image from 'next/image';
// import React from "react";

// export default function Component() {
//   return (
//     <div className="bg-gray-200 min-h-screen">
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
//  />
// </div> 
//           <h1 style={{ fontSize: '35px', fontFamily:"monospace" }} className="text-white">PROTECTEDCAMPUS.COM</h1>
//         </div>
//       </header>
   
//       AWS.config.update({
//   accessKeyId: "AKIA6K37QIJA5RZT3JVX",
//   secretAccessKey:"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",
//   region: "us-east-1",
// });

// const bucketName = process.env.S3_BUCKET_NAME || "profilepic23"; 

// interface FileUploadProps {
//   onFileUpload: (fileUrl: string) => void;
// }

// const FileUploadWithS3: React.FC<FileUploadProps> = ({ onFileUpload }) => {
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);

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

//         // Upload the file to S3
//         const response = await s3.upload(params).promise();

//         // Get the URL of the uploaded file
//         const fileUrl = response.Location;

//         // onFileUpload(fileUrl);
//         setSelectedFile(null);
//       } catch (error) {
//         console.error("Error uploading file:", error);
//       }
//     }
//   };

//   return (
//     <div className="mt-2 p-4 border-2 border-gray-300 border-dashed">
//       <p style={{ fontFamily: "monospace" }} className="text-gray-500">
//         {selectedFile
//           ? `Selected File: ${selectedFile.name}`
//           : "Drag and drop files here or click to add text."}
//       </p>
//       <input
//         type="file"
//         accept=".jpg, .jpeg, .png, .pdf, .docx"
//         onChange={handleFileChange}
//       />
//       <Button onClick={handleUpload}>Upload</Button>
//     </div>
//   );
// };


//   return (

    
//     <div className="mt-2 p-4 border-2 border-gray-300 border-dashed">
//       <p style={{ fontFamily: "monospace" }} className="text-gray-500">
//         {selectedFile
//           ? `Selected File: ${selectedFile.name}`
//           : "Drag and drop files here or click to add text."}
//       </p>
//       <input
//         type="file"
//         accept=".jpg, .jpeg, .png, .pdf, .docx"
//         onChange={handleFileChange}
//       />
//       <Button onClick={handleUpload}>Upload</Button>
//     </div>
//   ); 
          
          
//              <Select>
//             <SelectTrigger style={{ backgroundColor: '#2774e0', fontFamily:"monospace"}} className= "text-white" id="university">
//               <SelectValue className="text-blue-500" placeholder="Select" />
    
//             </SelectTrigger>
//             <SelectContent style={{ backgroundColor: '#2774e0', fontFamily:"monospace"}} position="popper">
//               <SelectItem value="stevenson">
//                 Sexual Harrasement
//               </SelectItem>
//               <SelectItem value="other">Violence</SelectItem>
//               <SelectItem value="others">Cyber Threats</SelectItem>
//               <SelectItem value="othersa">Suspicious Activity</SelectItem>
//               <SelectItem value="othersas">Bullying</SelectItem> 
//             </SelectContent>
      
//           </Select>
//         </div>
   

//   )
// }
// <div className="mt-2 p-4 border-2 border-gray-300 border-dashed">
//       <p style={{ fontFamily: "monospace" }} className="text-gray-500">
//         {selectedFile
//           ? `Selected File: ${selectedFile.name}`
//           : "Drag and drop files here or click to add text."}
//       </p>
//       <input
//         type="file"
//         accept=".jpg, .jpeg, .png, .pdf, .docx"
//         onChange={handleFileChange}
//       />
//       <Button onClick={handleUpload}>Upload</Button>
//     </div>
//   );
// };





// AWS.config.update({
//   accessKeyId: "YOUR_AWS_ACCESS_KEY_ID",
//   secretAccessKey: "YOUR_AWS_SECRET_ACCESS_KEY",
//   region: "us-east-1",
// });

// const bucketName = "profilepic23"; // Your S3 bucket name

// interface FileUploadProps {
//   onFileUpload: (fileUrl: string) => void;
// }

// const FileUploadWithS3: React.FC<FileUploadProps> = ({ onFileUpload }) => {
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);

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

//         // Upload the file to S3
//         const response = await s3.upload(params).promise();

//         // Get the URL of the uploaded file
//         const fileUrl = response.Location;

//         onFileUpload(fileUrl);
//         setSelectedFile(null);
//       } catch (error) {
//         console.error("Error uploading file:", error);
//       }
//     }
//   };

//   return (
//     <div className="mt-2 p-4 border-2 border-gray-300 border-dashed">
//       <p style={{ fontFamily: "monospace" }} className="text-gray-500">
//         {selectedFile
//           ? `Selected File: ${selectedFile.name}`
//           : "Drag and drop files here or click to add text."}
//       </p>
//       <input
//         type="file"
//         accept=".jpg, .jpeg, .png, .pdf, .docx"
//         onChange={handleFileChange}
//       />
//       <Button onClick={handleUpload}>Upload</Button>
//     </div>
//   );
// };
// export default function Component() {