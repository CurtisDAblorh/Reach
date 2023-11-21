import { PropsWithChildren } from "react";

const Main = ({ children }: PropsWithChildren) => {
  return <div className="pt-24">{children}</div>;
};

export default Main;
