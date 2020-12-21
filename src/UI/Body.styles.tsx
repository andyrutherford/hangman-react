import styled from 'styled-components';

export const Body = styled.div`
  outline: 1px solid red;
  width: 200px;
  height: 500px;
  position: absolute;
  bottom: 0;
  left: 50%;
  > * {
    background-color: #000;
    position: absolute;
  }
  .head {
    top: 30px;
    left: 65px;
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
  .torso {
    top: 95px;
    left: 95px;
    height: 135px;
    width: 10px;
  }
  .left-leg {
    top: 225px;
    left: 82px;
    height: 80px;
    width: 10px;
    transform: rotate(20deg);
  }
  .right-leg {
    top: 225px;
    left: 109px;
    height: 80px;
    width: 10px;
    transform: rotate(-20deg);
  }
  .left-arm {
    top: 125px;
    left: 82px;
    height: 80px;
    width: 10px;
    transform: rotate(20deg);
  }
  .right-arm {
    top: 125px;
    left: 109px;
    height: 80px;
    width: 10px;
    transform: rotate(-20deg);
  }
`;
