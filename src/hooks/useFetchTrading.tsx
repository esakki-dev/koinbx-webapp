import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "@koinbx/lib/firebase";
import { TradingListType } from "@koinbx/types/TradingListType";

export default function useFrtchTrading(): TradingListType[] {
  const [data, setData] = useState<TradingListType[] | null>(null);

  useEffect(() => {
    const dataRef = ref(database, "tradingPairs"); // tradingPairs is Realtime Database endpoint

    // Get Trading list using onValue in FireBase Method
    const unsubscribe = onValue(dataRef, (snapshot) => {
      const value = snapshot.val();
      setData(value.tradingList.data);
    });

    return () => unsubscribe();  // Once Component Destroy it will unsubscribe
  }, []);

  return data as TradingListType[] || [];
}
