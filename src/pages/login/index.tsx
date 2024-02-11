import { AuthPage } from "@refinedev/antd";
import { authCredentials } from "../../providers/data/auth";
export const Login = () => {
  
  return (
    <AuthPage
      type="login"
      formProps={{
        initialValues: authCredentials,
      }}
    />
  );
};
