import { HostTabListType } from "@koinbx/types/HostTabListType";

export const AppNavList: { name: string, route: string }[] = [
    {
        name: "Markets",
        route: "/markets"
    },
    {
        name: "Fees",
        route: "/fees"
    },
    {
        name: "Trade",
        route: "/trade"
    },
    {
        name: "List your Crypto",
        route: "/list-crypto"
    },
    {
        name: "Earnings",
        route: "/earnings"
    }
];

export const HostingTabsList: HostTabListType[] = [
    {
        name: 'Host Coins',
        isActive: true,
        type: 'host_coins'
    },
    {
        name: 'New List',
        isActive: false,
        type: 'new_list'
    }
]