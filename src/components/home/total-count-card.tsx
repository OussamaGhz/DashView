import { Card } from "antd";
import { totalCountVariants } from "@/constants";

type Props = {
  resource: string;
  isLoading: boolean;
  data: number | undefined;
};

const TotalCountCard = ({ resource, isLoading, data }: Props) => {
//   const { icon } = totalCountVariants[resource];
  

  return (
    <Card
      style={{ height: "100%" }}
      bodyStyle={{ padding: "8px" }}
      size="small"
    >
    </Card>
  );
};

export default TotalCountCard;
