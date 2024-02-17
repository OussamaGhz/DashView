import { DollarCircleOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { Text } from "../text";
import { Area, AreaConfig } from "@ant-design/plots";
import { useList } from "@refinedev/core";
import { DASHBOARD_DEALS_CHART_QUERY } from "@/graphql/queries";
import { useContext, useMemo } from "react";
import { mapDealsData } from "@/utilities/helpers";
import { DashboardDealsChartQuery } from "@/graphql/types";
import { GetFieldsFromList } from "@refinedev/nestjs-query";
import { getThemeMode } from "@/utilities/get-color-mode";
import { ColorModeContext } from "@/contexts/color-mode";

const DealsCharts = () => {
  const { data, isLoading } = useList<
    GetFieldsFromList<DashboardDealsChartQuery>
  >({
    resource: "dealStages",

    meta: {
      gqlQuery: DASHBOARD_DEALS_CHART_QUERY,
    },
  });

  const dealData = useMemo(() => {
    return mapDealsData(data?.data);
  }, [data?.data]);

  const getBgColor = (mode: string) => {
    return mode === "light" ? "#001529" : "#fff";
  };

  const { mode } = useContext(ColorModeContext);

  const config: AreaConfig = {
    data: dealData,
    xField: "timeText",
    yField: "value",
    isStack: false,
    seriesField: "state",
    animation: true,
    startOnZero: false,
    smooth: true,
    legend: {
      offsetY: -6,
      textStyle: {
        fill: getBgColor(mode),
      },
    },
    xAxis: {
      label: {
        style: {
          fill: getBgColor(mode),
        },
      },
    },
    yAxis: {
      tickCount: 4,
      label: {
        formatter: (v: string) => {
          return `$${Number(v) / 1000}k`;
        },
        style: {
          fill: getBgColor(mode),
        },
      },
    },
    label: {
      style: {
        fill: "#fff",
      },
    },
    theme: {
      defaultColor: "#fff",
    },
    width: 500,
  };

  return (
    <Card
      style={{ height: "100%", overflow: "auto", fill: "white" }}
      styles={{
        header: {
          padding: "8px 16px",
        },
        body: {
          padding: "1rem 2rem",
          paddingInline: "20px",
          overflow: "auto",
        },
      }}
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
            Deals
          </Text>
        </div>
      }
    >
      <Area {...config} />
    </Card>
  );
};

export default DealsCharts;
