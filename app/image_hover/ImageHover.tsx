import React from 'react';
import Image from 'next/image';
import styles from './ImageHover.module.css';

interface ImageHoverProps {
  src: string;
  alt: string;
  text: string;
}

const ImageHover: React.FC<ImageHoverProps> = ({ src, alt, text }) => {
  return (
    <div className={styles.imageContainer}>
      <Image src={src} alt={alt} fill className={styles.image} />
      <div className={styles.overlay}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ImageHover;
