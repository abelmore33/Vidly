import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
const LoadingCard = () => {
  return (
    <Card
      borderRadius={"10px"}
      overflow="hidden"
      cursor="pointer"
      width={"300px"}
    >
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default LoadingCard;
