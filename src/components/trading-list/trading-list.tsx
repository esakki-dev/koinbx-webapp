import React, { useState } from 'react';
import styles from './trading-list.module.css';
import useFetchTrading from '@koinbx/hooks/useFetchTrading';
import { HostingTabsList } from '@koinbx/utils/global.helper';
import { HostTabListType } from '@koinbx/types/HostTabListType';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { TradingListType } from '@koinbx/types/TradingListType';
import Image from 'next/image';
import ChartPage from '../charts/chart';


export const TradingList = () => {
    const tradingData = useFetchTrading();
    const [hostList, setHostList] = useState<HostTabListType[]>(HostingTabsList); // HostingTabsList I made the constant value in Utils => Golbal Helper file
    const [currentListType, setCurrentListType] = useState<string>('host_coins'); // Trading List type also add in Interface and Hosting tabs Constant value

    // List tab change method
    const tabChange = (tradingList: HostTabListType, index: number) => {
        const updatedHostList: HostTabListType[] = hostList.map((res, i) => {
            return {
                ...res,
                isActive: i === index,
            }
        }
        ) || [];
        setCurrentListType(tradingList.type); // Set Current tab value for filter the trading list 
        setHostList(updatedHostList) // update the the tab for enable the active tab
    }

    // All Images get from KoinBx
    const getPairName = (tradeList: TradingListType) => {
        return (
            <div className={styles.pair_name_contianer}>
                <Image src={tradeList.image} className={styles.stock_img} height={40} width={40} alt='Stock Image'/>
                <p className={styles.pair_name}>{tradeList?.pair}</p>
            </div>
        )
    }

    const getLastPrice = (tradeList: TradingListType) => {
        return (
            <span className={styles.pair_name}>{tradeList.lastPrice}</span>
        )
    }

    const getTradeChnage = (tradeList: TradingListType) => {
        return (
            <span className={`${tradeList.change < 0 ? "text-[#f6465d]" : "text-[#2ebd85]"} ${styles.trade_change}`}>{tradeList.change}</span>
        )
    }

    // Chart Component render By Realtime database data
    const getPerDayChart = (tradeList: TradingListType) => {
        return (<ChartPage data={tradeList?.chartData} color={tradeList.change < 0 ? "#f6465d" : "#2ebd85"}/>)
    }

    // Refered By KoinBx Site
    const tradeAction = (tradeList: TradingListType) => {
        return (
            <a href={`/trade/${tradeList.pair}`} className={styles.trade_btn}>Trade</a>
        )
    }

    return (
        <div className={styles.trade_list_container}>
            <h2 className={styles.top_gainer_title}>Catch Your Next Trading Opportunity</h2>

            <div className={styles.trade_container}>
                <div className={styles.host_list_header}>
                    <div className={styles.list_types_tab}>
                        {
                            hostList.map((list: HostTabListType, index) => <span className={`${styles.tab_list} ${list.isActive && styles.active_tab}`} key={index} onClick={() => tabChange(list, index)}>{list.name}</span>)
                        }
                    </div>

                </div>

                    {/* DataTable UI render By Prime React UI framework */}
                    <DataTable value={tradingData.filter((list) => list.type == currentListType)}
                        scrollable scrollHeight="300px" 
                        tableStyle={{ minWidth: "200px" }}
                        className={styles.trading_list_table}
                        loading={!tradingData?.length}
                    >
                        <Column body={getPairName} header="Trading Pair" style={{ minWidth: "150px" }}></Column>
                        <Column body={getLastPrice} header="Last Price" style={{ minWidth: "100px" }}></Column>
                        <Column body={getTradeChnage} header="24 hrs Change" style={{ minWidth: "100px" }}></Column>
                        <Column body={getPerDayChart} header="Per/Day Chart" bodyClassName="show_column" headerClassName='show_column'></Column> 
                        <Column body={tradeAction} header="Trade" bodyClassName="show_column" headerClassName="show_column"></Column>
                    </DataTable>

            </div>
        </div>
    )
}
