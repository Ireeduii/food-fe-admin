"use client";

import { Badge, X } from "lucide-react";
import { ChangeEvent, useState } from "react";
import { CategoryType } from "./CreateFoodDialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
export const Categories = ({
  categories,
  getCategories,
}: {
  categories: CategoryType[];
  getCategories: () => Promise<void>;
}) => {
  const [newCategory, setNewCategory] = useState<string | undefined>();
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const newCategoryNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewCategory(e.target.value);
  };

  const createCategoryHandler = async () => {
    await fetch("http://localhost:4000/api/categories", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        newCategory,
      }),
    });
    setModalOpen(false);
    await getCategories();
  };

  const deleteCategoryHandler = async (category: string) => {
    await fetch("http://localhost:4000/api/categories/delete", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    });
  };

  return (
    <div className="flex gap-2">
      {categories.map((category) => (
        <div
          className="flex items-center border-2 rounded-full p-2 py-0"
          key={category._id}
        >
          {category.name}
          <X
            className="hover: bg-gray-400/20 w-4"
            onClick={() => deleteCategoryHandler(category._id)}
          />
        </div>
      ))}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogTrigger asChild>
          <Badge
            onClick={() => setModalOpen(true)}
            variant={"outline"}
            className="cursor-pointer hover:bg-gray-500/20"
          >
            +
          </Badge>
        </DialogTrigger>
        <DialogContent className="w-[460px] p-6">
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
          </DialogHeader>
          <Input
            type="text"
            placeholder="new category"
            onChange={newCategoryNameChangeHandler}
          />
          <Button onClick={createCategoryHandler}> Create</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};
