import React from 'react';
import styles from './app-side-nav.module.css'
import { AppNavList } from '@koinbx/utils/global.helper';
import RightArrowIcon from '../svg/right-arrow';

export const AppSideNav = () => {
    return (
        <div className={styles.side_nav_container}>

            <a href='/Login' className={styles.login_btn}>
                Login
            </a>
            <a href='/signup' className={styles.signup_btn}>
                Register
            </a>

            {
                AppNavList.map((list, index) => (

                    <div className={styles.list_container} key={index}>
                        <p>{list.name}</p>
                        <RightArrowIcon />
                    </div>

                ))
            }

            <div className={styles.list_container}>
                        <p>Trade Center</p>
                        <RightArrowIcon />
                    </div>
        </div>
    )
}
