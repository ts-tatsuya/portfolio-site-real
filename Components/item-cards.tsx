import React, { FC } from 'react';
import styles from '../styles/ItemCards.module.css'

interface ItemCardsProps {

    title: string,
    imgUrl: string

}

const ItemCards: FC<ItemCardsProps> = ({title, imgUrl}) => {
  return (
    <button className={styles.card}>
      <img src={imgUrl}></img>
      <h4>{title}</h4>
    </button>
  );
};

export default ItemCards;