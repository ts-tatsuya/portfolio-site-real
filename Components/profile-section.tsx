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
          <img src='http://placehold.jp/878787/ffffff/300x400.png?text=Profile'></img>
          <p>Lorem ipsum dolor sit amet, vix tota justo scaevola ad, mel et putent phaedrum imperdiet. No nam option voluptatum, malorum voluptua theophrastus et usu, ex ludus semper facilisi vel. Ex quo soluta albucius. Cu consul feugiat imperdiet qui, accusam vivendum sadipscing ne mel. Te detracto sadipscing reprehendunt has. No mea soluta ignota malorum, solet graecis eos te, ubique tibique insolens mei ea. Quo ut natum nominavi. No feugiat commune scriptorem vel. Semper animal id sit, mea ei quidam nostrud, id volumus eloquentiam sed. Ad diceret dolores moderatius duo.</p>
        </div>
      </div>
      
      
    </div>
  );
};

export default ProfileSection;