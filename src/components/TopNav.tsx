import { curtis2 } from "../assets";

type TopNavProps = {
  isOpen: boolean;
  setIsOpen: () => void;
};

const TopNav = ({ isOpen, setIsOpen }: TopNavProps) => {
  return (
    <nav className="flex items-center h-24 px-6 z-10 fixed bg-white w-full">
      <h1 className="text-3xl font-bold">
        Reach Industries Frontend Assessment.
      </h1>

      <div className="flex ml-auto">
        <img
          src={curtis2}
          alt="user avatar"
          className="rounded-md w-12 h-12 p-1"
        />
        <div className="mr-4">
          <h4 className="font-bold">Curtis Mensah</h4>
          <span className="font-bold text-xs">mensah.curtis@gmail.com</span>
        </div>
        <button
          className=" px-4 w-28 border-black border-2"
          onClick={setIsOpen}
        >
          {isOpen ? "Close" : "Open"}
        </button>
      </div>
    </nav>
  );
};

export default TopNav;
