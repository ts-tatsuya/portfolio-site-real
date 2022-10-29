import React, { FC } from 'react';
import styles from '../styles/HighlightsSection.module.css'
import ItemCards from './item-cards';

interface HighlightsSectionProps {

}

const HighlightsSection: FC<HighlightsSectionProps> = ({}) => {
  return (
    <div className={styles.highlights}>
      <h2 className='animate__animated animate__slideInLeft'>Highlights</h2>
      <div className='animate__animated animate__slideInRight'>
        <div className={styles.works}>
          <ItemCards 
            title='A Certain Girl Transported Into Another World' 
            imgUrl='https://i.postimg.cc/xCQccKtx/image.png' 
            destUrl='https://drive.google.com/file/d/1UCukEjWN1xIjJLRb37C9tO_LHkqYd7Ds/view?usp=share_link'
          />
          <ItemCards 
            title='Portfolio Website' 
            imgUrl='https://i.postimg.cc/9QV94H0t/image.png' 
            destUrl='https://amadeus-ariadi-portfolio-site-app.vercel.app/'
          />
          <ItemCards 
            title='Public Photo App' 
            imgUrl='https://i.postimg.cc/FR2kTq4T/image.png' 
            destUrl='https://github.com/ts-tatsuya/public-photo-app'
          />
        </div>
      </div>
      
      
    </div>
  );
};

export default HighlightsSection;