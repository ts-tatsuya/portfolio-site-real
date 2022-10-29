import React, { FC } from 'react';
import styles from '../styles/ItemCards.module.css'
import Image from 'next/image'

interface ItemCardsProps {

    title: string,
    imgUrl: string,
    destUrl: string

}

const ItemCards: FC<ItemCardsProps> = ({title, imgUrl, destUrl}) => {
  return (
    <button className={styles.card}>
      <a href={destUrl} target='_blank'>
      {imgUrl.match(/https:|http:/) ? 
       <img src={imgUrl} width='200px' height='200px'></img> : <Image src={imgUrl} width='200px' height='200px'></Image>}
      {/* <img src={imgUrl}></img> */}
      <h4>{title}</h4>
     </a>
    </button>
  );
};

export default ItemCards;