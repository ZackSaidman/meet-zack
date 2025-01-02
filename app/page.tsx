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
        style={{ maxWidth: '3vw', height: 'auto', transition: 'transform 0.2s', cursor: 'pointer' }}
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
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2vh', textAlign: 'center', backgroundColor: '#f0f4f8', minHeight: '100vh', position: 'relative', boxSizing: 'border-box', margin: '0', overflow: 'hidden' }}>
      <header style={{ backgroundColor: '#0070f3', padding: '1vh', color: '#fff', borderRadius: '10px', marginBottom: '2vh' }}>
        <h1 style={{ fontSize: '2.5vw', margin: '0' }}>Zachary Saidman</h1>
        <p style={{ fontSize: '1.5vw', margin: '1vh 0 0' }}>Mechanical Engineer turned Software Developer</p>
      </header>
      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexGrow: 1 }}>
        <section style={{ marginBottom: '2vh' }}>
          <p style={{ fontSize: '1.5vw', color: '#333', marginBottom: '2vh' }}>Amazon Lab126 Astro and Beyond!</p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1vw',
              maxWidth: '90vw',
              margin: '0 auto',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {imageGrid.map((src, index) => (
              <div
                key={index}
                style={{
                  width: '100%',
                  paddingBottom: '100%',
                  position: 'relative',
                }}
              >
                <img
                  src={src}
                  alt={`Image ${index + 1}`}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer style={{ fontSize: '0.8vw', color: '#666', position: 'absolute', bottom: 0, width: '100%', display: 'flex', justifyContent: 'space-between', padding: '2vh', backgroundColor: '#f0f4f8', boxSizing: 'border-box' }}>
        <section style={{ textAlign: 'left' }}>
          <h2 style={{ fontSize: '1.5vw', color: '#0070f3', marginBottom: '1vh' }}>Articles</h2>
          <ul style={{ listStyleType: 'none', padding: '0', color: '#333' }}>
            {articles.map((article) => (
              <li key={article.title} style={{ marginBottom: '1vh' }}>
                <Link href={article.url} target="_blank" style={{ textDecoration: 'none', color: '#0070f3' }}>
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section style={{ textAlign: 'right' }}>
          <h2 style={{ fontSize: '1.5vw', color: '#0070f3', marginBottom: '1vh', marginRight: '3vh' }}>Connect with Me</h2>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1vw', marginRight: '3vh' }}>
            {socials.map((social) => (
              <SocialIcon key={social.name} url={social.url} image={social.image} alt={social.name} />
            ))}
          </div>
        </section>
      </footer>
      <p style={{ textAlign: 'center', marginTop: '2vh', color: '#666', position: 'absolute', bottom: '1vh', width: '100%' }}>© {new Date().getFullYear()} Zachary Saidman. All rights reserved.</p>
    </div>
  );
};

export default Home;
