import Home from './home/page';
export default function Page() {  
  async function sendUrlToBackend(url: string): Promise<string> {
    try {
        const response = await fetch('/api/convert-to-https', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data.httpsUrl;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error; // Re-throw the error for further handling
    }
}


  return (
<Home/>
  );
 
}

  
