import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: no-wrap;
  height: 40px;
  background: #004958;
  padding: 0 8px;
  position: relative;
`;

type Props = {
  active: boolean;
};

export const Button = styled.button<Props>`
  position: absolute;
  appearance: none;
  outline: none;
  height: 80%;
  width: 64px;
  color: lightgray;
  font-size: 13px;
  letter-spacing: 0.7px;
  border: none;
  background: ${props => (props.active ? "#00303a" : "transparent")};
  border-radius: 6px 6px 0 0;
`;
