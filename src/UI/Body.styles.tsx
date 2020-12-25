import styled from 'styled-components';

export const Body = styled.div`
  bottom: 0;
  height: 500px;
  left: 50%;
  position: absolute;
  width: 200px;
  > * {
    background-color: #000;
    position: absolute;
  }
  .head {
    background-color: #fff;
    border-radius: 50%;
    border: 10px solid #000;
    height: 70px;
    left: 65px;
    top: 30px;
    width: 70px;
  }
  .torso {
    height: 135px;
    left: 95px;
    top: 95px;
    width: 10px;
  }
  .left-leg {
    height: 80px;
    left: 82px;
    top: 225px;
    transform: rotate(20deg);
    width: 10px;
  }
  .right-leg {
    height: 80px;
    left: 109px;
    top: 225px;
    transform: rotate(-20deg);
    width: 10px;
  }
  .left-arm {
    height: 80px;
    left: 82px;
    top: 125px;
    transform: rotate(20deg);
    width: 10px;
  }
  .right-arm {
    height: 80px;
    left: 109px;
    top: 125px;
    transform: rotate(-20deg);
    width: 10px;
  }
  .face > * {
    position: absolute;
  }
  .face .left-eye {
    height: 10px;
    left: 95px;
    top: 50px;
    transform: rotate(20deg);
    width: 10px;
  }
  .face .right-eye {
    height: 10px;
    left: 120px;
    top: 60px;
    transform: rotate(20deg);
    width: 10px;
  }
  .face .mouth {
    background-color: #000;
    height: 5px;
    left: 85px;
    top: 85px;
    transform: rotate(20deg);
    width: 40px;
  }
  .face .tongue {
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    border: 5px solid red;
    height: 12px;
    left: 90px;
    top: 84px;
    transform: rotate(20deg);
    width: 10px;
  }
`;
