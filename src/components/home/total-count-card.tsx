import { Card } from "antd";
import { totalCountVariants } from "@/constants";
import { Text } from "../text";
import { Area } from "@ant-design/plots";
import AreaChart, { AreaConfig } from "@ant-design/plots/es/components/area";

type Props = {
  resource: "companies" | "contacts" | "deals";
  isLoading: boolean;
  data: number | undefined;
};

const TotalCountCard = ({ resource, isLoading, data }: Props) => {
  const {
    primaryColor = "",
    secondaryColor = "",
    icon = null,
    title,
  } = totalCountVariants[resource] || {};

  const config: AreaConfig = {
    data: totalCountVariants[resource].data,
    xField: "index",
    yField: "value",
    appendPadding: [1, 0, 0],
    padding: 0,
    syncViewPadding: true,
    autoFit: true,
    tooltip: false,
    xAxis: false,
    yAxis: {
      tickCount: 12,
      label: {
        style: {
          stroke: "transparent"
        }
      },
      grid: {
        line: {
          style: {
            stroke: "transparent"
          }
        }
      }

    }
  };
  return (
    <Card
      style={{ height: "100%" }}
      bodyStyle={{ padding: "8px" }}
      size="small"
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          whiteSpace: "nowrap",
        }}
      >
        {icon}
        <Text size="md" className="secondary" style={{ marginLeft: "9px" }}>
          {title}
        </Text>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Text
          size="xxxl"
          strong
          style={{
            marginTop: "20px",
            flex: 1,
            whiteSpace: "nowrap",
            flexShrink: 0,
            marginLeft: "48px",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {" "}
          {data}
        </Text>
        <Area {...config} style={{ width: "50%" }} />
      </div>
    </Card>
  );
};

export default TotalCountCard;
