'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';

export default function DoctorsRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to homepage doctors section
    router.replace('/#doctors');
  }, [router]);

  // Show a loading message while redirecting
  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content="0; url=/#doctors" />
        <link rel="canonical" href="https://shivaseyecare.in/#doctors" />
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Redirecting to our doctors section...</p>
          <p className="mt-2 text-sm text-gray-500">
            If you are not redirected automatically, 
            <a href="/#doctors" className="text-blue-600 hover:underline ml-1">click here</a>
          </p>
        </div>
      </div>
    </>
  );
}