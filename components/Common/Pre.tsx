// "use client"
// import { useState, useEffect } from 'react';
// import Router from 'next/router';
// import dynamic from 'next/dynamic';

// const Loader = dynamic(() => import('./Loader'), { ssr: false }); // Dynamically import the Loader to ensure it's only rendered on the client side

// function MyApp() {
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const handleStart = () => setLoading(true);
//     const handleComplete = () => setLoading(false);

//     Router.events.on('routeChangeStart', handleStart);
//     Router.events.on('routeChangeComplete', handleComplete);
//     Router.events.on('routeChangeError', handleComplete);

//     return () => {
//       Router.events.off('routeChangeStart', handleStart);
//       Router.events.off('routeChangeComplete', handleComplete);
//       Router.events.off('routeChangeError', handleComplete);
//     };
//   }, []);

//   return (
//     <>
//       {loading && <Loader />}
//     </>
//   );
// }

// export default MyApp;
