import React, { useState } from 'react';
import styles from './app-header.module.css'
import Image from 'next/image';
import AppMenuIcon from '../svg/app-menu';
import { AppNavList } from '@koinbx/utils/global.helper';
import { Sidebar } from 'primereact/sidebar';
import { AppSideNav } from '../app-side-nav/app-side-nav';

const AppHeader: React.FC = () => {

    const APP_BASE_URL = "https://koinbx.com/";
    const [openSideNav, setOpenSideNav] = useState<boolean>(false);

    return (
        <nav className="navbar">
            <div className={styles.header_container}>
                <a href={APP_BASE_URL} className={styles.app_logo}>
                    <Image src={'./koinbx-logo.svg'} height={100} width={135} alt={'Koinbx Logo'} />
                </a>

                <div className={styles.nav_left}>
                    {/* SVG Component created for Icon */}
                    <AppMenuIcon /> 
                    {/* All App Nav List configured in Global Helper file router also refered from KoinBx*/}
                    {
                        AppNavList.map((list, index) => (
                            <a href={list.route} key={index} className={`${styles.nav_list} hover_item`}>{list.name}</a>
                        ))
                    }
                </div>
                <div className={styles.nav_right}>
                    <a href='/trade-contest' className={styles.trade_contest}>
                        <div className={styles.speaker_effect}>
                            <Image src={'/speaker_img.png'} height={55} width={55} alt='Trade contest Image' />
                        </div>
                        <div className={styles.trade_content_container}>
                            <p className={styles.trade_content_badge}>Live+</p>
                            <p className={styles.trade_content_test}>Trade Contest</p>
                        </div>
                    </a>
                    <a href='/Login' className={styles.login_btn}>
                        Login
                    </a>
                    <a href='/signup' className={styles.signup_btn}>
                        Register
                    </a>
                    <span className={`${styles.burger_menu} pi pi-bars`} onClick={() => setOpenSideNav(true)}></span>

                    <Sidebar visible={openSideNav} position="right" onHide={() => setOpenSideNav(false)}>
                        <AppSideNav />
                    </Sidebar>
                </div>
            </div>
        </nav>
    )
}

export default AppHeader;
