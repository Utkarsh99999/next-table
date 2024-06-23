import React from 'react';
import Skeleton from 'react-loading-skeleton';
import styles from '@/component/skeleton.module.css';

const SkeletonTable = () => {
  return (
    <div className={styles['skeleton-table']}>
      <div className={`${styles['skeleton-row']} ${styles.header}`}>
        <div className={styles['skeleton-cell']}>
          <Skeleton width={100} />
        </div>
        <div className={styles['skeleton-cell']}>
          <Skeleton width={150} />
        </div>
        <div className={styles['skeleton-cell']}>
          <Skeleton width={120} />
        </div>
        <div className={styles['skeleton-cell']}>
          <Skeleton width={80} />
        </div>
        <div className={styles['skeleton-cell']}>
          <Skeleton width={200} />
        </div>
      </div>
      {/* Skeleton rows */}
      {[...Array(10)].map((_, index) => (
        <div key={index} className={styles['skeleton-row']}>
          <div className={styles['skeleton-cell']}>
            <Skeleton height={20} />
          </div>
          <div className={styles['skeleton-cell']}>
            <Skeleton height={20} />
          </div>
          <div className={styles['skeleton-cell']}>
            <Skeleton height={20} />
          </div>
          <div className={styles['skeleton-cell']}>
            <Skeleton height={20} />
          </div>
          <div className={styles['skeleton-cell']}>
            <Skeleton height={20} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonTable;
