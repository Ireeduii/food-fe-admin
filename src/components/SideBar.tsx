import { Button } from "./ui/button";

export const SideBar = () => {
  // return <div className="bg-white w-1/6 h-screen">Sidebar</div>;
  return (
    <div className="flex gap-y-9 ml-[20px]">
      <div className="flex flex-col w-[205px] items-start ">
        <div>
          <img className="w-[36px] h-[30px] mt-[36px]" src="hat.png" />{" "}
        </div>
        <div className="flex flex-col">
          <h3 className="text-[18px]">NomNom</h3>
          <span className="text-[12px] text-gray-500">Swift delivery</span>
        </div>

        <Button className="mt-[30px] bg-black border">Food menu</Button>
        <Button className="mt-[15px] w-[100px] bg-white border text-black">
          Orders
        </Button>
      </div>
      <div className="bg-white w-1/6 h-screen"></div>
    </div>
  );
};
