import { useState } from "react";

const useLatestSpending = () => {
  const [isViewAll, setIsViewAll] = useState<boolean>(false);

  const handleButtonClick = () => {
    if (isViewAll) {
      setIsViewAll(false);
    } else {
      setIsViewAll(true);
    }
  };

  return {
    handleButtonClick,
    isViewAll,
  };
};

export default useLatestSpending;
