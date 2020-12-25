import styled from 'styled-components';

export const Scaffold = styled.div`
  height: 600px;
  margin: auto;
  max-width: 400px;
  position: relative;
  > * {
    background-color: #000;
    position: absolute;
  }
  .bottom {
    bottom: 10px;
    height: 10px;
    left: 10px;
    width: 200px;
  }
  .middle {
    bottom: 10px;
    height: 550px;
    left: 55px;
    width: 10px;
  }
  .top {
    bottom: 520px;
    height: 10px;
    left: 55px;
    transform: rotate(20deg);
    width: 200px;
  }
`;
