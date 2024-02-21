import Companies from "./list";
import { Button, Form, Input, Modal, Space } from "antd";
import { useGo } from "@refinedev/core";
import { useModalForm } from "@refinedev/antd";
import { CREATE_COMPANY_MUTATION } from "@/graphql/mutations";

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

  return (
    <Companies>
      <Modal
        {...modalProps}
        maskClosable={true} // Set maskClosable to true
        onCancel={() => goToList}
        title={"Create Company"}
        footer={null}
        width={512}
      >
        <Form {...formProps} >
          <Form.Item
            label={"Company name"}
            name={"name"}
            rules={[{ required: true }]}
          >
            <Input placeholder="Company Name" />
          </Form.Item>
          <Form.Item
            label={"Company name"}
            name={"name"}
            rules={[{ required: true }]}
          >
            <Input placeholder="Company Name" />
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
