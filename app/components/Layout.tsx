import type { ReactNode, VFC } from "react";
import { memo } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

// ここまで
//
//
//
// ここから

type PROPS = {
  children: ReactNode;
};

// ここまで
//
//
//
// ここから

export const Layout: VFC<PROPS> = memo(({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="grow">{children}</div>
      <Footer />
    </div>
  );
});
Layout.displayName = "Layout";
