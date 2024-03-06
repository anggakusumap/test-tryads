import Avatar from "@/public/img/man.png";
import Woman from "@/public/img/woman.png";
import Visa from "@/public/img/visa.png";
import Money from "@/public/img/money.png";
import Chart from "@/public/img/chart.png";
import Card from "@/public/img/card.png";
import Crown from "@/public/img/crown.png";
import Coin from "@/public/img/coin.png";

export const latestSpendingData = [
  {
    img: Coin,
    title: "Online store",
    createdAt: "May 30, 2023 at 08.00 pm",
  },
  {
    img: Coin,
    title: "Pay the hospital",
    createdAt: "May 28, 2023 at 10.00 pm",
  },
  {
    img: Coin,
    title: "Tickets",
    createdAt: "May 10, 2023 at 12.00 pm",
  },
  {
    img: Coin,
    title: "Bioskop",
    createdAt: "May 9, 2023 at 12.00 pm",
  },
  {
    img: Coin,
    title: "Concert",
    createdAt: "May 8, 2023 at 12.00 pm",
  },
];

export const shoppingListItem = [
  {
    id: 1,
    title: "Macbook",
    active: true,
  },
  {
    id: 2,
    title: "Bicycle",
    active: false,
  },
  {
    id: 3,
    title: "Motorcycle",
    active: false,
  },
  {
    id: 4,
    title: "Iphone 14 pro max",
    active: true,
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

export { Avatar, Visa, Money, Chart, Card, Crown };
