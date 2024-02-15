import { DollarCircleOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { Text } from "../text";

const DealsCharts = () => {
  return (
    <Card
      style={{ height: "100%" }}
      headStyle={{
        padding: "8px 16px",
      }}
      bodyStyle={{ padding: "0 2rem", paddingInline: "20px" }}
      title={
        <div
          style={{
            display: "flex",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <DollarCircleOutlined />
          <Text size="sm" style={{ marginLeft: "0.7rem" }}>
            UpcomingEvents
          </Text>
        </div>
      }
    ></Card>
  );
};

export default DealsCharts;
