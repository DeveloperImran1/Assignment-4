import type { ReactNode } from "react";

type CommonLayoutProps = {
  children?: ReactNode;
};

const CommonLayout = ({ children }: CommonLayoutProps) => {
  return <section className="max-w-[1200px] mx-auto">{children}</section>;
};

export default CommonLayout;
