import { getNameInitials } from "@/utilities";
import { Avatar as AntAvatar } from "antd";
import { AvatarProps } from "antd";

type props = AvatarProps & {
  name: string;
};

const Avatar = ({ name, style, ...rest }: props) => {
  return (
    <AntAvatar
      size={"small"}
      alt={name}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        border: "none",
      }}
      {...rest}
    >
      {getNameInitials(name)} 
    </AntAvatar>
  );
};

export default Avatar;
