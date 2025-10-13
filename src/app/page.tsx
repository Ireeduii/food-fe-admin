import { SideBar } from "@/components/SideBar";
import { CreateFoodDialog } from "@/components/CreateFoodDialog";
import { AddFoodHandler } from "@/components/utils/add-food-util";
import ProductPage from "@/products/page";

export default function Home() {
  return (
    <div className="flex">
      <SideBar />
      {/* <Header /> */}
      {/* <DialogDemo /> */}
      <CreateFoodDialog />
      <ProductPage />
      {/* <AddFoodHandler /> */}
    </div>
  );
}
