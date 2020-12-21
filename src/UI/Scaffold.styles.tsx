import styled from 'styled-components';

export const Scaffold = styled.div`
  max-width: 400px;
  height: 600px;
  margin: auto;
  position: relative;
  > * {
    background-color: #000;
    position: absolute;
  }
  .bottom {
    bottom: 10px;
    left: 10px;
    width: 200px;
    height: 10px;
  }
  .middle {
    bottom: 10px;
    left: 55px;
    height: 550px;
    width: 10px;
  }
  .top {
    bottom: 520px;
    left: 55px;
    height: 10px;
    width: 200px;
    transform: rotate(20deg);
  }
`;
