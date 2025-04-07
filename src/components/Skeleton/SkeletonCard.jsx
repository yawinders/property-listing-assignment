import React from 'react';
import styles from './SkeletonCard.module.css';

const SkeletonCard = () => {
    return (
        <div className={styles.skeletonCard}>
            <div className={styles.skeletonImg}></div>
            <div className={styles.skeletonText}></div>
        </div>
    );
};

export default SkeletonCard;
