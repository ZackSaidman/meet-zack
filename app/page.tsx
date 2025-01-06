"use client";

import React from 'react';
import Link from 'next/link';
import { ImageGrid } from '../src/image_hover/ImageHoverGrid';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();

  const handleRoute = (route: string) => {
    router.push(route);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '1vh', textAlign: 'center', backgroundColor: '#f0f4f8', minHeight: '100vh', position: 'relative', boxSizing: 'border-box', margin: '0', overflow: 'hidden' }}>
      <title>Zachary Saidman</title>
      <header style={{ backgroundColor: '#0070f3', padding: '1vh', color: '#fff', borderRadius: '10px', marginBottom: '2vh' }}>
        <h1 style={{ fontSize: '2.5vw', margin: '0' }}>Zachary Saidman</h1>
        <p style={{ fontSize: '1vw', margin: '0vh 0 0' }}>Mechanical Engineer turned Software Developer</p>
        <button
          style={{
            display: 'block',
            marginLeft: 'auto',
            marginRight: '2vh',
            marginTop: '-5vh',
            marginBottom: '1vh',
            padding: '1vh 2vw',
            fontSize: '1vw',
            backgroundColor: '#fff',
            color: '#0070f3',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'transform 0.2s',
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          onClick={() => handleRoute('/about')}
        >
          About Me
        </button>
      </header>
      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexGrow: 1 }}>
        <section style={{ marginBottom: '2vh' }}>
          <p style={{ fontSize: '1.5vw', color: '#333', marginBottom: '1vh' }}>Professional Typer and Robotics Enthusiast</p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
              gap: '0.5vw',
              maxWidth: '90vw',
              margin: '0 auto',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {ImageGrid.map((src, index) => (
              <div
                key={index}
                style={{
                  width: '100%',
                  paddingBottom: '100%',
                  position: 'relative',
                }}
              >
                {src}
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer style={{ fontSize: '0.8vw', color: '#666', position: 'absolute', bottom: 0, width: '100%', display: 'flex', justifyContent: 'space-between', padding: '2vh', backgroundColor: '#f0f4f8', boxSizing: 'border-box' }}>
        <section style={{ textAlign: 'left' }}>
          <h2 style={{ fontSize: '1.5vw', color: '#333', marginBottom: '1vh' }}>Articles Mentioning My Passion Projects</h2>
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
          <h2 style={{ fontSize: '1.5vw', color: '#333', marginBottom: '1vh', marginRight: '3vh' }}>Let&apos;s Connect</h2>
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
