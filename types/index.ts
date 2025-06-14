import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};


export interface Order {
  id : number;
  time: string;
  client: string;
  ticker: string;
  side: "Buy" | "Sell";
  product: string;
  qty: string; 
  price: string;  
}


export interface Headers extends Order{
  actions : string
}