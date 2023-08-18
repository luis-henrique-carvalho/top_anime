
import React from "react";
import { Spinner } from "@nextui-org/spinner";

export default function App() {
  return (
    <Spinner
      label="Loading..."
      color="primary"
      size="lg"
      className="absolute top-1/2 left-1/2"
    />
  );
}