"use client";

import React from 'react';
import Link from 'next/link';

type Social = {
  name: string;
  url: string;
  image: string;
};

const socials: Social[] = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/zachary-saidman-5357821a7/', image: '/LinkedIn_logo_initials.png' },
  { name: 'GitHub', url: 'https://github.com/ZackSaidman', image: '/Octicons-mark-github.svg.png' },
];

type SocialIconProps = {
  url: string;
  image: string;
  alt: string;
};

const SocialIcon: React.FC<SocialIconProps> = ({ url, image, alt }) => {
  return (
    <Link href={url} target="_blank">
      <img
        src={image}
        alt={alt}
        style={{ maxWidth: '50px', height: '50px', transition: 'transform 0.2s', cursor: 'pointer' }}
        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      />
    </Link>
  );
};

const Home: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', textAlign: 'center', backgroundColor: '#f0f4f8', minHeight: '100vh' }}>
      <header style={{ backgroundColor: '#0070f3', padding: '20px', color: '#fff', borderRadius: '10px', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '3em', margin: '0' }}>Zachary Saidman</h1>
        <p style={{ fontSize: '1.5em', margin: '10px 0 0' }}>Mechanical Engineer turned Software Developer</p>
      </header>
      <main>
        <section>
          <p style={{ fontSize: '1.5em', color: '#333', marginBottom: '20px' }}>Amazon Lab126 Astro and Beyond!</p>
          <img src="/astro.jpg" alt="Astro" style={{ maxWidth: '25%', height: 'auto', display: 'block', margin: '0 auto', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} />
        </section>
        <section style={{ marginTop: '50px' }}>
          <h2 style={{ fontSize: '2em', color: '#0070f3', marginBottom: '20px' }}>Connect with Me</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            {socials.map((social) => (
              <SocialIcon key={social.name} url={social.url} image={social.image} alt={social.name} />
            ))}
          </div>
        </section>
      </main>
      <footer style={{ marginTop: '50px', fontSize: '0.9em', color: '#666' }}>
        <p>© {new Date().getFullYear()} Zachary Saidman. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
