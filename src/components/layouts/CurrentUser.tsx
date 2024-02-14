import { Popover } from "antd";
import Avatar from "./Avatar";
import { useGetIdentity } from "@refinedev/core";

// importing the user type form grapql schema
/* 
  to use the graphql schema: 
  1. must add the plugin on vite config (vite.config.ts)
  2. must add the schema.types.ts on graphql config (graphql.config.ts)
  3. define the base url and the paths on ts config (tsconfig.ts)
  4. add code gen script on package file (package.json)
  5. create mutations and queries (see graphql folder)
  6. run codegen command to generate all types
*/

// importing the User type form graphql schema
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
      <Avatar
        name={user?.name || ""}
        src={user?.avatarUrl}
        style={{ cursor: "pointer" }}
        size={"default"}
        
      />
    </Popover>
  );
};

export default CurrentUser;