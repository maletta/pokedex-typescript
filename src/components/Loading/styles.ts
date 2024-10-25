import styled from 'styled-components';

const LoadingContainer = styled.div`
  display: block;
  position: fixed;
  bottom: 10px;
  left: 50%;

  transform: translate(-50%, 0);

  animation-name: show;
  animation-duration: 200ms;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);

  @keyframes show {
    from {
      transform: translate(-50%, calc(100% + 10px));
    }
    to {
      transform: translate(-50%, 0);
    }
  }

  @keyframes hidden {
    from {
      display: block;
      transform: translate(-50%, 0);
    }
    to {
      display: block;
      transform: translate(-50%, calc(100% + 10px));
    }
  }

  &.hidden {
    transform: translate(-50%, calc(100% + 10px));

    animation-name: hidden;
    animation-duration: 200ms;
    animation-iteration-count: 1;
  }

  img {
    height: 50px;

    animation-name: spin;
    animation-duration: 800ms;
    animation-iteration-count: infinite;
    /* animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275); */
    animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`;

export { LoadingContainer };
