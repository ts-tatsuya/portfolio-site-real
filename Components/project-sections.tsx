import { title } from 'process';
import React, { FC, useState } from 'react';
import { Collapse } from 'react-bootstrap';
// import Carousel from 'react-multi-carousel'
// import 'react-multi-carousel/lib/styles.css'
import styles from '../styles/ProjectSections.module.css'
import ItemCards from './item-cards';


interface Item{
  title: string,
  imgUrl: string
}

interface ProjectSectionsProps {

  title: string,
  items: Item[]

}
const defaultProps: ProjectSectionsProps = {
  title: 'Sample',
  items: [{
    title: 'Sample',
    imgUrl: 'http://placehold.jp/878787/ffffff/200x200.png?text=Sample'
  },
  {
    title: 'Sample',
    imgUrl: 'http://placehold.jp/878787/ffffff/200x200.png?text=Sample'
  },
  {
    title: 'Sample',
    imgUrl: 'http://placehold.jp/878787/ffffff/200x200.png?text=Sample'
  }]
}


const ProjectSections: FC<ProjectSectionsProps> = ({title, items}) => {

  const [worksIsExpanded, setWorksIsExpanded] = useState(false);

  const worksExpand = () =>{

    if(worksIsExpanded){
      setWorksIsExpanded(false);
    }else{
      setWorksIsExpanded(true);
    }

  }
  
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  

  return (
    <div className={styles.projects}>
      <h2 className='animate__animated animate__slideInLeft'>{title}</h2>
      <div className='animate__animated animate__slideInRight'>
        <div className={styles.works} style={worksIsExpanded? {maxHeight: 1000}: {maxHeight: 365}}>
          <button className={styles.worksToggle} onClick={() => worksExpand()}>{worksIsExpanded? "Show Less": "Show More"}</button>
          {items.map(item => (
            <ItemCards key="{item}" title={item.title} imgUrl={item.imgUrl}/>
          ))}
        </div>
      </div>
      
      

    </div>
  );
};

export default ProjectSections;