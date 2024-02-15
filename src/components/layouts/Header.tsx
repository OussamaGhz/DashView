import React from "react";
import CurrentUser from "./CurrentUser";
import { Layout, Space } from "antd";
import { getBgColor } from "@/utilities/get-color-mode";

const Header = () => {
  const bgColor = getBgColor();
  const customStyles: React.CSSProperties = {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    background: bgColor,
    position: "sticky",
    zIndex: 999,
    top: 0,
  };
  return (
    <Layout.Header style={customStyles}>
      <Space align="center" size={"middle"}>
        <CurrentUser />
      </Space>
    </Layout.Header>
  );
};

export default Header;
