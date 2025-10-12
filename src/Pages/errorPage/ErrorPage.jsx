import React, { useEffect, useState } from 'react';
import errorimg from '../../../src/assets/error-404.png';
import Logo from '../../../src/assets/logo.png';

const ErrorPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="text-lg md:text-5xl font-bold text-fuchsia-600 text-center container mx-auto px-9 py-7">
        <p>Loading.....</p>
        <div className="text-center container mx-auto px-3 md:px-9">
          <img
            className="w-12 text-center animate-spin mt-6 mx-auto"
            src={Logo}
            alt="loading-logo"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="mt-10 flex items-center justify-center container mx-auto text-center px-9 w-full md:w-3xl lg:w-3xl">
      <img className="w-full md:w-80" src={errorimg} alt="Error 404" />
    </div>
  );
};

export default ErrorPage;
