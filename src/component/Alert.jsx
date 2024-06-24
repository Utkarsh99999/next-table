import React, { useEffect } from 'react';
import styles from './alert.module.css';

const AlertBox = ({ isVisible, setSaved }) => {
  return (
    <>
      {isVisible && <div className={styles.alertContainer}>
        <h3>Row Affected</h3>
        <img style={{ cursor: 'pointer' }} onClick={() => { setSaved(false) }} src="/cancel.png" alt="cancel" height={20} width={20} />
      </div>}
    </>
  );
};

export default AlertBox;
