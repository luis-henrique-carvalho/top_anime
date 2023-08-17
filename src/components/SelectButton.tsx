"use client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

export default function SelectButton() {
  const [selectedKeys, setSelectedKeys] = React.useState(["text"]);

  const handleSelectionChange = (newSelection: any) => {
    setSelectedKeys(newSelection);
    console.log(newSelection);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className="capitalize text-white">
          Ordenar por
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection actions"
        disallowEmptySelection
        selectionMode="multiple"
        selectedKeys={selectedKeys}
        onSelectionChange={handleSelectionChange} // Use the modified callback
      >
        <DropdownItem key="text">Text</DropdownItem>
        <DropdownItem key="number">Number</DropdownItem>
        <DropdownItem key="date">Date</DropdownItem>
        <DropdownItem key="single_date">Single Date</DropdownItem>
        <DropdownItem key="iteration">Iteration</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
