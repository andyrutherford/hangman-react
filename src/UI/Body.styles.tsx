import styled from 'styled-components';

export const Body = styled.div`
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
    border: 10px solid #000;
    background-color: #fff;
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
  .face > * {
    position: absolute;
  }
  .face .left-eye {
    height: 10px;
    width: 10px;
    top: 50px;
    left: 95px;
    transform: rotate(20deg);
  }
  .face .right-eye {
    height: 10px;
    width: 10px;
    top: 60px;
    left: 120px;
    transform: rotate(20deg);
  }
  .face .mouth {
    background-color: #000;
    height: 5px;
    width: 40px;
    top: 85px;
    left: 85px;
    transform: rotate(20deg);
  }
  .face .tongue {
    border: 5px solid red;
    height: 12px;
    width: 10px;
    top: 84px;
    left: 90px;
    transform: rotate(20deg);
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
  }
`;
