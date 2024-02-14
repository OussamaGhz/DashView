import { Popover } from "antd";
import Avatar from "./Avatar";
import { useGetIdentity } from "@refinedev/core";

// importing the user type form grapql schema
/* 
  to use the graphql schema: 
  1. must add the plugin on vite config (vite.config.ts)
  2. must add the schema.types.ts on graphql config (graphql.config.ts)
  3. define the base url and the paths on ts config (tsconfig.ts)
*/

import type { User } from "@/graphql/schema.types";

const CurrentUser = () => {
  // using graphQl schema
  const { data: user } = useGetIdentity<User>();
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
