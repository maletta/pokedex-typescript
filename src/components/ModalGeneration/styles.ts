import styled from "styled-components";

const ModalGenerationContainer = styled.div`
  padding: 0px 40px 50px 40px;
`;

const GridGeneration = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 14px;
  grid-row-gap: 14px;

  margin-top: 35px;
`;

export { ModalGenerationContainer, GridGeneration };
