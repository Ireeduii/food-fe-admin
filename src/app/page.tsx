import { SideBar } from "@/components/SideBar";
import { CreateFoodDialog } from "@/components/CreateFoodDialog";

export default function Home() {
  return (
    <div className="flex">
      <SideBar />

      {/* <Header /> */}
      {/* <DialogDemo /> */}

      <CreateFoodDialog />
    </div>
  );
}
