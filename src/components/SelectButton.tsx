"use client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import { MdArrowDropDown } from "react-icons/md";
import { useSearchState } from "@/hooks/useSearchState";

interface Props {
  buttonName: string;
  items: string[];
}

export default function SelectButton({ items, buttonName }: Props) {
  const { updateOrderBy, orderBy } = useSearchState();

  console.log(orderBy);

  const handleSelectionChange = (newSelection: any) => {
    updateOrderBy(newSelection);
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
        onAction={handleSelectionChange} // Use the modified callback
      >
        {items.map((item) => (
          <DropdownItem key={item}>{item}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
