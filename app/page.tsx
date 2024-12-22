import React from 'react';
import Link from 'next/link';

const socials = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/zachary-saidman-5357821a7/', image: '/LinkedIn_logo_initials.png' },
  { name: 'GitHub', url: 'https://github.com/ZackSaidman', image: '/Octicons-mark-github.svg.png' },
];

const Home = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3em', margin: '20px 0' }}>Zachary Saidman</h1>
      <p style={{ fontSize: '1.5em', color: '#555' }}>Mechanical Engineer turned Software Developer</p>
      <p style={{ fontSize: '1.5em', color: '#555' }}>Amazon Lab126 Astro and Beyond!</p>
      <img src="/astro.jpg" alt="Astro" style={{ marginTop: '20px', maxWidth: '25%', height: 'auto', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
      <div style={{ marginTop: '50px' }}>
        {socials.map((social) => (
          <div key={social.name} style={{ margin: '10px 0' }}>
            <Link href={social.url} target="_blank">
              <img src={social.image} alt={social.name} style={{ maxWidth: '50px', height: 'auto' }} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
