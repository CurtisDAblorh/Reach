import clsx from "clsx";
import { reachvid } from "../assets";
import SideNavItem from "./SideNavItem";

type SideNavProps = {
  isOpen: boolean;
};

const SideNav = ({ isOpen }: SideNavProps) => {
  return (
    <div
      className={clsx(
        "bg-white top-0 right-0 fixed mt-24 w-[14.5vw] h-full p-10 pr-20 ease-in-out duration-300 z-10",
        {
          "translate-x-0": isOpen,
          "translate-x-full": !isOpen,
        }
      )}
    >
      <h2 className="font-bold underline">More Videos</h2>

      <ul>
        <SideNavItem src={reachvid} />
        <SideNavItem src={reachvid} />
        <SideNavItem src={reachvid} />
        <SideNavItem src={reachvid} />
      </ul>
    </div>
  );
};

export default SideNav;
