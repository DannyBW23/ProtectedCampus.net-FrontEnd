import Home from './home/page';
import { useEffect } from 'react';

const Page: React.FC = () => {
  useEffect(() => {
    if (window.location.protocol === 'http:') {
      // Construct the HTTPS URL
      const httpsURL = 'https://' + window.location.href.substring(window.location.protocol.length);
      window.location.replace(httpsURL);
    }
  }, []);

  return <Home />;
};

export default Page;
