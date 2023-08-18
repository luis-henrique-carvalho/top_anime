import React from "react";

import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";

import { MdArrowDropDown } from "react-icons/md";

interface Props {
  buttonName: string;
  itens: string[];
}

export default function SelectButton({ itens, buttonName }: Props) {
  // const [selectedKeys, setSelectedKeys] = React.useState("");

  // const handleSelectionChange = (newSelection: any) => {
  //   setSelectedKeys(newSelection);
  // };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          endContent={<MdArrowDropDown />}
          className="capitalize min-w-[15%] bg-anime-dark text-white"
        >
          {buttonName}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection actions"
        disallowEmptySelection
        selectionMode="single"
        // selectedKeys={selectedKeys}
        // onSelectionChange={handleSelectionChange} // Use the modified callback
      >
        {itens.map((item) => (
          <DropdownItem key={item}>{item}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
