import DealsCharts from "@/components/home/deals-chart";
import TotalCountCard from "@/components/home/total-count-card";
import UpcomingEvents from "@/components/home/upcoming-events";
import { Card, Col, Row } from "antd";
import { useCustom, useList } from "@refinedev/core";
import { DashboardTotalCountsQuery } from "@/graphql/types";
import { DASHBOARD_TOTAL_COUNTS_QUERY } from "@/graphql/queries";

export const Home = () => {
  const { data, isLoading } = useCustom<DashboardTotalCountsQuery>({
    url: "",
    method: "get",
    meta: {
      gqlQuery: DASHBOARD_TOTAL_COUNTS_QUERY,
    },
  });
  // setting the structure of the home page
  return (
    <div>
      <Row gutter={[32, 32]} style={{ marginBottom: "26px" }}>
        <Col
          xs={24}
          sm={24}
          xl={8}
          style={{
            height: "120px",
          }}
        >
          <TotalCountCard
            resource="companies"
            isLoading={isLoading}
            data={data?.data.companies.totalCount}
          />
        </Col>
        <Col
          xs={24}
          sm={24}
          xl={8}
          style={{
            height: "120px",
          }}
        >
          <TotalCountCard
            resource="contacts"
            isLoading={isLoading}
            data={data?.data.contacts.totalCount}
          />
        </Col>
        <Col
          xs={24}
          sm={24}
          xl={8}
          style={{
            height: "120px",
          }}
        >
          <TotalCountCard
            resource="deals"
            isLoading={isLoading}
            data={data?.data.contacts.totalCount}
          />
        </Col>
      </Row>
      <Row gutter={[32, 32]}>
        <Col
          xs={24}
          sm={24}
          xl={8}
          style={{
            height: "400px",
          }}
        >
          <UpcomingEvents />
        </Col>
        <Col
          xs={24}
          sm={24}
          xl={16}
          style={{
            height: "400px",
          }}
        >
          <DealsCharts />
        </Col>
      </Row>
    </div>
  );
};
