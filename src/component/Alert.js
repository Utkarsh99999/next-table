import React, { useEffect } from 'react';
import styles from './alert.module.css';

const AlertBox = ({ isVisible, onClose }) => {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (isVisible) {
//         onClose(); 
//       }
//     }, 5000);
//     return () => clearTimeout(timer);
//   }, [isVisible, onClose]);

  const containerClasses = isVisible ? `${styles.alertContainer} ${styles.show}` : styles.alertContainer;

  return (
    <div className={containerClasses}>
      <div className={styles.alertHeader}>
        <h3>Row Affected</h3>
        <span className={styles.alertClose} onClick={onClose}>&times;</span>
      </div>
    </div>
  );
};

export default AlertBox;
