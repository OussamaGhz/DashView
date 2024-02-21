import Avatar from "@/components/layouts/Avatar";
import { Text } from "@/components/text";
import { COMPANIES_LIST_QUERY } from "@/graphql/queries";
import { Company } from "@/graphql/schema.types";
import { currencyNumber } from "@/utilities";
import { ArrowDownOutlined, SearchOutlined } from "@ant-design/icons";
import {
  CreateButton,
  DeleteButton,
  EditButton,
  FilterDropdown,
  List,
  useTable,
} from "@refinedev/antd";
import { getDefaultFilter, useGo } from "@refinedev/core";
import { Input, Space, Table } from "antd";
import React from "react";

const Companies = ({ children }: React.PropsWithChildren) => {
  const { filters, tableProps } = useTable({
    resource: "companies",
    onSearch: (value: { name: string }) => {
      return [
        {
          field: "name",
          operator: "contains",
          value: value.name,
        },
      ];
    },
    pagination: {
      pageSize: 12,
    },
    filters: {
      initial: [
        {
          field: "name",
          operator: "contains",
          value: undefined,
        },
      ],
    },
    sorters: {
      initial: [
        {
          field: "name",
          order: "desc",
        },
      ],
    },
    meta: {
      gqlQuery: COMPANIES_LIST_QUERY,
    },
  });

  const go = useGo();
  return (
    <>
      <List
        breadcrumb={false}
        headerButtons={() => (
          <CreateButton
            onClick={() => {
              // setting new route, it will be automatically the inital path + /new
              go({
                to: {
                  resource: "companies",
                  action: "create",
                },
                options: {
                  keepQuery: true,
                },
                type: "replace",
              });
            }}
          />
        )}
      >
        <Table {...tableProps} pagination={{ ...tableProps.pagination }}>
          <Table.Column<Company>
            dataIndex="name"
            title="Company Title"
            defaultFilteredValue={getDefaultFilter("id", filters)}
            filterIcon={<SearchOutlined />}
            filterDropdown={(props) => (
              <FilterDropdown {...props}>
                <Input placeholder="search something" />
              </FilterDropdown>
            )}
            render={(value, record) => (
              <Space>
                <Avatar
                  shape="circle"
                  name={record.name}
                  src={record.avatarUrl}
                />
                <Text style={{ whiteSpace: "nowrap", marginRight: "5px" }}>
                  {record.name}
                </Text>
              </Space>
            )}
          />
          <Table.Column<Company>
            dataIndex="deals"
            title="Open deals amount"
            sortIcon={() => <ArrowDownOutlined />}
            render={(value, record) => (
              <Text>
                {currencyNumber(record?.dealsAggregate?.[0].sum?.value || 0)}
              </Text>
            )}
          />
          <Table.Column
            dataIndex="actions"
            title="Actions"
            render={() => (
              <div style={{ display: "flex", gap: "10px" }}>
                <DeleteButton size="small" shape="default" hideText />
                <EditButton
                  size="small"
                  shape="default"
                  hideText
                  onClick={() => {
                    go({
                      to: {
                        resource: "companies",
                        action: "edit",
                        id: "1",
                      },
                      options: {
                        keepQuery: true,
                      },
                      type: "replace",
                    });
                  }}
                />
              </div>
            )}
          />
        </Table>
      </List>
      {children}
    </>
  );
};

export default Companies;
