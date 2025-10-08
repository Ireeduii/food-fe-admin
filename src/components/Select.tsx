import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[300px]">
        <SelectValue placeholder="Apptizer" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="textx-black">
          {/* <SelectLabel>Fruits</SelectLabel> */}
          <SelectItem value="all dishes">All dishes </SelectItem>
          <SelectItem value="apptizer">Appetizer</SelectItem>
          <SelectItem value="salads">Salads</SelectItem>
          <SelectItem value="pizzas">Pizzas</SelectItem>
          <SelectItem value="lunch">Lunch favorites</SelectItem>
          <SelectItem value="main dishes">Main dishes</SelectItem>
          <SelectItem value="f2ish & Sea foods">Fish & Sea foods</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
