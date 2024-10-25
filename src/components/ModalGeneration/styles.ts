import styled from 'styled-components';
import { device } from 'util/media';

const ModalGenerationContainer = styled.div`
  padding: 0px 40px 50px 40px;
`;

const GridGeneration = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 14px;
  grid-row-gap: 14px;

  margin-top: 35px;

  @media ${device.mobileL} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media ${device.laptopL} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export { ModalGenerationContainer, GridGeneration };
