import React, { useContext } from "react";
import CurrentUser from "./CurrentUser";
import { Layout, Space, Button } from "antd";
import { getBgColor } from "@/utilities/get-color-mode";
import { ColorModeContext } from "@/contexts/color-mode";
import { BulbOutlined } from "@ant-design/icons";

const Header = () => {
  const getBgColor = (mode: string) => {
    return mode === "light" ? "#fff" : "#001529";
  };

  const { mode, setMode } = useContext(ColorModeContext);
  const customStyles: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "sticky",
    zIndex: 999,
    top: 0,
    backgroundColor: getBgColor(mode),
  };

  const toggleColorMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <Layout.Header style={customStyles}>
      <Button
        onClick={toggleColorMode}
        icon={<BulbOutlined />}
        shape="round"
        type="primary"
        size="large"
        style={{ width: "20%" }}
      >
        Switch to {mode === "light" ? "Dark" : "Light"} Mode
      </Button>
      <Space align="center" size={"middle"}>
        <CurrentUser />
      </Space>
    </Layout.Header>
  );
};

export default Header;