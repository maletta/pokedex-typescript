import styled, { css } from "styled-components";

interface IContainerProps {
  variant: "primary" | "secondary";
}

const Container = styled.div<IContainerProps>`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;

  width: 160px;
  min-width: 160px;
  height: 129px;

  padding-inline: 18px;
  padding-block: 30px 20px;

  border-radius: 10px;

  overflow: hidden;

  cursor: pointer;

  transition: background 300ms ease-in-out;

  ${({ variant }) => {
    if (variant === "primary") {
      return css`
        background: linear-gradient(100.59deg, #e5e5e5 0%, rgba(245, 245, 245, 0) 100%), #fff;
      `;
    } else {
      return css`
        background-color: #ea5d60;
      `;
    }
  }}

  span {
    z-index: 2;
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.9rem;

    ${({ variant }) => {
      if (variant === "primary") {
        return css`
          color: var(--text-grey);
        `;
      } else {
        return css`
          color: #fff;
        `;
      }
    }};
  }

  img {
    height: 45px;
    z-index: 2;
  }

  svg:first-child {
    position: absolute;
    z-index: 1;

    height: 35px;
    width: 80px;

    top: 10px;
    left: 10px;
  }

  svg:nth-child(2) {
    height: 45px;
    z-index: 2;
  }

  svg:last-child {
    position: absolute;
    z-index: 1;

    width: 110px;
    height: 110px;
    left: 60px;
    top: 70px;
  }
`;

export { Container };
