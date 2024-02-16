import { Card } from "antd";

type Props = {
  resource: string;
  isLoading: boolean;
  data: number | undefined;
};

const TotalCountCard = ({ resource, isLoading, data }: Props) => {
  return <Card style={{ height: "100%" }} >
    <h1>{resource}</h1>
  </Card>;
};

export default TotalCountCard;
