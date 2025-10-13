import { SideBar } from "@/components/SideBar";
import ProductPage from "@/products/page";

export default function Home() {
  return (
    <div className="flex">
      <SideBar />
      <ProductPage />
    </div>
  );
}
