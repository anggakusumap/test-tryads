import { transactionList } from "@/constants";
import { useState } from "react";

const useTransactions = () => {
  const [transactions, setTransactions] = useState(transactionList);
  const [isNew, setIsNew] = useState(true);

  const orderByNewest = () => {
    const sortedTransactions = [...transactions].sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
    setTransactions(sortedTransactions);
    setIsNew(true);
  };

  const orderByLowest = () => {
    const sortedTransactions = [...transactions].sort((a, b) => {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    });
    setTransactions(sortedTransactions);
    setIsNew(false);
  };

  return {
    isNew,
    orderByNewest,
    orderByLowest,
    transactions,
  };
};

export default useTransactions;
