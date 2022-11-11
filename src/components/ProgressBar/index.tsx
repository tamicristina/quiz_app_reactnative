import React from "react";
import { BarContainer, Barfilling } from "./style";

interface Props {
  progressClick?: number;
}

export function ProgressBar({ progressClick }: Props) {
  return (
    <BarContainer>
      <Barfilling progress={progressClick} />
    </BarContainer>
  );
}
