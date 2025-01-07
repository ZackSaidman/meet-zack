import React from 'react';
import Image from 'next/image';
import styles from './ImageHover.module.css';

interface ImageHoverProps {
  src: string;
  alt: string;
  text: string;
  subtext?: string;
}

const ImageHover: React.FC<ImageHoverProps> = ({ src, alt, text, subtext }) => {
  return (
    <div className={styles.imageContainer}>
      <Image src={src} alt={alt} fill className={styles.image} />
      <div className={styles.overlay}>
        <h1 style={{fontSize: '20px', marginBottom: '20px', marginLeft: '10px', marginRight: '10px'}}>{text}</h1>
        <p style={{fontSize: '1.5vh', marginLeft: '10px', marginRight: '10px'}}>{subtext}</p>
      </div>
    </div>
  );
};

export default ImageHover;
