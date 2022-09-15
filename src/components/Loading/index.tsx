import React from "react";

import { LoadingContainer } from "./styles";

interface ILoading {
  isLoading: boolean;
}

const Loading: React.FC<ILoading> = ({ isLoading }) => {
  return (
    <LoadingContainer className={!isLoading ? "hidden" : ""}>
      <img src="/assets/pokeball-loading.png" alt="pokeball" />
    </LoadingContainer>
  );
};

export default Loading;
