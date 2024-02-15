import DealsCharts from "@/components/home/deals-chart";
import UpcomingEvents from "@/components/home/upcoming-events";
import { Col, Row } from "antd";

export const Home = () => {
  // setting the structure of the home page
  return (
    <div>
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
          xl={8}
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
