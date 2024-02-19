import { ThemedLayoutV2, ThemedTitleV2 } from "@refinedev/antd";
import React from "react";
import Header from "./Header";

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemedLayoutV2
      Header={Header}
      Title={(TitleProps) => <ThemedTitleV2 {...TitleProps} text="DashView" />}
    >
      {children}
    </ThemedLayoutV2>
  );
};

export default Layout;
