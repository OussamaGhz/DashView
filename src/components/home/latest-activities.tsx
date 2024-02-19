import { Button, Card, List } from "antd";
import { Text } from "../text";
import { UnorderedListOutlined } from "@ant-design/icons";
import LatestActivitiesSkeleton from "../skeleton/latest-activities";
import { useList } from "@refinedev/core";
import {
  DASHBOARD_LATEST_ACTIVITIES_AUDITS_QUERY,
  DASHBOARD_LATEST_ACTIVITIES_DEALS_QUERY,
} from "@/graphql/queries";
import dayjs from "dayjs";
import Avatar from "../layouts/Avatar";

const LatestAcivities = () => {
  const { data: audits, isLoading } = useList({
    resource: "audits",

    meta: {
      gqlQuery: DASHBOARD_LATEST_ACTIVITIES_AUDITS_QUERY,
    },
  });

  const dealsIds = audits?.data?.map((audit) => audit.targetId);

  const { data: deals } = useList({
    resource: "deals",
    queryOptions: { enabled: !!dealsIds?.length },
    filters: [{ field: "id", operator: "in", value: dealsIds }],
    pagination: {
      mode: "off",
    },

    meta: {
      gqlQuery: DASHBOARD_LATEST_ACTIVITIES_DEALS_QUERY,
    },
  });

  return (
    <Card
      style={{ height: "100%" }}
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
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <UnorderedListOutlined />
            <Text size="sm" style={{ marginLeft: "0.7rem" }}>
              Latest Activities
            </Text>
          </div>
          <Button type="text">View All</Button>
        </div>
      }
    >
      <div style={{ marginTop: "16px" }}>
        {isLoading ? (
          <List
            itemLayout="horizontal"
            dataSource={new Array(5).fill({})}
            renderItem={(item) => <LatestActivitiesSkeleton />}
          />
        ) : (
          <List
            itemLayout="horizontal"
            dataSource={audits?.data}
            renderItem={(item) => {
              const deal = deals?.data?.find(
                (deal) => deal.id == item.targetId
              );

              return (
                <List.Item>
                  <List.Item.Meta
                    title={dayjs(deal?.createdAt).format("MMM DD, YYYY HH:mm")}
                    avatar={
                      <Avatar
                        shape="square"
                        size={48}
                        src={deal?.company.avatarUrl}
                        name={deal?.company.name}
                      />
                    }
                    description={
                      <Text size="sm">
                        {deal?.title} - {item.createdAt}
                      </Text>
                    }
                  />
                </List.Item>
              );
            }}
          />
        )}
      </div>
    </Card>
  );
};

export default LatestAcivities;
