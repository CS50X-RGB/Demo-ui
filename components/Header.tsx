import { HeaderStatsProps } from "@/types/HeaderProps";
import Stats from "./reusables/Stats";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa6";
import { Avatar } from "@heroui/avatar";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {

    const stats: HeaderStatsProps[] = [
        {
            name: "SIGNORIA",
            value: "0.00"
        },
        {
            name: "NIFTY BANK",
            value: "52,323.30"
        },
        {
            name: "NIFTY FIN SERVICE",
            value: "25,2555.75"
        },
        {
            name: "RELCHEMQ",
            value: "162.72"
        }
    ];
    const [open, setOpen] = useState<boolean>(false);
    const navBar = [
        "MARKETWATCH",
        "EXCHANGE FILES",
        "PORTFOLIO",
        "FUNDS"
    ];
    const getValue = (value: string, index: number) => {
        switch (value) {
            case "PORTFOLIO":
            case "FUNDS":
                return (
                    <p key={index} className="flex items-center gap-2">
                        <span>{value}</span>
                        <FaAngleDown size={16} />
                    </p>
                );
            default:
                return <h1 className="flex items-center" key={index}>{value}</h1>;
        }
    };

    return (
        <>
            <div className="flex flex-col p-4 bg-schema-compo shadow-md rounded-md md:hidden w-full">
                <div className="flex flex-row items-center justify-between">
                    <Menu size={30} className="cursor-pointer" onClick={() => setOpen(!open)} />
                    <div className="flex flex-row gap-2 items-center">
                        <Image alt="icon" src={"/heading.svg"} height={5} width={5} className="size-12 rounded-full" />
                        <h1 className="text-xl font-bold">SIGNORIA</h1>
                    </div>
                    <Avatar size="lg" classNames={{
                        base: "text-2xl font-bold"
                    }} name="LK" />
                </div>
                <div className="flex flex-row items-center w-full overflow-x-auto border-1 border-y-black whitespace-nowrap gap-4 px-2">
                    {stats.map((stat: HeaderStatsProps, index: number) => (
                        <Stats key={index} name={stat.name} value={stat.value} />
                    ))}
                </div>

                {open && (
                    <div className="flex flex-col w-full absolute top-[13%] -left-2 font-semibold px-3 z-10 bg-schema-compo gap-4">
                        {navBar.map((bar: string, index: number) => {
                            return getValue(bar, index);
                        })}
                    </div>
                )}
            </div>
            <div className="hidden md:flex flex-row border-2 p-2 bg-schema-compo justify-between w-[100vw] shadow-sm border-b-sm">
                <div className="flex flex-row justify-start w-full">
                    <Image alt="icon" src={"/heading.svg"} height={5} width={5} className="size-12 rounded-full" />
                    <div className="flex flex-row items-center w-[30vw]">
                        {stats.map((stat: HeaderStatsProps, index: number) => {
                            return <Stats key={index} name={stat.name} value={stat.value} />
                        })}
                    </div>
                </div>
                <div className="flex flex-row gap-2 justify-end items-center gap-2 w-full">
                    <div className="flex flex-row gap-4">
                        {navBar.map((bar: string, index: number) => {
                            return getValue(bar, index);
                        })}
                    </div>
                    <Avatar size="lg" classNames={{
                        base: "text-2xl font-bold"
                    }} name="LK" />
                </div>
            </div>
        </>
    )
}