"use client"
import Home from './home/page';
import { useEffect } from 'react';
export default function Page() {  


  useEffect(() => {
    var httpTokens = /^http:\/\/(.*)$/.exec(window.location.href);
    if (httpTokens) {
      window.location.replace('https://' + httpTokens[1]);
    }
  }, []); 

  return (
    
<Home/>
  );


  }
