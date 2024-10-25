import styled, { css } from "styled-components/macro";

interface ISliderContainer {
  isOpen: boolean;
}

interface ISliderContent {
  // bottomOffset: number;
  isOpen: boolean;
}

// const SliderContainer = styled.div<ISliderContainer>`
//   ${({ isOpen }) => {
//     if (isOpen)
//       return css`
//         display: flex;
//       `;
//     else
//       return css`
//         display: none;
//       `;
//   }};
//   /* display: block; */
//   position: absolute;

//   width: 100vw;
//   height: 100vh;

//   background-color: rgba(23, 23, 27, 0.5);

//   z-index: 100;
// `;

const SliderContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(23, 23, 27, 0.5);
  z-index: 100;

  /* Transição suave para opacidade e visibilidade */
  transition: opacity 300ms ease-in-out, visibility 300ms ease-in-out;

  /* Inicialmente, o modal está escondido */
  opacity: 0;
  visibility: hidden;

  /* Classe que torna o modal visível */
  &.open {
    opacity: 1;
    visibility: visible;
  }

  &.closed {
    opacity: 0;
    visibility: hidden;
  }
`;

// define styles inline to avoid generate styled component classes
// const SliderContent = styled.div.attrs<ISliderContent>(({ bottomOffset }) => {
//   const transition = bottomOffset === 0 ? "bottom 200ms ease 0s" : "none";

//   return {
//     style: {
//       bottom: `${bottomOffset}px`,
//       transition,
//     },
//   };
// }) <ISliderContent>`
//   display: flex;
//   flex-direction: column;

//   position: absolute;

//   width: 100vw;
//   max-height: calc(100vh - 60px); /** tamanho max - espaço no top */

//   padding-top: 30px;

//   background-color: #fff;

//   border-radius: 30px 30px 0px 0px;

//   transition: transform 300ms ease-in-out;

//   ${({ isOpen }) => {
//     if (isOpen)
//       return css`
//         transform: translateY(0%);
//         display: flex;
//       `;
//     else
//       return css`
//         transform: translateY(0%);
//         display: none;
//       `;
//   }};
// `;

const SliderContent = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100vw;
  max-height: calc(100vh - 60px); /** tamanho max - espaço no top */
  padding-top: 30px;
  background-color: #fff;
  border-radius: 30px 30px 0px 0px;
  bottom: 0px;
  
  /* Define uma transição suave para o movimento e opacidade */
  transition: transform 300ms ease-in-out, opacity 200ms ease-in-out;
  
  /* Inicialmente, o modal começa abaixo da tela */
  transform: translateY(100%);
  opacity: 0;
  pointer-events: none;

  /* Classe que exibe o modal de forma visível */
  &.open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  /* Classe que oculta o modal */
  &.closed {
    transform: translateY(100%);
    opacity: 0;
    pointer-events: none;
  }
`;

const SliderContent2 = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100vw;
  max-height: calc(100vh - 60px); 
  padding-top: 30px;
  background-color: #fff;
  border-radius: 30px 30px 0px 0px;
  transition: transform 300ms ease-in-out; /* Adiciona suavidade ao movimento */

  /* Define a transição para os estados de abertura e fechamento */
  &.open {
    transform: translateY(0); /* Modal no topo */
  }

  &.closed {
    transform: translateY(100%); /* Modal fora da tela */
  }
`;

const SliderContentOverFlow = styled.div`
  width: 100%;
  height: 100%;

  overflow-y: scroll;

  /* pointer-events: none; */
`;

const DragBar = styled.div`
  position: absolute;

  top: -15px;
  right: 50%;
  left: calc(50% - 40px);

  width: 80px;
  height: 6px;

  border-radius: 3px;
  background-color: white;

  cursor: grab;
`;

const Close = styled.button`
  position: absolute;
  cursor: pointer;
  outline: none;
  background: none;
  border:none;
  top: -25px;
  right: 20px;
  color: ${({ theme }) => theme.colors.default.WHITE};
  font-size: 1.6rem;
  letter-spacing: 0.1323rem;

  &:hover {
  color: ${({ theme }) => theme.colors.type.DARK};

  }
`;

export { SliderContainer, SliderContent, SliderContent2, Close, SliderContentOverFlow, DragBar };
