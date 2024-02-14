import { Avatar as AntAvatar } from "antd";
import { AvatarProps } from "antd";

type props = AvatarProps & {
  name: string,
}

const Avatar = ({name, style, ...rest}: props) => {
  return (
    <AntAvatar
      size={"small"}
      alt="user avatar"
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        border: "none",
      }}
    >
      {name}
    </AntAvatar>
  );
};

export default Avatar;
