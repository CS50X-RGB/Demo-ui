'use client';

import CustomTable from "@/components/CustomTable";
import Header from "@/components/Header";
import { Button } from "@heroui/button";
import { IoMdDownload } from "react-icons/io";

export default function Home() {
  return (
    <div className="flex flex-col w-screen gap-5">
      <Header />
      <div className="flex flex-row justify-between p-8">
        <h1 className="font-semibold text-2xl">Open Orders</h1>
        <Button size="lg" className="font-semibold flex flex-row-reverse gap-2 items-center">
          <span className="text-lg">Download</span>
          <IoMdDownload size={20} />
        </Button>
      </div>
      <div className="p-4">
        <CustomTable />
      </div>
    </div>
  );
}
