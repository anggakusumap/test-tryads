import Avatar from "@/public/img/man.png";
import Woman from "@/public/img/woman.png";
import Visa from "@/public/img/visa.png";

export const latestSpendingData = [
  {
    img: Avatar,
    title: "Online store",
    createdAt: "May 30, 2023 at 08.00 pm",
  },
  {
    img: Avatar,
    title: "Pay the hospital",
    createdAt: "May 28, 2023 at 10.00 pm",
  },
  {
    img: Avatar,
    title: "Tickets",
    createdAt: "May 10, 2023 at 12.00 pm",
  },
];

export const shoppingListItem = [
  {
    id: 1,
    title: "Macbook",
  },
  {
    id: 2,
    title: "Bicycle",
  },
  {
    id: 3,
    title: "Motorcycle",
  },
  {
    id: 4,
    title: "Iphone 14 pro max",
  },
];

export const messageList = [
  {
    id: 1,
    message: "Are you ready?",
    img: Avatar,
    type: "sender",
  },
  {
    id: 2,
    message: "I have prepared everything",
    img: Woman,
    type: "receiver",
  },
];

export const transactionList = [
  {
    id: 1,
    img: Avatar,
    name: "Bessie Cooper",
    createdAt: "02, July 2023",
    transaction: "-$3,000",
  },
  {
    id: 2,
    img: Avatar,
    name: "Guy Hawkins",
    createdAt: "01, July 2023",
    transaction: "-$1,970",
  },
  {
    id: 3,
    img: Avatar,
    name: "Floyd Miles",
    createdAt: "01, July 2023",
    transaction: "-$5,000",
  },
];

export { Avatar, Visa };
