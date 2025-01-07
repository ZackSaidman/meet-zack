"use client";

import React from 'react';
import Link from 'next/link';
import { ImageGrid } from '../src/image_hover/ImageHoverGrid';
import PortfolioHeader from '../src/portfolio_header/PortfolioHeader';

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


  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '1vh', textAlign: 'center', backgroundColor: '#f0f4f8', minHeight: '100vh', position: 'relative', boxSizing: 'border-box', margin: '0', overflow: 'hidden' }}>
      <PortfolioHeader
        title='Zachary Saidman'
        mainText='Zachary Saidman'
        subText='Mechanical Engineer turned Software Developer'
      />
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
      <footer style={{ fontSize: '0.8vw', color: '#666', position: 'relative', marginTop: '10vh', bottom: 0, width: '100%', display: 'flex', justifyContent: 'space-between', padding: '2vh', backgroundColor: '#f0f4f8', boxSizing: 'border-box' }}>
        <section style={{ textAlign: 'left', marginLeft: '10vh' }}>
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
      <p className="text-gray-600">© {new Date().getFullYear()} Zachary Saidman. All rights reserved.</p>
    </div>
  );
};

export default Home;
