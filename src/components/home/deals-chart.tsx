import { DollarCircleOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { Text } from "../text";
import { Area, AreaConfig } from "@ant-design/plots";
import { useList } from "@refinedev/core";
import { DASHBOARD_DEALS_CHART_QUERY } from "@/graphql/queries";
import { useMemo } from "react";
import { mapDealsData } from "@/utilities/helpers";
import {
  DashboardDealsChartQuery,
  DashboardDealsChartQueryVariables,
} from "@/graphql/types";
import { GetFieldsFromList } from "@refinedev/nestjs-query";

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
        fill: "#fff", // Adjust legend text color
      },
    },
    xAxis: {
      label: {
        style: {
          fill: "#fff", // Adjust x-axis label text color
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
          fill: "#fff", // Adjust y-axis label text color
        },
      },
    },
    label: {
      style: {
        fill: "#fff", // Adjust data label text color
      },
    },
    theme: {
      defaultColor: "#fff", // Adjust the default text color
    },
  };
  

  return (
    <Card
      style={{ height: "100%", overflow: "auto", fill: "white" }}
      styles={{
        header: {
          padding: "8px 16px",
        },
        body: {
          padding: "0 2rem",
          paddingInline: "20px",
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
