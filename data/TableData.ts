import { Order, Headers } from "@/types";

export const TableData: Headers[] = [
  {
    "id": 0,
    "time": "08:14:31",
    "client": "AAA001",
    "ticker": "RELIANCE",
    "side": "Buy",
    "product": "CNC",
    "qty": "50/100",
    "price": "250.50",
    "actions": ""
  },
  {
    "id": 1,
    "time": "08:14:31",
    "client": "AAA003",
    "ticker": "MRF",
    "side": "Buy",
    "product": "NRML",
    "qty": "10/20",
    "price": "2700.00",
    "actions": "Hello"
  },
  {
    "id": 2,
    "time": "08:14:31",
    "client": "AAA002",
    "ticker": "ASIANPAINT",
    "side": "Buy",
    "product": "NRML",
    "qty": "10/30",
    "price": "1500.60",
    "actions": ""
  },
  {
    "id": 3,
    "time": "08:14:31",
    "client": "AAA002",
    "ticker": "TATAINVEST",
    "side": "Sell",
    "product": "INTRADAY",
    "qty": "10/10",
    "price": "2300.10",
    "actions": ""
  }
]

export const Columns = [
  { key: "time", name: "Time" },
  { key: "client", name: "Client" },
  { key: "ticker", name: "Ticker" },
  { key: "side", name: "Side" },
  { key: "product", name: "Product" },
  { key: "qty", name: "Qty (Executed/Total)" },
  { key: "price", name: "Price" },
  { key: "actions", name: "Actions" }
];

