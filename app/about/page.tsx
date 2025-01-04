'use client';

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Resume = () => {
  return (
    <>
      <Head>
        <title>My Resume</title>
        <meta name="description" content="Professional resume of Zachary Saidman." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold">Zachary Saidman</h1>
          <br></br>
          <Link href='/'>
                <button
                    style={{
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: '2vh',
                    marginTop: '-5vh',
                    marginBottom: '1vh',
                    padding: '1vh 2vw',
                    fontSize: '1vw',
                    backgroundColor: '#0070f3',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    transition: 'transform 0.2s',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                >
                    Home
                </button>
            </Link>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>
          <div className="mb-6">
            <h3 className="text-l font-bold">Software Development Engineer</h3>
            <p className="text-gray-600">Amazon Lab126 - Sunnyvale, CA</p>
            <p className="text-gray-600">September 2021 - Present</p>
            <ul className="list-disc ml-5">
              <li>Develop and maintain operating systems and build systems for consumer robotics like Astro</li>
              <li>Design and create AWS cloud configuration test and deployment pipelines which are now used by teams across Amazon</li>
              <li>Complete chipset bringup for emerging devices</li>
            </ul>
            <br></br>
            <h3 className="text-l font-bold">Systems Engineer</h3>
            <p className="text-gray-600">Raytheon Technologies - Woburn, MA</p>
            <p className="text-gray-600">June 2019 - September 2021</p>
            <ul className="list-disc ml-5">
              <li>Writing software for optimized robust/resilient team formation.</li>
              <li>Develop and use in-house made simulator</li>
              <li>Live, Virtual, and Constructive (LVC) demos with hardware sending live data</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div className="mb-6">
            <h3 className="text-l font-bold">Bachelor Of Science in Mechanical Engineering Concentrated in Robotic Systems</h3>
            <p className="text-gray-600">Embry-Riddle Aeronautical University - Daytona Beach, FL</p>
            <p className="text-gray-600">August 2015 - May 2019</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <ul>
            <li>Email: <a href="mailto:zachary.saidman@gmail.com" className="text-blue-500">zachary.saidman@gmail.com</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/zachary-saidman-5357821a7/" target="_blank" className="text-blue-500">https://www.linkedin.com/in/zachary-saidman-5357821a7/</a></li>
            <li>GitHub: <a href="https://github.com/ZackSaidman" target="_blank" className="text-blue-500">https://github.com/ZackSaidman</a></li>
          </ul>
        </section>

        <footer className="text-center mt-8">
          <p className="text-gray-600">© {new Date().getFullYear()} Zachary Saidman. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
};

export default Resume;
