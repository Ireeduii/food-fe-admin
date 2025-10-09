import { ReactNode } from "react";
import { Header } from "@/components/Header";
// import Sidebar from "@/components/SideBar";

export const AdminLayout = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const customStyle = className + " w-full";
  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <div className={customStyle}>
        <Header />
        {children}
      </div>
    </div>
  );
};
