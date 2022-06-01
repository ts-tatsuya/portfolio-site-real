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
          <ItemCards title='test' imgUrl='http://placehold.jp/878787/ffffff/200x200.png?text=Sample'/>
          <ItemCards title='test' imgUrl='http://placehold.jp/878787/ffffff/200x200.png?text=Sample'/>
          <ItemCards title='test' imgUrl='http://placehold.jp/878787/ffffff/200x200.png?text=Sample'/>
        </div>
      </div>
      
      
    </div>
  );
};

export default HighlightsSection;