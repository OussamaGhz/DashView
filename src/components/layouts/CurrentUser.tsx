import { Popover } from "antd";
import Avatar from "./Avatar";

const CurrentUser = () => {
  return (
    <Popover
      placement="bottomRight"
      trigger="click"
      overlayInnerStyle={{ padding: 0 }}
      overlayStyle={{ zIndex: 999 }}
    >
      <Avatar />
    </Popover>
  );
};

export default CurrentUser;
