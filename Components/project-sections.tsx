import { title } from 'process';
import React, { FC, useState } from 'react';
import { Collapse } from 'react-bootstrap';
// import Carousel from 'react-multi-carousel'
// import 'react-multi-carousel/lib/styles.css'
import styles from '../styles/ProjectSections.module.css'
import ItemCards from './item-cards';


interface Item{
  title: string,
  imgUrl: string,
  destUrl: string
}

interface ProjectSectionsProps {

  title: string,
  items: Item[],
  bgColor?: string

}
const defaultProps: ProjectSectionsProps = {
  title: 'Sample',
  items: [{
    title: 'Sample',
    imgUrl: 'http://placehold.jp/878787/ffffff/200x200.png?text=Sample',
    destUrl: 'http://placehold.jp/878787/ffffff/200x200.png?text=Sample'
  },
  {
    title: 'Sample',
    imgUrl: 'http://placehold.jp/878787/ffffff/200x200.png?text=Sample',
    destUrl: 'http://placehold.jp/878787/ffffff/200x200.png?text=Sample'
  },
  {
    title: 'Sample',
    imgUrl: 'http://placehold.jp/878787/ffffff/200x200.png?text=Sample',
    destUrl: 'http://placehold.jp/878787/ffffff/200x200.png?text=Sample'
  }]
}


const ProjectSections: FC<ProjectSectionsProps> = ({title, items, bgColor}) => {

  const [worksIsExpanded, setWorksIsExpanded] = useState(false);

  const worksExpand = () =>{

    if(worksIsExpanded){
      setWorksIsExpanded(false);
    }else{
      setWorksIsExpanded(true);
    }

  }
  
  const customStyle = {
    backgroundColor: bgColor
  };
  

  return (
    <div className={styles.projects} style={bgColor ? customStyle : {}}>
      <h2 className='animate__animated animate__slideInLeft'>{title}</h2>
      <div className='animate__animated animate__slideInRight'>
        <div className={styles.works} style={worksIsExpanded? {maxHeight: 1000}: {maxHeight: 365}}>
          {(items.length > 3) ?
            <button className={styles.worksToggle} onClick={() => worksExpand()}>
              {worksIsExpanded? "Show Less": "Show More"}
            </button> : 
            <div></div>
          }
          
          {items.map(item => (
            <ItemCards key='{item}' title={item.title} imgUrl={item.imgUrl} destUrl={item.destUrl}/>
          ))}
        </div>
      </div>
      
      

    </div>
  );
};

export default ProjectSections;