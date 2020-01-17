import styled from "styled-components";
import transition from "styled-transition-group";

export const Container = styled.div`
  position: relative;
  width: 128px;
`;

export const Button = styled.div`
  width: 128px;
  height: 32px;
  border: solid 1px #c1c1c1;
  border-radius: 3px;
  text-align: left;
  padding: 4px 12px;
  line-height: 32px;
  cursor: pointer;
  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: transform 0.3s ease-in-out;

  &:after {
    font-family: "Font Awesome 5 Free";
    content: "\f078";
    font-weight: 600;
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
  }
  &:active {
    transform: translateY(1px);
  }
`;

export const Menu = transition.div`
  position: absolute;
  top: 50px;
  z-index: 3;
  background-color: white;
  width: 225px;
  min-height: 180px;
  max-height: 250px;
  border: solid 1px #c1c1c1;
  border-radius: 3px;
  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.1);
  overflow-y: scroll;

  &:enter {
    opacity: 0;
  }
  &:enter-active {
    opacity: 1;
    transition: all 0.3s ease-out;
  }
  &:exit {
    opacity: 1;
  }
  &:exit-active {
    opacity: 0;
    transition: all 0.3s ease-out;
  }
`;

export const OptionsGroup = styled.div`
  padding: 4px 0;
`;

export const Option = styled.div<{ active: boolean }>`
  border-bottom: solid 1px #c1c1c1;
  padding: 0 12px;
  font-size: 16px;
  height: 40px;
  line-height: 40px;
  font-weight: bold;
  position: relative;
  cursor: pointer;

  &:after {
    transition: all 0.5s ease;
    position: absolute;
    font-family: "Font Awesome 5 Free";
    content: "\f00c";
    font-weight: 600;
    top: 50%;
    right: 24px;
    transform: translateY(-50%);
    color: ${props => (props.active ? "#64dd17" : "#c1c1c1")};
  }
  &:hover {
    &:after {
      color: #9cff57;
    }
  }
`;
