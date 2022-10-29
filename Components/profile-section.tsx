import React, { FC } from 'react';
import styles from '../styles/ProfileSection.module.css'

interface ProfileSectionProps {

}

const ProfileSection: FC<ProfileSectionProps> = ({}) => {
  return (
    <div className={styles.profile}>
      <h2 className='animate__animated animate__slideInLeft'>Profile</h2>
      <div className='animate__animated animate__slideInRight animate__delay-1s'>
        <div className={styles.desc}>
          <img src='http://placehold.jp/878787/ffffff/300x400.png?text=Classified'></img>  
          <p>
            A Graduate who is detail-oriented and
            willing to learn. Have developed
            several web applications.
            Experienced in using Visual Studio
            Code as an IDE. Experienced in using
            C#, HTML, CSS, and Javascript as
            programming languages. Familiar with
            ReactJS and Next.js. Also experienced
            in using Unity Engine for making video
            games.
          </p>
        </div>
      </div>
      
      
    </div>
  );
};

export default ProfileSection;