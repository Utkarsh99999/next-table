import React from 'react';
import styles from '@/component/skeleton.module.css';

const WaveComponent = () => {
  return (
    <div className={styles.center}>
      {[...Array(10)].map((_, index) => (
        <div key={index} className={styles.wave}></div>
      ))}
    </div>
  );
};

export default WaveComponent;
