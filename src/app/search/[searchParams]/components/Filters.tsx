import React from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import SelectButton from "@/components/SelectButton";

interface Props {}

const Filters: React.FC<Props> = () => {
  return (
    <Card fullWidth className="px-2 w-full py-4 bg-anime-dark-200">
      <CardBody className="flex flex-row justify-between">
        <SelectButton
          buttonName="Order_by"
          items={["title", "type", "score", "rank"]}
        />
        <SelectButton
          buttonName="type"
          items={["title", "type", "score", "rank"]}
        />
        <SelectButton
          buttonName="status"
          items={["music", "ona", "ova", "movie", "tv"]}
        />
        <SelectButton
          buttonName="rating"
          items={["title", "type", "score", "rank"]}
        />
      </CardBody>
      <Divider />
      <CardFooter className="flex justify-center">
        <Button color="primary" variant="shadow" size="lg">
          Apply
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Filters;
