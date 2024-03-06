import { shoppingListItem } from "@/constants";
import { useState } from "react";

const useItemBuy = () => {
  const [shoppingItem, setShoppingItem] = useState(shoppingListItem);
  const [showAddItem, setShowAddItem] = useState(false);
  const [newItem, setNewItem] = useState("");
  const activeItems = shoppingItem.filter((item) => item.active);

  const handleShowAddItem = () => {
    if (showAddItem) {
      setShowAddItem(false);
    } else {
      setShowAddItem(true);
    }
  };

  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      const newItemObject = {
        id: shoppingItem.length + 1,
        title: newItem,
        active: false,
      };

      setShoppingItem([...shoppingItem, newItemObject]);
      setNewItem("");
      setShowAddItem(false);
    }
  };

  const handleChange = (id: number) => {
    const updatedShoppingItem = shoppingItem.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          active: !item.active,
        };
      }
      return item;
    });

    setShoppingItem(updatedShoppingItem);
  };

  return {
    activeItems,
    handleShowAddItem,
    handleAddItem,
    handleChange,
    shoppingItem,
    showAddItem,
    newItem,
    setNewItem,
  };
};

export default useItemBuy;
