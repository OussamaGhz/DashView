import { CalendarOutlined } from "@ant-design/icons";
import { Badge, Card, List } from "antd";
import { Text } from "../text";
import UpcomingEventsSkeleton from "../skeleton/upcoming-events";
import { getDate } from "@/utilities/helpers";
import { useList } from "@refinedev/core";
import { DASHBORAD_CALENDAR_UPCOMING_EVENTS_QUERY } from "@/graphql/queries";

const UpcomingEvents = () => {
  const { data, isLoading } = useList({
    resource: "events",
    sorters: [
      {
        field: "startDate",
        order: "asc",
      },
    ],
    meta: {
      gqlQuery: DASHBORAD_CALENDAR_UPCOMING_EVENTS_QUERY,
    },
  });

  return (
    <Card
      style={{ height: "100%", overflowY: "auto" }}
      headStyle={{ padding: "8px 16px" }}
      bodyStyle={{ padding: "0 2rem" }}
      title={
        <div
          style={{
            display: "flex",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <CalendarOutlined />
          <Text size="sm" style={{ marginLeft: "0.7rem" }}>
            UpcomingEvents
          </Text>
        </div>
      }
    >
      {isLoading ? (
        <List
          itemLayout="horizontal"
          dataSource={Array.from({ length: 5 }).map((_, index) => ({
            id: index,
          }))}
          renderItem={() => <UpcomingEventsSkeleton />}
        ></List>
      ) : (
        <List
          itemLayout="horizontal"
          dataSource={data?.data || []}
          renderItem={(item) => {
            const startDate = item.startDate;
            const endDate = item.endDate;
            const renderDate =
              startDate && endDate ? getDate(startDate, endDate) : "";

            return (
              <List.Item>
                <List.Item.Meta
                  avatar={item.color && <Badge color={item.color} />}
                  title={<Text size="xs">{renderDate}</Text>}
                  description={
                    <Text ellipsis={{ tooltip: true }} strong>
                      {item.description}
                    </Text>
                  }
                />
              </List.Item>
            );
          }}
        ></List>
      )}
    </Card>
  );
};

export default UpcomingEvents;
