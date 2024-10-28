import styled, { css } from "styled-components/macro";

const SliderContainer = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  
  background-color: rgba(23, 23, 27, 0.5);
  z-index: 100;

  /* Animações para entrada e saída */
  &.open {
    animation: fadeIn 300ms ease-in-out forwards;
    width: 100vw;
    height: 100vh;
  }

  &.closed {
    animation: fadeOut 3000ms ease-in-out forwards;
  }

  /* Definição dos keyframes */
  @keyframes fadeIn {
    from {
      opacity: 0;
      visibility: hidden;
    }
    to {
      opacity: 1;
      visibility: visible;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
      visibility: visible;
    }
    to {
      opacity: 0;
      visibility: hidden;
    }
  }
`;

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

export { SliderContainer, SliderContent, Close, SliderContentOverFlow, DragBar };
