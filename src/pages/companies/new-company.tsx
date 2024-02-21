import Companies from "./list";
import { Button, Form, Input, Modal, Select, Space } from "antd";
import { useGo } from "@refinedev/core";
import { useModalForm, useSelect } from "@refinedev/antd";
import { CREATE_COMPANY_MUTATION } from "@/graphql/mutations";
import { USERS_SELECT_QUERY } from "@/graphql/queries";

const Create = () => {
  const go = useGo();
  const goToList = () =>
    go({
      to: "/companies",
      options: { keepQuery: true },
      type: "replace",
    });
  const { formProps, modalProps } = useModalForm({
    resource: "companies",
    defaultVisible: true,
    redirect: false,
    mutationMode: "pessimistic",
    onMutationSuccess: () => goToList,
    action: "create",

    meta: {
      gqlMutation: CREATE_COMPANY_MUTATION,
    },
  });

  const { queryResult, selectProps } = useSelect({
    resource: "users",
    optionLabel: "name",
    optionValue: "id",
    meta: {
      gqlQuery: USERS_SELECT_QUERY,
    },
  });

  return (
    <Companies>
      <Modal
        {...modalProps}
        maskClosable={true}
        onCancel={() => goToList}
        title={"Create Company"}
        footer={null}
        width={512}
        cancelButtonProps={{ onClick: () => goToList }}
        closeIcon={false}
      >
        <Form {...formProps} style={{ marginTop: "20px" }} layout={"vertical"}>
          <Form.Item
            label={"Company name"}
            name={"name"}
            rules={[{ required: true }]}
          >
            <Input placeholder="Company Name" />
          </Form.Item>
          <Form.Item
            label={"Sales owner"}
            name={"salesOwnerId"}
            rules={[{ required: true }]}
          >
            <Select
              placeholder="Please enter Sales owner name"
              {...selectProps}
            />
          </Form.Item>
          <Form.Item>
            <Space>
              <Button htmlType="submit" type="primary">
                Create
              </Button>
              <Button onClick={goToList}>Cancel</Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </Companies>
  );
};

export default Create;
