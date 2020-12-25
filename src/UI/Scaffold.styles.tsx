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
    width: 300px;
  }
  .middle {
    bottom: 10px;
    height: 550px;
    left: 55px;
    width: 10px;
  }
  .top-1 {
    bottom: 525px;
    height: 10px;
    left: 51px;
    transform: rotate(-20deg);
    width: 200px;
  }
  .top-2 {
    height: 10px;
    left: 55px;
    top: 30px;
    width: 190px;
  }
  .noose {
    position: relative;
  }
  .noose > * {
    background-color: #000;
    position: absolute;
  }
  .rope {
    height: 120px;
    left: 237px;
    top: 30px;
    width: 10px;
  }
  #noose {
    background: #fff;
    height: 80px;
    left: 202px;
    top: 150px;
    width: 80px;
  }
`;
