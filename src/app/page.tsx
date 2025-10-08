import { DialogDemo } from "@/components/Dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { SideBar } from "@/components/SideBar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Sidebar } from "lucide-react";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div className="flex">
      <SideBar />
      {/* <Header /> */}
      <DialogDemo />

      {/* <Dialog>
          <DialogTrigger className="rounded-full border bg-red-400 w-6 text-white">
            +
          </DialogTrigger>
          <DialogContent>
            <DialogHeader className="w-[400px] h-[150px]">
              <DialogTitle>Add new category</DialogTitle>{" "}
              <Label htmlFor="username-1">Category name</Label>
              <Input placeholder="Type category name..."></Input>
              <Button className="w-[100px] ml-[350px]">Save changes</Button>
            </DialogHeader>
          </DialogContent>
        </Dialog> */}
    </div>
  );
}
