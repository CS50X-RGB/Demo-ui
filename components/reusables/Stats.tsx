import { HeaderStatsProps } from "@/types/HeaderProps";

export default function Stats({ name, value }: HeaderStatsProps) {
    return (
        <div className="flex flex-col text-center item-center justify-center w-full">
            <h1 className="text-sm">{name}</h1>
            <p className="text-text-value">{value}</p>
        </div>
    )
}