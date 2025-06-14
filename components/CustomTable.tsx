import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableColumn,
} from "@heroui/table";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Input } from "@heroui/input";
import { TableData, Columns } from "@/data/TableData";
import React from "react";
import { Chip } from "@heroui/chip";
import { Order, Headers } from "@/types";
import { Button } from "@heroui/button";
import { ArrowUpDown, Funnel, Ellipsis, UserRoundPlus, Search, Ban, Radio } from 'lucide-react';

export default function CustomTable() {
  const renderCell = (item: any, columnKey: any): React.ReactNode => {
    switch (columnKey) {
      case "ticker":
        if (["RELIANCE", "ASIANPAINT"].includes(item[columnKey])) {
          return (
            <div className="flex flex-row items-center gap-2">
              <span>{item[columnKey]}</span>
              <Radio style={{ fill: "#3b82fa" }}  />
            </div>
          );
        } else {
          return <p>{item[columnKey]}</p>;
        }

      case "actions":
        return <Ellipsis className="cursor-pointer" />;

      default:
        return <p>{item[columnKey]}</p>;
    }
  };

  const renderHeader = (item: any, headerKey: keyof Headers): React.ReactNode => {
    switch (headerKey) {
      case "time":
        return (
          <span className="flex gap-2 items-center w-full">
            <h1>Time</h1>
            <ArrowUpDown size={15} />
            <Funnel size={15} />
          </span>
        );
      case "client":
        return (
          <span className="flex gap-2 items-center w-full">
            <h1>Client</h1>
            <ArrowUpDown size={15} />
          </span>
        );
      case "price":
        return (
          <span className="flex gap-2 items-center w-full">
            <h1>Price</h1>
            <ArrowUpDown size={15} />
          </span>
        );
      case "product":
        return (
          <span className="flex gap-2 items-center w-full">
            <h1>Product</h1>
            <ArrowUpDown size={15} />
            <Funnel size={15} />
          </span>
        );
      case "qty":
        return (
          <span className="flex gap-2 items-center w-full">
            <h1>Product</h1>
            <ArrowUpDown size={15} />
          </span>
        );
      case "ticker":
        return <h1>Ticker</h1>;
      case "side":
        return (
          <span className="flex gap-2 items-center w-full">
            <h1>Side</h1>
            <ArrowUpDown size={15} />
          </span>
        );
      case "actions":
        return <h1>Action</h1>;

      default:
        return <p>{item[headerKey]}</p>;
    }
  }
  return (
    <Card className="w-full">
      <CardBody className="flex flex-col gap-2">
        <div className="flex flex-col md:flex-row justify-between md:items-center px-6">
          <div className="flex flex-col md:flex-row items-center w-full px-5 py-2 gap-4 md:gap-0">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <Input className="w-7/8 md:w-1/8" value={"AAA002"} endContent={<UserRoundPlus className="bg-schema-compo rounded-md" size={30} />} />
              <Chip variant="flat" onClose={() => console.log("Pressed")}>Lalit</Chip>
            </div>
            <div className="flex flex-col md:flex-row w-full iitems-start md:items-center gap-4">
              <Input className="w-full md:w-1/4" placeholder="Search for stock,future,options or index" startContent={
                <Search />
              } />
              <div className="flex flex-wrap gap-2">
                <Chip variant="flat" onClose={() => console.log("Event")}>RELIANCE</Chip>
                <Chip variant="flat" onClose={() => console.log("Event Presed")}>ASIANPAINT</Chip>
              </div>
            </div>
          </div>
          <Button color="danger" size="lg" className="flex flex-row gap-2 items-center">
            <Ban size={25} />
            <span>Cancel all</span>
          </Button>
        </div>
        <Table removeWrapper bottomContent={
          <div className="flex w-full justify-end">
            <div className="flex flex-row items-center gap-4">
              <Button className="bg-schema-compo border border-schema-base rounded-md">
                Previous
              </Button>
              <h1>
                Page 1
              </h1>
              <Button className="bg-schema-compo border border-schema-base rounded-md">
                Next
              </Button>
            </div>
          </div>
        } className="p-8">
          <TableHeader columns={Columns}>
            {(column) => (
              <TableColumn className="text-black font-bold" key={column.key}>
                {renderHeader(column, column.key)}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={TableData}>
            {(item) => (
              <TableRow>
                {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  );
}
