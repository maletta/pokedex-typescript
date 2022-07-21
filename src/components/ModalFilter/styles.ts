import styled from "styled-components";

const ModalFilterContainer = styled.div`
  padding: 0px 0px 50px 40px;
`;

const GridFilter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 14px;
  grid-row-gap: 14px;

  margin-top: 35px;
`;

export { ModalFilterContainer, GridFilter };
