import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin: 24px;
  border: solid 1px #c1c1c1;
`;
export const Box = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  background: #2196f3;
  border-radius: 3px;
  transform: translate(-50%, -50%);
`;
export const Button = styled.button`
  margin-top: 12px;
  margin-left: 24px;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: white;
  cursor: pointer;
  outline: none;
  appearance: none;
`;
