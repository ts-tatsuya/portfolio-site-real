import React, { FC } from 'react';
import styles from '../styles/WelcomeSection.module.css'
import 'animate.css'

interface WelcomeSectionProps {

}

const WelcomeSection: FC<WelcomeSectionProps> = ({}) => {
  return (
    <div className={styles.title}>
      <label className={styles.switch}>
        <input type="checkbox"/>
        <span className={styles.slider}></span>
      </label>
      <h1 className='animate__animated animate__slideInLeft'>My</h1>
      <h1 className='animate__animated animate__slideInRight animate__delay-1s'>Personal Sites</h1>
    </div>
  );
};

export default WelcomeSection;