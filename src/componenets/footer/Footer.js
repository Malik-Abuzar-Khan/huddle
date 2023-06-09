import React from 'react'
import styles from './Footer.module.scss'
import BackgroundCover from '../../assests/images/bg-footer-top-desktop.svg'
import LogoIcon from '../../assests/images/w.svg'


const Footer = () => {
  return (
    <div className={styles.main_container}>
        <img src={BackgroundCover} alt={`${BackgroundCover}`} className={styles.cover_img}/>
        <div className={styles.content_container}>
            <div className={styles.left_side}>
                <div className={styles.inside_left}>
                <img src={LogoIcon} alt='logo' className={styles.logo}/>
                <p>Think of the insightful conversations you miss feedback form.</p>
                </div>
            </div>
            <div>

            </div>
        </div>
    </div>
  )
}

export default Footer