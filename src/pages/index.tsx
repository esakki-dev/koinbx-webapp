import Head from "next/head";
import { IBM_Plex_Sans } from "next/font/google";
import styles from "@koinbx/styles/Home.module.css";
import AppHeader from "@koinbx/components/app-header/app-header";
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';
import { TradingList } from "@koinbx/components/trading-list/trading-list";


const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Customize weights as needed
  variable: '--font-ibm-plex-sans',
  display: 'swap',
})

export default function Home() {
  return (
    <>
      <PrimeReactProvider>
        <Head>
          {/* Title Refered from KoinBx Site and Favicon also*/}
          <title>Buy, Sell & Trade Cryptocurrency on Trusted Global Exchange | KoinBX</title>
          <link rel="icon" href="/favicon.png" />
          <meta name="description" content="KoinBX India’s trusted cryptocurrency exchange & trading platform. Buy, sell & trade BTC, ETH, USDT and INR cryptocurrencies at best prices. Start trading now." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        {/* App Structure */}
        <div className={`${ibmPlexSans.variable} ${styles.app_container}`}>
 
          {/* App Header  */}
          <header>
            <AppHeader />
          </header>
          
          {/* App Body Container */}
          <main className={styles.body_container}>
            <TradingList />
          </main>

        </div>
      </PrimeReactProvider>
    </>
  );
}
