import { PropsWithChildren, useState } from "react";
import TopNav from "../components/TopNav";
import SideNav from "../components/SideNav";
import Main from "../components/Main";

const Layout = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-screen">
      <TopNav isOpen={isOpen} setIsOpen={() => setIsOpen((prev) => !prev)} />
      <SideNav isOpen={isOpen} />
      <Main>{children}</Main>
    </div>
  );
};

export default Layout;
