"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectDemo } from "@/components/Select";
import { TextareaDemo } from "@/components/TextArea";

export function DialogDemo() {
  function handleImageChange(e: any) {
    const file = e.target.files[0];

    const filePreview = URL.createObjectURL(file);
    // setPreview(filePreview);
  }

  function handleOnClick() {
    fetch("");
  }

  return (
    <Dialog>
      <form>
        <DialogTrigger
          asChild
          className="w-80 h-60 mt-20 ml-10 border-red-300 border-dashed  "
        >
          <Button variant="outline">
            <button className="rounded-full">+</button>
            Add new Dish to <br></br>Appetizers
          </Button>
        </DialogTrigger>

        <DialogContent className="w-[400px]">
          <DialogHeader>
            <DialogTitle>Dishes info</DialogTitle>
          </DialogHeader>
          <div className="grid  gap-4">
            <div className="grid gap-3 flex ">
              <Label htmlFor="name-1">Dish name</Label>
              {/* <Input id="name-1" name="name" className="w-[300px]" /> */}
              <TextareaDemo />
            </div>

            <div className="grid gap-3 ">
              <Label htmlFor="username-1">Dash category</Label>
              {/* <Input id="username-1" name="username" /> */}
              <SelectDemo />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="username-1">Ingredients</Label>
              {/* <Input id="username-1" name="username" /> */}
              <TextareaDemo />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="username-1">Food Price</Label>
              <Input id="username-1" name="username" type="number" />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <div className="grid w-full max-w-sm items-center gap-3">
                <Label htmlFor="picture">Picture</Label>
                <Input id="picture" type="file" />

                <img src="trash.svg" className="mr-90 mt-3 " />
                <Button type="submit" className="w-fit" onClick={handleOnClick}>
                  Save changes
                </Button>
              </div>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
