import React from "react";
import { BarContainer, ProgressBarStyle } from "./style";

interface Props {
  progressClick?: number;
}

export function ProgressBar({ progressClick }: Props) {
  return (
    <BarContainer>
      <ProgressBarStyle progress={progressClick}></ProgressBarStyle>
    </BarContainer>
  );
}
