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

type Article = {
  title: string;
  url: string;
};

const articles: Article[] = [
  { title: 'Connected Vehicle Challenge Winner', url: 'https://www.sae.org/attend/wcx/2019/experience/connected-vehicle-challenge' },
  { title: 'Details About the Connected Vehicle Challenge', url: 'https://news.erau.edu/headlines/device-to-save-cyclists-lives-wins-students-silver-medal-at-international-competition'},
  { title: 'NSF Autonomous Aerial Vehicles Competition Winner', url: 'https://news.erau.edu/headlines/daytona-beach-students-dominate-nsfs-autonomous-aerial-vehicles-competition' },
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
  const imageGrid = [
    '/astro.jpg',
    '/EcoCar-zack.jpg',
    '/iarc_flying.jpg',
    '/iarc.png',
    '/kalman-birds-eye.jpg',
    '/sim-pic.jpg',
    '/graymatter-side.jpg',
    '/graymatter-front.png',
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', textAlign: 'center', backgroundColor: '#f0f4f8', minHeight: '100vh', position: 'relative' }}>
      <header style={{ backgroundColor: '#0070f3', padding: '20px', color: '#fff', borderRadius: '10px', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '3em', margin: '0' }}>Zachary Saidman</h1>
        <p style={{ fontSize: '1.5em', margin: '10px 0 0' }}>Mechanical Engineer turned Software Developer</p>
      </header>
      <main>
        <section>
          <p style={{ fontSize: '1.5em', color: '#333', marginBottom: '20px' }}>Amazon Lab126 Astro and Beyond!</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', justifyContent: 'center' }}>
            {imageGrid.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Image ${index + 1}`}
                style={{
                  maxWidth: '50%',
                  height: 'auto',
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              />
            ))}
          </div>
        </section>
      </main>
      <footer style={{ marginTop: '50px', fontSize: '0.9em', color: '#666', position: 'relative', display: 'flex', justifyContent: 'space-between', padding: '0 20px' }}>
        <section style={{ textAlign: 'left' }}>
          <h2 style={{ fontSize: '1.5em', color: '#0070f3', marginBottom: '10px' }}>Articles</h2>
          <ul style={{ listStyleType: 'none', padding: '0', color: '#333' }}>
            {articles.map((article) => (
              <li key={article.title} style={{ marginBottom: '10px' }}>
                <Link href={article.url} target="_blank" style={{ textDecoration: 'none', color: '#0070f3' }}>
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section style={{ textAlign: 'right' }}>
          <h2 style={{ fontSize: '1.5em', color: '#0070f3', marginBottom: '10px' }}>Connect with Me</h2>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
            {socials.map((social) => (
              <SocialIcon key={social.name} url={social.url} image={social.image} alt={social.name} />
            ))}
          </div>
        </section>
      </footer>
      <p style={{ textAlign: 'center', marginTop: '20px', color: '#666' }}>© {new Date().getFullYear()} Zachary Saidman. All rights reserved.</p>
    </div>
  );
};

export default Home;
