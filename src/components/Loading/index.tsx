import React from "react";

import { ActivityIndicator } from "react-native";

interface Props {
  isAnimating?: boolean;
}

const Loading = ({ isAnimating }: Props) => {
  return (
    <ActivityIndicator color={"#999999"} animating={isAnimating} size="small" />
  );
};

export default Loading;
