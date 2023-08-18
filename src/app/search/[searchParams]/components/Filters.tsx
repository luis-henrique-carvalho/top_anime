"use client";
import SelectButton from "@/components/SelectButton";
import { Card, CardBody, CardFooter, Button, Divider } from "@nextui-org/react";


interface Props {
  // Passa o tipo de inputConfig
}

const Filters = ({}:Props) => {
  return (
    <Card fullWidth className="px-2 w-full py-4 bg-anime-dark-200">
      <CardBody className="flex flex-row justify-between">
        <SelectButton
          buttonName="Order_by"
          itens={["title", "type", "score", "rank"]}
        />
        <SelectButton
          buttonName="type"
          itens={["title", "type", "score", "rank"]}
        />
        <SelectButton
          buttonName="status"
          itens={["music", "ona", "ova", "movie", "tv"]}
        />
        <SelectButton
          buttonName="rating"
          itens={["title", "type", "score", "rank"]}
        />
      </CardBody>
      <Divider />
      <CardFooter className="flex justify-center">
        <Button color="primary" variant="shadow" size="lg">
          Aply
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Filters;
